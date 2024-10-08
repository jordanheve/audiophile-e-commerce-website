import CategoryOptions from "../components/CategoryOptions";
import MainSection from "../components/home/MainSection";
import BestGearDescription from "../components/BestGearDescription";
import ProductShowcase from "../components/home/ProductShowcase";

export default function Home() {
  return (
    <div className="pb-24">
      <MainSection />
      <div className="max-lg:px-6 flex flex-col gap-28  max-w-[1110px] mx-auto">
      
      <CategoryOptions />
      <ProductShowcase />
      <BestGearDescription />
      </div>
    </div>
  )
}
