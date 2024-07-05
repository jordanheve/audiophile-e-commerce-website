
import type { Product } from "../../types";
import SeeProductBtn from "../SeeProductBtn";

type ProductCategoryProps = {
  product: Product;  // Define the type of product prop as a Product type from the types.ts file
}

export default function ProductCategory({ product }: ProductCategoryProps) {
  return (
    <div key={product.id} className='flex flex-col items-center text-center gap-6'>
            <div>
            <img src={product.image.mobile} alt={product.name} className='h-80 ' />
            </div>
            {product.new && 
            <p className='text-custom-orange uppercase tracking-[.5rem] text-sm'>
              New Product
            </p>}

            <h3 className='font-semibold text-xl'>{product.name}</h3>
            <p className='text-sm text-zinc-500'>{product.description}</p>
           <SeeProductBtn slug={product.slug}/>
    </div>
  )
}
