import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import React from 'react'



const CartTotal = () => {

  const myStyles = {
    fontSize: '25px',
    color: 'black', 
  };
    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc,el)=> acc + el.price * el.quantity,0).toLocaleString();

  return (
    <div className="cartTotal">
        <h3 style={myStyles}>Total a pagar: ARS {total}</h3>      
    </div>
  )
}

export default CartTotal;
