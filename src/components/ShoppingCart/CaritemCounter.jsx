import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../../context/DataContext';


const CaritemCounter = ({ product}) => {
  const {cart , setCart, addToCart} = useContext(dataContext);

  const decrese = () =>{
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quanty !== 1 &&
    setCart(cart.map((item) => (item.id === product.id ? {
      ...product, quanty: productRepeat.quanty - 1
    } : item)))
  }
  return (
    <>
    <p className='counter-button' onClick={decrese}>-</p>
    <p>{product.quanty}</p>
    <p className='counter-button'onClick={() => addToCart(product)}>+</p>
    </>
  )
}

export default CaritemCounter;