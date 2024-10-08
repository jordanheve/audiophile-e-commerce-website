import CategoryOption from "./CategoryOption";

export default function CategoryOptions() {
  return (
    <section className="flex flex-col gap-4 lg:gap-6 md:flex-row mx-auto w-full lg:px-8 justify-center">
        <CategoryOption categoryName="Headphones" categoryUrl="headphones" imageUrl="\assets\shared\desktop\image-category-thumbnail-headphones.png" />
        <CategoryOption categoryName="Speakers" categoryUrl="speakers" imageUrl="\assets\shared\desktop\image-category-thumbnail-speakers.png" />
        <CategoryOption categoryName="Earphones" categoryUrl="earphones" imageUrl="\assets\shared\desktop\image-category-thumbnail-earphones.png" />
    </section>
  )
}
