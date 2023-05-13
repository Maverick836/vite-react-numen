import { useState } from 'react'
import './App.css'
import "react-bootstrap/dist/react-bootstrap.min"
import "bootstrap/dist/css/bootstrap.css"
import DataProvider from './context/DataContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'



function App() {
  const [count, setCount] = useState(0)

  return (

     <>
   
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<ShoppingCart />}></Route>
          </Routes>

        </BrowserRouter>
      </DataProvider>
     </>

  )
}

export default App
