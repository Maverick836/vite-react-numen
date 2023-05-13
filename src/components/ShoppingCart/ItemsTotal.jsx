import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import React from 'react'

const ItemsTotal = () => {
    const {cart} = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);

  return <span className="cart-item-total">{itemsQuanty}</span>;
    
}

export default ItemsTotal
