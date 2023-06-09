 import '../Style sheets/Tarjetas.css'
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import axios from 'axios';
 import { useState, useEffect } from 'react';


function Tarjetas() {

   const [product, setListaDeProductos] = useState([]);

  useEffect(() => {
     const obtenerProductos = async () => {
       const origen = "http://localhost:8000/products";
       const res = await axios.get(origen)

       setListaDeProductos(res.data)


     }
     obtenerProductos();


  }, [])

 function addToCart(id) {
   const producto = product.find((prod) => prod.id === id)
   const agregar = async () => {
     const destino = "http://localhost:8000/cart";
     const res = await axios.post(destino, producto)



     }
     agregar();
   }

   return product.map(product =>
     <>
      <div className="container">
         <div className="row">
           <div >
             <div className="card">
               <img className="card-image-top mx-auto d-block" src={product.image} alt="" style={{ width: '50%' }} />
               <div className="card-body">
                 <h2 className="card-title1 text-center product-name">{product.name}</h2>
                 <p className="card-text text-center description">{product.description}</p>
                 <h5 className="text-center"><span className='ars'>ARS </span>{product.price}</h5>
                 <div className="star text-center">
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                  <i className="fa fa-star checked"></i>
                   <i className="fa fa-star checked"></i>
                  <i className="fa fa-star"></i>
                 </div>
                <div className="btn">
                  <button type="button" style={{ backgroundColor: '#0B3C5D' }} onClick={() => addToCart(product.id)}><span>¡Cómpralo ya!</span></button>
                 </div>
               </div>
            </div>
           </div>
        </div>
       </div>
     </>
   );
 }

 export default Tarjetas;