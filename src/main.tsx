import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  errorElement: <NotFound />
  },
  {
    path: '/category',
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <main className='bg-zinc-50'>
    <RouterProvider router={router}/>
    </main>
    <Footer/>
  </React.StrictMode>,
)
