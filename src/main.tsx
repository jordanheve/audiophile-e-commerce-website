import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import PurchaseProvider from './components/context/PurchaseProvider'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PurchaseProvider>
    <App/>
    </PurchaseProvider>
  </React.StrictMode>,
)
