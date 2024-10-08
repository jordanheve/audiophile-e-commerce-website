import { Product, DeviceType } from "../../types";
type ProductGalleryProps = {
  product: Product;
};
import { usePurchase } from "../hooks/usePurchase";

export default function ProductGallery({ product }: ProductGalleryProps) {
  const { deviceType } = usePurchase() as { deviceType: DeviceType };
  //determinar si la imagen es mobile, ta
  return (
    <div className="flex flex-col gap-6 md:flex-row items-center justify-center md:justify-between">
      <div className="flex flex-col md:gap-5 gap-6 lg:h-[592px]">
        <div>
        <img
          className="rounded-lg"
          src={product.gallery.first[deviceType]}
          alt=""
          />
        </div>
        <div className="mt-auto">
        <img
          className="rounded-lg"
          src={product.gallery.second[deviceType]}
          alt=""
          />
        </div>
      </div>
      <div>
        <img
          className="rounded-lg"
          src={product.gallery.third[deviceType]}
          alt=""
        />
      </div>
    </div>
  );
}
