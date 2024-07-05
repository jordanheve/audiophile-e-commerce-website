import { Link } from 'react-router-dom'
export default function ElementNotFound() {
  return (
    <div className='mt-28 text-center'>
        <h2 className='font-black'>Oops! We can't seem to find what you're looking for...</h2>
        <Link to='/'>Go to Home Page</Link>    
    </div>
  )
}
