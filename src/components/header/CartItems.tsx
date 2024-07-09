import type { CartProduct } from '../../types'
import { formatCurrency } from '../../helpers'
import { usePurchase } from '../hooks/usePurchase'
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
type CartItemsProps = 
{
  item: CartProduct
}

export default function CartItems({item} : CartItemsProps) {
    const {dispatch} = usePurchase();
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
            <div className='h-16 w-16'>
            <img src={item.image.mobile} alt={item.name} />
            </div>
            <div className='flex justify-center flex-col'>
                <p className='font-semibold'>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
            </div>
        </div>
        <div className='bg-zinc-100'>
            <button onClick={() => dispatch({type: 'decrease-quantity', payload: {id: item.id}})} className=' p-2  hover:bg-zinc-200'>
            <MinusIcon className="h-2 w-2 text-zinc-600" />
            </button>
            <span  className="text-xs px-2">
                {item.quantity}
            </span>
            <button onClick={()=> dispatch({type: 'increase-quantity', payload: {id: item.id}})} className=' p-2  hover:bg-zinc-200'>
            <PlusIcon className="h-2 w-2 text-zinc-600 " />
            </button>
        </div>    
    </div>
  )
}
