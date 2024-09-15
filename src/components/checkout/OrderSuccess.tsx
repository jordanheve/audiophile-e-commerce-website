import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import { formatCurrency } from '../../helpers';
import { Link } from 'react-router-dom';
import { CartProduct } from '../../types';
import CartItems from '../header/CartItems';
type OrderSuccessProps = {
  isOpen: boolean;
  product: CartProduct | null;
  total: number;
  itemsQuantity: number;
}

export default function OrderSuccess({isOpen, product, total, itemsQuantity} : OrderSuccessProps) {
  const handleClose = () => {
    isOpen = false;
  }
  return (
    <>  
        <Dialog open={isOpen} onClose={handleClose}>
          <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 z-[100]" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-[101]">
          <DialogPanel transition className="max-w-lg space-y-6 flex flex-col  text-start font-manrope mx-4 rounded-lg bg-white px-6 py-8 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <img src="/assets/checkout/icon-order-confirmation.svg" alt="success" className="w-16" />
            <DialogTitle className=" text-2xl font-bold uppercase">Thank you <br /> for  your order</DialogTitle>
            <Description className="text-sm text-zinc-500">Your order has been confirmed and will be shipped shortly</Description>
            <div>

            {product && <CartItems item={product} justshow={true} />}
              {itemsQuantity > 0 ?  
                (
                  <>
                    <p>
                      and {itemsQuantity} other item{itemsQuantity > 1 ? 's' : ''}
                    </p>
                  </>
                )
              : ''}
            <p>
              {formatCurrency(total)}
            </p>
            </div>
            <Link to="/" className="uppercase w-full text-center bg-custom-orange text-white py-3 tracking-wider text-sm">Back To Home</Link>
          </DialogPanel>

          </div>
        </Dialog>
    </>
  )
}
