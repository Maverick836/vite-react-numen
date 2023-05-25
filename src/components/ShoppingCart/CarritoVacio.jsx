import React from "react";
import '../../Style sheets/CarritoVacio.css';
import { Link } from 'react-router-dom';

const CarritoVacio = () => {
    return (
        <div className='carrito'>
            <div className="container-carrito-vacio">
                <div className="imagen-carrito">
                    <img src="src\assets\robotlogo.png" alt="" />
                </div>
                <div className="Texto-carrito-vacio">
                    <div>
                        <h3>Tu Carrito está vacío</h3>
                    </div>
                    <div>
                        <p>¡Cámbialo! .</p>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                        <div className="button-carrito-vacio">
                            <button>Elige algo y vuelve aquí</button>
                            
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoVacio;
