import '../../Style sheets/CartElements.css';
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import CaritemCounter from './CaritemCounter';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdDelete } from 'react-icons/md';

import React from 'react'

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const DeleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => {
      return element !== foundId;
    });
    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      
      <section key={product.id}>
        <div className="cartContent" >
         <img src={product.image} />
          <h3 className="Name">{product.name}</h3>
          
          <CaritemCounter product={product} />
           <h4 className="price">$ {(product.price * product.quantity).toLocaleString()}</h4>
           <h3 className='cart-delete pointer' onClick={()=> DeleteProduct(product.id)}><MdDelete size={20} title="Eliminar"/></h3>
           
        </div>
        </section>
      

    )
  })
}

export default CartElements;
