
import speakerZx9 from "/assets/home/desktop/image-speaker-zx9.png";
import patternCircles from "/assets/home/desktop/pattern-circles.svg";
import SeeProductBtn from "../SeeProductBtn";
import { DeviceType } from "../../types";
import { usePurchase } from "../hooks/usePurchase";
export default function ProductShowcase() {

  const {deviceType} = usePurchase() as {deviceType: DeviceType};
  
  return (
    <section className="flex flex-col gap-4 md:gap-8">
 <div className="text-center bg-custom-orange rounded-lg relative py-14 overflow-hidden lg:flex">
    <div className="relative lg:-bottom-16 flex justify-center lg:w-3/5 overflow-visible">
      <img className="h-52 lg:h-[410px] z-30 " src={speakerZx9} alt="ZX9 speaker image" />
      <img className="absolute top-1/2 lg:top-2/3 -translate-y-1/2 max-lg:h-[558px] max-lg:w-[558px] max-lg:object-cover md:scale-125 z-10" src={patternCircles} alt="background circles" />
    </div>
    <div className="relative z-10  flex flex-col justify-center gap-6 mt-8 items-center mx-auto text-white max-w-xs">
      <h2 className="text-3xl font-semibold ">ZX9 <br /> SPEAKER</h2>
      <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <SeeProductBtn color="black"  slug={`/product/zx9-speaker`}/>
    </div>
  </div>

  <div className="relative h-80 flex items-center overflow-hidden rounded-lg">
    <img className="object-cover w-full absolute" src={`/assets/home/${deviceType}/image-speaker-zx7.jpg`} alt="ZX7 speaker image on mobile" />
    <div className="z-10 relative ml-4 md:ml-24" >
    <h2 className="text-3xl font-semibold mb-10">ZX7 SPEAKER</h2>
    <SeeProductBtn color="white"  slug={`/product/zx7-speaker`}/>
    </div>
  </div>

  <div className="md:flex md:gap-2">
    <div className="md:w-1/2">
    <img src={`/assets/home/${deviceType}/image-earphones-yx1.jpg`} alt="YX1 earphones" className="rounded-lg" />
    </div>   
    <div className="mt-4 w-full  bg-zinc-100 rounded-lg h-52 flex flex-col justify-center p-4 gap-8 md:w-1/2 md:h-auto md:mt-0  md:p-16">
    <h2 className="text-3xl font-semibold">YX1 EARPHONES</h2>
    <SeeProductBtn color="white" slug={`/product/yx1-earphones`}/>
    </div>
  </div>
</section>

  )
}
