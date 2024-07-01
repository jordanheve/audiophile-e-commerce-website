import Cart from "./Cart";
import MenuCategories from "./MenuCategories";
import headerLogo from "/logo.svg";
export default function Header() {
  return (
    <header className="flex justify-between p-2 bg-slate-950 items-center text-white">    
        <MenuCategories />

            <img src={headerLogo} alt="audiophile" />

        <Cart />

    </header>
  )
}
