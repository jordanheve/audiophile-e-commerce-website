import { Link } from "react-router-dom";
import Cart from "./Cart";
import MenuCategories from "./MenuCategories";
import headerLogo from "/logo.svg";
import { usePurchase } from "../hooks/usePurchase";
import CategoryLinks from "./CategoryLinks";
export default function Header() {

  const {deviceType} = usePurchase();

  return (
    <header className="  bg-zinc-950  text-white fixed top-0 z-[90] w-full">    
      <div className="max-w-[1110px] flex justify-between items-center mx-auto  border-b p-4 h-24 border-zinc-500 font-manrope">

        {deviceType !== 'desktop' && (
          <MenuCategories />
        )}

        <Link to="/">
        <img src={headerLogo} alt="audiophile" className="basis-36 flex items-center justify-end" />
        </Link>
          {deviceType == "desktop" && (
            <CategoryLinks/>
          )}
          
        <Cart />
      </div>

    </header>
  )
}
