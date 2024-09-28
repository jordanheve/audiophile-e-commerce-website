import { Product, DeviceType } from '../../types';
type ProductGalleryProps = {
    product: Product;
}
import { usePurchase } from '../hooks/usePurchase';



export default function ProductGallery({product}: ProductGalleryProps) {

    const { deviceType } = usePurchase() as { deviceType: DeviceType };
    //determinar si la imagen es mobile, ta
  return (
    <div className="flex flex-col gap-6">
     <div className=''>
        <img className='rounded-lg' src={product.gallery.first[deviceType]} alt="" />
     </div>
     <div>
        <img className='rounded-lg' src={product.gallery.second[deviceType]} alt="" />
    </div>
    <div>
        <img className='rounded-lg' src={product.gallery.third[deviceType]} alt="" />
     </div>
    </div>
  )
}
