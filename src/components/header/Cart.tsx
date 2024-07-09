import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'

import { usePurchase } from "../hooks/usePurchase"
import CartItems from "./CartItems";
export default function Cart() {
  const {state,  dispatch} = usePurchase();
  return (
    <div>
      <button onClick={() => dispatch({type: 'open-cart'})}><ShoppingCartIcon className="h-6 w-6 text-white" /></button>
        <Dialog open={state.cartOpen} onClose={() => dispatch({type: 'close-cart'})} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 top-28">
          {/* The actual dialog panel  */}
          <DialogPanel transition className="max-w-lg space-y-4  font-manrope mx-4 rounded-lg bg-white p-4 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">

            <div className="flex justify-between">
              <span className="uppercase font-semibold tracking-wider ">Cart ({state.cart.length})</span>
              <button className="text-zinc-500 text-sm underline" onClick={() => dispatch({type: 'clear-cart'})}>Remove all</button>
            </div>
            {state.cart.map(item => (
             <CartItems key={item.id} item={item} />
            ) )}

          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
