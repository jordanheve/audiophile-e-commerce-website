import { Product } from "../../types";
import { formatCurrency } from "../../helpers";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { usePurchase } from "../hooks/usePurchase";
import GoBack from "../GoBack";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  const { dispatch, deviceType } = usePurchase();
  const [quantity, setQuantity] = useState(1);
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increase = () => {
    setQuantity(quantity + 1);
  };
  const features = product?.features;

  const splitFeatures = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      let breakpoint = text.indexOf(".", maxLength);
      if (breakpoint === -1) {
        breakpoint = text.length;
      }
      const paragraph1 = text.slice(0, breakpoint + 1).trim();
      const paragraph2 = text.slice(breakpoint + 1).trim();
      return [paragraph1, paragraph2];
    }
    return [text];
  };
  const [paragraph1, paragraph2] = features
    ? splitFeatures(features, 300)
    : ["", ""];

  const handleAddToCart = () => {
    dispatch({ type: "add-to-cart", payload: { product, quantity } });
    toast.success("Product added to cart", {
      style: {
        border: "1px solid #000",
        padding: "16px",
        color: "#000",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#FFFF",
      },
    });
  };

  return (
    <section className="pt-28 flex flex-col text-left gap-6 ">
      <GoBack />
      <div className="flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-24 items-center">
        <div className="rounded-lg overflow-hidden md:w-2/5">
          <img
            className="object-cover w-full"
            src={product.image[deviceType]}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-6  md:w-3/5">
          {product.new && (
            <p className="text-custom-orange uppercase tracking-[.5rem]">
              New Product
            </p>
          )}

          <h2 className="text-4xl font-semibold  max-w-80">
            {product.name.split(" ").slice(0, -1).join(" ")}
            <br />
            {product.name.split(" ").slice(-1)}
          </h2>
          <p className="text-zinc-500">{product.description}</p>
          <p className="font-black tracking-wider text-lg">
            {formatCurrency(product.price)}
          </p>

          <div className="flex gap-4">
            <div className="flex items-center bg-zinc-100">
              <button onClick={decrease} className="p-4 hover:bg-zinc-200 text-zinc-600 hover:text-custom-orange">
                <MinusIcon className="h-3 w-3 " />
              </button>
              <span className="text-sm px-2 font-semibold">{quantity}</span>
              <button onClick={increase} className="p-4  hover:bg-zinc-200 text-zinc-600 hover:text-custom-orange">
                <PlusIcon className="h-3 w-3  " />
              </button> 
            </div>
            <button
              className="bg-custom-orange hover:opacity-80 text-white py-3 px-8 font-semibold uppercase text-xs tracking-wider "
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-24">
        <div className="mt-10">
          <h6 className="text-3xl font-semibold mb-4 uppercase">Features</h6>
          <div className="text-zinc-500 lg:max-w-[38rem] ">
            <p className="mb-4">{paragraph1}</p>
            {paragraph2 && <p>{paragraph2}</p>}
          </div>
        </div>
        <div className="my-10 whitespace-nowrap">
          <h6 className="text-3xl font-semibold mb-4 uppercase">In the Box</h6>
          <div className="flex flex-col gap-4">
            {product.includes.map((item, index) => (
              <p key={index} className="text-zinc-500">
                <span className="text-custom-orange font-semibold mr-6">
                  {item.quantity}x
                </span>
                {item.item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
