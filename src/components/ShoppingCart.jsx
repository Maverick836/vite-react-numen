import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState,useEffect } from 'react';


function ShoppingCart() {

  const [product,setListaDeProductos]= useState([]);

  useEffect(() => {
    const obtenerProductos = async() =>{
      const origen ="http://localhost:8000/cart";
      const res = await axios.get(origen)

      setListaDeProductos(res.data)


    }
    obtenerProductos();
  
    
  }, [])

 console.log(product)
  
  return product.map(prod =>
    <>
    
    <div  className="container-fluid my-3 ">
      <div className="row justify-content-around">
        <Card className='mb-3 ' style={{ width: '18rem' }}>
          <Card.Img className='mt-3' variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
              {prod.description}
            </Card.Text>
            <Card.Text>
              Precio: ${prod.price}
            </Card.Text>
            <Button variant="primary" onClick={()=>addToCart(prod.id)}>Añadir al carrito</Button>
          </Card.Body>
        </Card>
    
      </div>
    </div>
    

    
    </>
    
  );
}

export default ShoppingCart;