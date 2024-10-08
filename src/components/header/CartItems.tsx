import type { CartProduct } from '../../types'
import { formatCurrency } from '../../helpers'
import { usePurchase } from '../hooks/usePurchase'
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useMemo } from 'react';
type CartItemsProps = 
{
  item: CartProduct
  justshow?: boolean
}

export default function CartItems({item, justshow = false} : CartItemsProps) {
    const {dispatch} = usePurchase();
    
    const productName = useMemo(() =>{ 
      const wordsToRemove = ["Earphones", "Speaker", "Headphones"];
      const regex = new RegExp(`\\b(${wordsToRemove.join('|')})\\b`, 'gi');
      return item.name.replace(regex, '').replace(/\s{2,}/g, ' ').trim();
    }, [item.name])
  return (
    <div className='flex justify-between items-center gap-4'>
        <div className='flex gap-4'>
            <div className='h-16 w-16'>
            <img className='rounded' src={item.image.mobile} alt={item.name} />
            </div>
            <div className='flex justify-center flex-col'>
                <p className='font-semibold'>{productName}</p>
                <p className='text-zinc-500 text-sm font-semibold mt-1'>{formatCurrency(item.price)}</p>
            </div>
        </div>
        { justshow ? (
          <span className='text-sm font-semibold text-zinc-600'>x{item.quantity}</span>
        ) :
          (
            <div className='bg-zinc-100 flex items-center'>
            <button onClick={() => dispatch({type: 'decrease-quantity', payload: {id: item.id}})} className=' p-3  hover:bg-zinc-200'>
            <MinusIcon className="h-3 w-3 text-zinc-600" />
            </button>
            <span  className="text-sm px-2 font-semibold">
                {item.quantity}
            </span>
            <button onClick={()=> dispatch({type: 'increase-quantity', payload: {id: item.id}})} className=' p-3 hover:bg-zinc-200'>
            <PlusIcon className="h-3 w-3 text-zinc-600 " />
            </button>
        </div>    
          )
        }
    </div>
  )
}
