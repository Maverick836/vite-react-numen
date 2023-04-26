import { useState } from 'react'
import './App.css'
import "react-bootstrap/dist/react-bootstrap.min"
import "bootstrap/dist/css/bootstrap.css"
import BarraNavegacion from './components/NavBar'
import  Carousel  from './components/Carousel'
import Seccion1 from './components/Seccion1'
import Tarjetas from './components/Tarjetas'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className="contenedor">
  <BarraNavegacion/>
    <Carousel/>
    <Tarjetas/>
    <Seccion1/>
    <Footer/>
  </div>
    </>
  )
}

export default App
