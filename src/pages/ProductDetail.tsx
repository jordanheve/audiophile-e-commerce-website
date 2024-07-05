import { useParams } from "react-router-dom";
import { Product } from "../types";
import { products } from "../data/data";
import ElementNotFound from "../components/ElementNotFound";
import ProductInfo from "../components/productDetail/ProductInfo";

export default function ProductDetail() {
  const params = useParams<{ id: string }>();

  const product = products.find(
    (product: Product) => product.slug === params.id
  );

  return product ? (
    <div>
      <ProductInfo product={product} />
    </div>
  ) : (
    <ElementNotFound />
  );
}
