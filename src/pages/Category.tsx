import { useParams } from 'react-router-dom';
import { products } from '../data/data';
import ElementNotFound from '../components/ElementNotFound';
import ProductCategory from '../components/category/ProductCategory';
import CategoryOptions from '../components/CategoryOptions';
import BestGearDescription from '../components/BestGearDescription';
export default function Category() {
  const params = useParams();
  return (
    params.category === 'speakers' ||
    params.category === 'earphones' ||
    params.category === 'headphones' ? (
      <>
      <div className='text-center mt-24 h-28 bg-zinc-950 grid items-center'>
        <h2 className='text-white font-bold text-3xl uppercase'>{params.category}</h2>
      </div>

      <div className='px-6 flex flex-col gap-24 mt-24'>
        {products.filter((product) => product.category === params.category)
        .sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        .map((product) => (
         <ProductCategory key={product.id} product={product} />
        ))}
        <CategoryOptions />
        <BestGearDescription />
      </div>

      </>
    ) : (
      <ElementNotFound />
    )
  );
}
