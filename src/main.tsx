import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Category from './pages/Category'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
