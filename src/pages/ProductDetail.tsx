import { useParams } from "react-router-dom";
import { Product } from "../types";
import { products } from "../data/data";
import ElementNotFound from "../components/ElementNotFound";
import ProductInfo from "../components/productDetail/ProductInfo";
import CategoryOptions from "../components/CategoryOptions";
import BestGearDescription from "../components/BestGearDescription";
import ProductGallery from "../components/productDetail/ProductGallery";
import ProductOthers from "../components/productDetail/ProductOthers";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();

  const product = products.find(
    (product: Product) => product.slug === params.id
  );

  return product ? (
    <div className="max-lg:px-6 flex flex-col gap-28 max-w-[1110px] mx-auto pb-24" >
      <ProductInfo product={product} />
      <ProductGallery product={product} />
      <ProductOthers product={product} />
      <CategoryOptions/>
      <BestGearDescription/>
    </div>
  ) : (
    <ElementNotFound />
  );
}
