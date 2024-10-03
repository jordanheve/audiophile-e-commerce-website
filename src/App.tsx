
import { RouterProvider, createBrowserRouter, Outlet, ScrollRestoration} from 'react-router-dom'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Category from './pages/category/Category'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import './index.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Toaster } from 'react-hot-toast';

const AppLayout = () => {

    return (
       <>
        <ScrollRestoration/>
        <Header />
        <main className='bg-white font-manrope'>
        <Outlet/>
        </main>
        <Footer />
        <Toaster/>
       </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: '/category/:category',
                element: <Category />
            },
            {
                path: '/product/:id',
                element: <ProductDetail />
            },
            {
                path: '/checkout',
                element: <Checkout />
            }
        ]
    }
]);

export default function App() {
  return (
     <RouterProvider router={router} />
  )
}


