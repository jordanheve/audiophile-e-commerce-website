import bestGearImg from '/assets/shared/desktop/image-best-gear.jpg';
export default function BestGearDescription() {
  return (
    <section className=' text-center flex flex-col gap-6 ' >
        <div>
        <img src={bestGearImg} alt="a guy wearing headphones" className='rounded-lg w-full object-cover aspect-square h-80'/>
        </div>
        <h3 className="uppercase text-zinc-950 font-semibold text-3xl">
        Bringing you the  <br />
        <span className="text-custom-orange"> best </span>
         audio gear
        </h3>
        <p className="text-zinc-600">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
    </section>
  )
}
