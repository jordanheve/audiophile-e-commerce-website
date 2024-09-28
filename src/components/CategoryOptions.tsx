import CategoryOption from "./CategoryOption";

export default function CategoryOptions() {
  return (
    <section className="flex flex-col gap-4">
        <CategoryOption categoryName="Headphones" categoryUrl="headphones" imageUrl="\assets\shared\desktop\image-category-thumbnail-headphones.png" />
        <CategoryOption categoryName="Speakers" categoryUrl="speakers" imageUrl="\assets\shared\desktop\image-category-thumbnail-speakers.png" />
        <CategoryOption categoryName="Earphones" categoryUrl="earphones" imageUrl="\assets\shared\desktop\image-category-thumbnail-earphones.png" />
    </section>
  )
}
