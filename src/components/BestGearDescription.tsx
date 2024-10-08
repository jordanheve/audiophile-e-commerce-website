import { usePurchase } from './hooks/usePurchase';

export default function BestGearDescription() {
  const {deviceType} = usePurchase();

  return (
    <section className=' text-center flex flex-col gap-6 lg:flex-row-reverse lg:gap-20 lg:justify-between lg:items-center' >
        <div className='lg:basis-1/2'>
        <img src={`/assets/shared/${deviceType}/image-best-gear.jpg`} alt="a guy wearing headphones" className='rounded-lg w-full object-cover aspect-square h-80 lg:h-auto'/>
        </div>
        <div className='flex flex-col gap-6 lg:basis-1/3 align-baseline text-left '>
        <h3 className="uppercase text-zinc-950 font-semibold text-3xl md:text-4xl text-center lg:text-left max-md:max-w-96 max-lg:mx-auto">
        Bringing you the 
        <span className="text-custom-orange"> best </span> <br className='hidden md:block lg:hidden'/>
         audio gear
        </h3>
        <p className="text-zinc-600 max-lg:text-center">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
        </div>
    </section>
  )
}
