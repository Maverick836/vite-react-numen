import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import CartElements from './Cart.Elements';
import CartTotal from './CartTotal';
import BarraNavegacion from '../NavBar';


const ShoppingCart = () => {
    const { cart } = useContext(dataContext);

    return (
        <>
            <BarraNavegacion />
            {cart.length > 0 ? (

                <>
                    <CartElements />
                    <CartTotal />
                </>
            ) : (
                <h2 className="cart-menssage-center"> El carrito esta vacio</h2>
            )}
        </>
    );
};

export default ShoppingCart;



