import React from 'react'
import ReactDOM from 'react-dom/client'
import ShoppingCart from './components/ShoppingCart'
import BarraNavegacion from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BarraNavegacion/>
      <ShoppingCart/>
    </React.StrictMode>,
  )