import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import BarraNavegacion from "../NavBar";
import React from 'react'
import Footer from "../Footer";


export const Celulares = () => {
    const { data, addToCart } = useContext(dataContext);
  
    return (
      <>
        <BarraNavegacion />
        <div className="container">
          {data.map((product) => {
            if (product.Category === "a") {
              return (
                <div className="row" key={product.id}>
                  <div className="col">
                    <div className="card">
                      <img
                        className="card-image-top mx-auto d-block"
                        src={product.image}
                        alt=""
                        style={{ width: "50%" }}
                      />
                      <div className="card-body">
                        <h2 className="card-title1 text-center product-name">
                          {product.name}
                        </h2>
                        <p className="card-text text-center description">
                          {product.description}
                        </p>
                        <h5 className="text-center">
                          <span className="ars">ARS </span>
                          {product.price}
                        </h5>
                        <div className="star text-center">
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star checked"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="btn">
                          <button
                            type="button"
                            style={{ backgroundColor: "#0B3C5D" }}
                            onClick={() => addToCart(product)}
                          >
                            <span>¡Cómpralo ya!</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Si el valor de "category" no es igual a "a", no se devuelve nada
            }
          })}
        </div>
          <Footer/>
      </>
    );
  };
  



export default Celulares
