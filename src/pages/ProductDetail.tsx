import { useParams } from "react-router-dom";
import { Product } from "../types";
import { products } from "../data/data";
import ElementNotFound from "../components/ElementNotFound";
import ProductInfo from "../components/productDetail/ProductInfo";
import CategoryOptions from "../components/CategoryOptions";
import BestGearDescription from "../components/BestGearDescription";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();

  const product = products.find(
    (product: Product) => product.slug === params.id
  );

  return product ? (
    <div className="px-6">
      <ProductInfo product={product} />
      <CategoryOptions/>
      <BestGearDescription/>
    </div>
  ) : (
    <ElementNotFound />
  );
}
