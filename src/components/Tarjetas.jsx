import '../styles/Tarjetas.css'
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
      <div className='grid-Container'>
        <div className="container-fluid my-3 ">
          <div className="row justify-content-around">
            <Card className='mb-3 ' style={{ width: '18rem' }}>
              <Card.Img className='mt-3' variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  Precio: ${product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(product.id)}>Añadir al carrito</Button>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>


    </>

  );
}

export default Tarjetas;