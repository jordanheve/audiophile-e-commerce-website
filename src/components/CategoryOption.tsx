import { usePurchase } from "./hooks/usePurchase";
import { ChevronRightIcon } from "@heroicons/react/20/solid"
type CategoryOptionProps = {
  categoryName: string;
  categoryUrl: string;
  imageUrl: string;
}
import { Link } from "react-router-dom";
export default function CategoryOption({categoryName, categoryUrl, imageUrl}  : CategoryOptionProps) {
  const { dispatch} = usePurchase();

return (
  <div className="h-56 mt-4 p-4 flex relative  justify-between flex-col items-center ">
      <div className="z-10 text-center flex flex-col gap-2  uppercase">

       <img src={imageUrl}
          alt={categoryName}
          className="h-28"
          />
      <h4 className="font-semibold ">{categoryName}</h4>
        <Link onClick={() => dispatch({type: 'close-menu'})} className="font-semibold text-sm text-zinc-500 flex gap-1 justify-center items-center" to={'/category/'+categoryUrl}>
          <span className="hover:text-custom-orange">Shop</span>
          <ChevronRightIcon className="h-6 w-6 text-custom-orange" />
        </Link>
      </div>
      <div className="absolute bg-zinc-100 rounded-lg h-40  z-0 bottom-0 w-full"></div>
  </div>
  )
}
