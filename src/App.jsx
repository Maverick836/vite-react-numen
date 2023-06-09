import { useState } from 'react'
import './App.css'
import "react-bootstrap/dist/react-bootstrap.min"
import "bootstrap/dist/css/bootstrap.css"
import DataProvider from './context/DataContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Celulares from './components/ProductosFiltrados/Celulares'
import Smartwatch from './components/ProductosFiltrados/Smartwatch'
import Tablets from './components/ProductosFiltrados/Tablets'
import Notebooks from './components/ProductosFiltrados/Notebooks'
import  Nosotros from "./components/Nosotros/Nosotros";


function App() {
  const [count, setCount] = useState(0)

  return (

     <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<ShoppingCart />}></Route>
            <Route path='/celulares' element={<Celulares />}></Route>
            <Route path='/smartwatch' element={<Smartwatch />}></Route>
            <Route path='/tablets' element={<Tablets />}></Route>
            <Route path='/notebooks' element={<Notebooks />}></Route>
            <Route path='/nosotros' element={<Nosotros/>}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
     </>

  )
}

export default App
