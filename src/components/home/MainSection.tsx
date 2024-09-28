import SeeProductBtn from "../SeeProductBtn";
import { DeviceType } from "../../types";
import { usePurchase } from "../hooks/usePurchase";
export default function MainSection() {

    const {deviceType} = usePurchase() as {deviceType: DeviceType};

  return (
    <section className="bg-neutral-950 flex  justify-center">
        <div className="relative max-w-[1440px]">
            <div>
            <img src={`/assets/home/${deviceType}/image-header.jpg`} alt="headphones image" className="object-fill brightness-50 "/>
            
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center xl:left-1/4 flex flex-col gap-7 items-center">
                <p className="uppercase text-zinc-500 text-xl tracking-widest">
                    new product
                </p>
                <h2 className="text-white text-4xl uppercase">
                    xx99 mark II <br />
                    headphones
                </h2>
                <p className="text-zinc-400 w-80">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <SeeProductBtn />
            </div>
        </div>
        
    </section>
  )
}
