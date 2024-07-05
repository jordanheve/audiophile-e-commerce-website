import SeeProductBtn from "../SeeProductBtn";

export default function MainSection() {
  return (
    <section className="bg-zinc-950">
        <div className="relative">
            <img src="/assets/home/mobile/image-header.jpg" alt="headphones image" className="object-fill brightness-50"/>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-7 items-center">
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
