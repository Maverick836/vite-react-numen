import React from "react";
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import CartElements from './Cart.Elements';
import CartTotal from './CartTotal';
import BarraNavegacion from '../NavBar';
import "../../Style sheets/ShoppingCart.css"
import FormularioDePago from "../Formulario -pago/formularioDePago";
import CarritoVacio from "./CarritoVacio";
import Footer from "../Footer";

const ShoppingCart = () => {
    const { cart } = useContext(dataContext);
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    useEffect(() => {
        setIsCartEmpty(cart.length === 0);
    }, [cart]);

    return (
        <div className="contenedor">
            <BarraNavegacion />
            <div className={`shopping-cart ${isCartEmpty ? 'no-scroll' : ''}`}>
                {cart.length > 0 ? (
                    <>
                        <CartElements />
                        <CartTotal />
                        <FormularioDePago/>
                    </>
                ) : (
                    <CarritoVacio/>
                )}
            </div>
                    <Footer/>
        </div>
    );
};

export default ShoppingCart;
