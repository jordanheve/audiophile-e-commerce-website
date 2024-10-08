
import type { Product } from "../../types";
import SeeProductBtn from "../SeeProductBtn";
import { usePurchase } from "../hooks/usePurchase";
type ProductCategoryProps = {
  product: Product;  // Define the type of product prop as a Product type from the types.ts file
}


export default function ProductCategory({ product }: ProductCategoryProps) {

  const {deviceType} = usePurchase();

  return (
    <div key={product.id} className='flex flex-col items-center text-center gap-6 lg:flex-row product-container'>
            <div className="lg:w-1/2">
            <img src={product.categoryImage[deviceType]} alt={product.name} className='rounded-lg' />
            </div>
            <div className="flex flex-col items-center lg:w-1/2  gap-6 lg:text-left lg:items-baseline lg:p-6 lg:gap-8">

              {product.new && 
              <p className='text-custom-orange uppercase tracking-[.5rem] text-sm'>
                New Product
              </p>}
              <h3 className='font-semibold text-2xl md:text-5xl lg:text-3xl lg:max-w-48'>
                {product.name.split(' ').slice(0, -1).join(' ')}<br />{product.name.split(' ').slice(-1)}
              </h3>
              <p className=' text-zinc-500'>{product.description}</p>
              
            <SeeProductBtn slug={'/product/'+product.slug}/>
            </div>
    </div>
  )
}
