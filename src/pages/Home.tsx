import CategoryOptions from "../components/CategoryOptions";
import MainSection from "../components/home/MainSection";
import BestGearDescription from "../components/BestGearDescription";
import ProductoShowcase from "../components/home/ProductoShowcase";

export default function Home() {
  return (
    <div>
      <MainSection />
      <div className="px-6 flex flex-col gap-28">
      <CategoryOptions />
      <ProductoShowcase />
      <BestGearDescription />
      </div>
    </div>
  )
}
