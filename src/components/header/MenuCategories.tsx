import { Bars3Icon } from "@heroicons/react/24/outline"
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import CategoryOptions from "../CategoryOptions"
import { usePurchase } from "../hooks/usePurchase"

export default function MenuCategories() {
  const {state,  dispatch} = usePurchase();
  return (
    <>
      <button onClick={() => dispatch({type: 'open-menu'})}><Bars3Icon className="h-6 w-6 text-white" /></button>
      <Dialog open={state.menuOpen} onClose={() => dispatch({type: 'close-menu'})} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 " />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 top-24 overflow-auto">
          {/* The actual dialog panel  */}
          <DialogPanel transition className=" space-y-4 bg-white p-8 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <CategoryOptions />
          </DialogPanel>
        </div>
      </Dialog>
    </>

  )
}
