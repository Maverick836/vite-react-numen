import { useContext } from "react";
import {useState} from "react";
import { dataContext } from "../context/DataContext";
import Buycheck from "../components/Buycheck";

const Products = () => {
  const { data, addToCart } = useContext(dataContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.map((product) => (
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
                  <button type="button" style={{ backgroundColor: '#0B3C5D' }} onClickCapture={handleShow} onClick={() => addToCart(product)  }><span>¡Cómpralo ya!</span></button>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      <Buycheck show={show} handleClose={handleClose}/>
    </>
  )
}

export default Products;
