import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import React from 'react'

const ItemsTotal = () => {
    const {cart} = useContext(dataContext);

    const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);

  return <span className="cart-item-total">{itemsQuantity}</span>;
    
}

export default ItemsTotal
