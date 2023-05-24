import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../../context/DataContext';
import './../../Style sheets/CaritemCounter.css'


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
    <p className='counter-button pointer' onClick={decrese} >-</p>
    <p className='productQuanty pointer'>{product.quanty}</p>
    <p className='counter-button pointer'onClick={() => addToCart(product)}>+</p>
    </>
  )
}

export default CaritemCounter;