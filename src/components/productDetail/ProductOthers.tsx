import { Product, DeviceType } from "../../types"
import { usePurchase } from '../hooks/usePurchase';
import SeeProductBtn from "../SeeProductBtn";
type ProductOthersProps = {
    product: Product
}

export default function ProductOthers({product}: ProductOthersProps) {

    const { deviceType } = usePurchase() as { deviceType: DeviceType };
  return (
    <div className="flex flex-col gap-12">
        <h4 className="font-bold text-center text-2xl uppercase">You may also like</h4>
        {product.others.map((other, index) => (
            <div key={index} className="fle flex-col items-center gap-4">
                <img className="rounded-lg" src={other.image[deviceType]} alt={other.name} />
                <div>
                    <h5 className="font-bold text-center text-2xl uppercase my-12">{other.name}</h5>
                    <div className="flex justify-center">
                    <SeeProductBtn slug={"/product/"+other.slug} />
                    </div>
                </div>
            </div>
            )
        )}
    </div>
  )
}
