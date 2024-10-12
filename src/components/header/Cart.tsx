import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel, CloseButton } from '@headlessui/react'
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
    navigate('/checkout');
  }
  return (
    <div className="lg:basis-36 flex items-center justify-end">
        <Popover className="relative z-50">
      <PopoverButton title="Open Shopping Cart"><ShoppingCartIcon className="h-6 w-6 text-white" /></PopoverButton>
        <PopoverBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0" />
          <PopoverPanel transition className=" space-y-6 absolute right-0 max-sm:w-80 w-96 top-20 text-zinc-950 font-manrope ml-4 rounded-lg bg-white px-6 py-8 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
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

            <CloseButton  onClick={handleCheckout} className="uppercase w-full bg-custom-orange text-white py-3 tracking-wider text-sm">
              Checkout
              </CloseButton>
              </>
            )}
          </PopoverPanel>
      </Popover>
    </div>
  )
}
