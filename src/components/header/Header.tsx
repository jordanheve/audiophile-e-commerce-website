import { Link } from "react-router-dom";
import Cart from "./Cart";
import MenuCategories from "./MenuCategories";
import headerLogo from "/logo.svg";
import { usePurchase } from "../hooks/usePurchase";
import CategoryLinks from "./CategoryLinks";
export default function Header() {

  const {deviceType} = usePurchase();

  return (
    <header className=" border-zinc-800 bg-zinc-950  text-white border-b-2 fixed top-0 z-[90] w-full">    
      <div className="max-w-[1110px] flex justify-between items-center mx-auto  p-4 h-24 ">

        {deviceType !== 'desktop' && (
          <MenuCategories />
        )}

        <Link to="/">
        <img src={headerLogo} alt="audiophile" />
        </Link>
          {deviceType == "desktop" && (
            <CategoryLinks/>
          )}
          
        <Cart />
      </div>

    </header>
  )
}
