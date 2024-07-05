import { Link } from "react-router-dom";
import Cart from "./Cart";
import MenuCategories from "./MenuCategories";
import headerLogo from "/logo.svg";
export default function Header() {
  return (
    <header className="flex justify-between p-4 h-24 border-b-2 border-zinc-800 bg-zinc-950 items-center text-white fixed top-0 z-50 w-full">    
        <MenuCategories />
            <Link to="/">
            <img src={headerLogo} alt="audiophile" />
            </Link>

        <Cart />

    </header>
  )
}
