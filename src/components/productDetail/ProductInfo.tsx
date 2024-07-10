import { Product } from "../../types";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../helpers";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import { usePurchase } from "../hooks/usePurchase";


type ProductInfoProps = {
    product : Product;
}

export default function ProductInfo( { product} : ProductInfoProps ) {
    const {dispatch} = usePurchase();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
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
  return (
    <section className="pt-28 flex flex-col text-left gap-6">
        <button
          onClick={() => navigate(-1)}
          className="self-start text-zinc-500 hover:bg-zinc-100 p-1"
        >
          Go Back
        </button>
        <div className="rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full max-h-96"
            src={product.image.desktop}
            alt={product.name}
          />
        </div>
        {product.new && (
          <p className="text-custom-orange uppercase tracking-[.5rem] text-sm">
            New Product
          </p>
        )}

        <h2 className="text-4xl font-semibold  max-w-80">{product.name}</h2>
        <p className="text-zinc-500 max-w-">{product.description}</p>
        <p className="font-black tracking-wider">
          {formatCurrency(product.price)}
        </p>

        <div className="flex gap-4">
          <div className="flex items-center bg-zinc-100">
            <button onClick={decrease} className="p-4 hover:bg-zinc-200">
              <MinusIcon className="h-3 w-3 text-zinc-600" />
            </button>
            <span className="text-sm px-2 font-semibold">{quantity}</span>
            <button onClick={increase} className="p-4  hover:bg-zinc-200">
              <PlusIcon className="h-3 w-3 text-zinc-600 " />
            </button>
          </div>
          <button className="bg-custom-orange text-white py-3 px-8 font-semibold uppercase text-xs  tracking-wider " onClick={()=> dispatch({type:'add-to-cart', payload: {product, quantity}})}>
            Add to Cart
          </button>
        </div>
        <div className="my-10">
          <h6 className="text-3xl font-semibold mb-4 uppercase" >Features</h6>
          <div className="text-zinc-500">
            <p className="mb-4">{paragraph1}</p>
            {paragraph2 && <p>{paragraph2}</p>}
          </div>
        </div>
        <div className="my-10">
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
      </section>
  )
}
