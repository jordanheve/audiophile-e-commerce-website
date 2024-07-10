import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import { formatCurrency } from '../../helpers'
import { usePurchase } from "../hooks/usePurchase"
import CartItems from "./CartItems";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const {state,  dispatch, totalPurchase} = usePurchase();
  const isEmpty = useMemo( () => state.cart.length === 0, [state.cart]);
  const navigate = useNavigate();
  const handleCheckout = () => {
    dispatch({type: 'close-cart'})
    navigate('/checkout');
  }
  return (
    <div>
      <button onClick={() => dispatch({type: 'open-cart'})}><ShoppingCartIcon className="h-6 w-6 text-white" /></button>
        <Dialog open={state.cartOpen} onClose={() => dispatch({type: 'close-cart'})} className="relative z-50">

        <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0" />


        <div className="fixed inset-0 top-28">

          <DialogPanel transition className="max-w-lg space-y-6  font-manrope mx-4 rounded-lg bg-white px-6 py-8 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            {isEmpty ? (
              <div>
              <p className="text-center text-xl py-10 font-semibold">Cart is empty</p>
              </div>
            ) : (
              <>
              <div className="flex justify-between">
              <span className="uppercase font-semibold tracking-wider ">Cart ({state.cart.length})</span>
              <button className="text-zinc-500 text-sm underline" onClick={() => dispatch({type: 'clear-cart'})}>Remove all</button>
            </div>
            
            { state.cart.map(item => (
             <CartItems key={item.id} item={item} />
            )) }
            <div className="flex justify-between">
            <span className="uppercase text-zinc-500">Total</span>
            <span className="font-black">
              {formatCurrency(totalPurchase)}
            </span>
            </div>

            <button onClick={handleCheckout} className="uppercase w-full bg-custom-orange text-white py-3 tracking-wider text-sm">
              Checkout
              </button>
              </>
            )}
            

          
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
