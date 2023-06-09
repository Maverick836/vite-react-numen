import { useContext } from "react";
import { useState } from "react";
import { dataContext } from "../context/DataContext";
import Buycheck from "../components/Buycheck";

const Products = () => {
  const { data, addToCart } = useContext(dataContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Obtener 10 productos aleatorios por cada recarga de la pagina 
  const randomProducts = data
    .sort(() => Math.random() - 0.5) // Mezclar aleatoriamente los productos de "data"
    .slice(0, 10); // Obtener los primeros 10 productos del arreglo de "slice()"

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {randomProducts.map((product) => (
            <div className="card mt-3 mx-auto" key={product.id}>
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
                  {product.price.toLocaleString()}
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
          onClick={() => {
            addToCart(product);
            // desplegar modal despues de agregar al carrito
            handleShow(); 
          }}
        >
                    <span>¡Cómpralo ya!</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      <Buycheck show={show} handleClose={handleClose} />
    </>
  );
};

export default Products;
