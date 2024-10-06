import { Product, DeviceType } from "../../types"
import { usePurchase } from '../hooks/usePurchase';
import SeeProductBtn from "../SeeProductBtn";
type ProductOthersProps = {
    product: Product
}

export default function ProductOthers({product}: ProductOthersProps) {

    const { deviceType } = usePurchase() as { deviceType: DeviceType };
  return (
    <div>
        <h4 className="font-bold text-center text-2xl uppercase mb-12">You may also like</h4>
        <div className="flex flex-col gap-16 md:gap-6  md:flex-row">

        {product.others.map((other, index) => (
            <div key={index} >
                <img className="rounded-lg mx-auto" src={other.image[deviceType]} alt={other.name} />
                <div>
                    <h5 className="font-bold text-center text-2xl uppercase my-6">{other.name}</h5>
                    <div className="flex justify-center">
                    <SeeProductBtn slug={"/product/"+other.slug} />
                    </div>
                </div>
            </div>
            )
        )}
        </div>
    </div>
  )
}
