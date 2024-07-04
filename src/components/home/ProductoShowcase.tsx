import SeeProductoBtn from "../SeeProductoBtn";
import speakerZx9 from "/assets/home/desktop/image-speaker-zx9.png";
import patternCircles from "/assets/home/desktop/pattern-circles.svg";
import mobileSpeakerZx7 from "/assets/home/mobile/image-speaker-zx7.jpg";
import mobileEarphonesYx1 from "/assets/home/mobile/image-earphones-yx1.jpg" ; 
export default function ProductoShowcase() {
  return (
    <section className="flex flex-col gap-4">
  <div className="text-center bg-custom-orange rounded-lg relative py-14 overflow-hidden">
    <div className="relative flex justify-center ">
      <img className="h-52 z-10" src={speakerZx9} alt="ZX9 speaker image" />
      <img className="absolute top-1/2 -translate-y-1/2 h-[558px] w-[558px] object-cover z-10" src={patternCircles} alt="background circles" />
    </div>
    <div className="relative z-10  flex flex-col gap-6 mt-8 items-center mx-auto text-white max-w-xs">
      <h4 className="text-3xl font-semibold ">ZX9 <br /> SPEAKER</h4>
      <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <SeeProductoBtn color="black" />
    </div>
  </div>

  <div className="relative h-80 flex items-center overflow-hidden rounded-lg">
    <img className="object-cover absolute " src={mobileSpeakerZx7} alt="ZX7 speaker image on mobile" />
    <div className="z-10 relative ml-4">
    <h4 className="text-3xl font-semibold mb-10">ZX7 SPEAKER</h4>
    <SeeProductoBtn color="white" />
    </div>
  </div>

  <div>
    <div>
    <img src={mobileEarphonesYx1} alt="YX1 earphones" className="rounded-lg" />
    </div>   

    <div className="mt-4 w-full bg-zinc-100 rounded-lg h-52 flex flex-col justify-center p-4 gap-8">
    <h4 className="text-3xl font-semibold">YX1 EARPHONES</h4>
    <SeeProductoBtn color="white" />
    </div>
  </div>
</section>

  )
}
