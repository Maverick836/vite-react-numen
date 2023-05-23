import { useContext, useState } from "react";
import { dataContext } from "../../context/DataContext";
import BarraNavegacion from "../NavBar";
import React from 'react'
import Footer from "../Footer";
import Buycheck from "../Buycheck";

export const Notebooks = () => {

  // Obtiene los datos y la función addToCart del contexto
    const { data, addToCart } = useContext(dataContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
    
        <BarraNavegacion />
        <div className="container-fluid">
          <div className="row">
            {data.filter((product) => product.Category == "d").map((product) =>(
            <div className="card mt-3 mx-auto" key={product.id}>
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
                   {/* Botón para agregar al carrito */}
                  <button type="button" style={{ backgroundColor: '#0B3C5D' }} onClick={() => addToCart(product)} onClickCapture={handleShow}><span>¡Cómpralo ya!</span></button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <Buycheck show={show} handleClose={handleClose} />
          <Footer/>
      </>
    );
  };
  



export default Notebooks
