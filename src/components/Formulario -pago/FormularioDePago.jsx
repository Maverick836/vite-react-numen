import React from 'react'
import { Formik, Field, Form } from "formik";
import './formulario.css';

const FormularioDePago = () => {
    return (
        <div className="container-formulario">
            <Formik initialValues={{
                nombre: '', email: '', calle: '', ciudad: '', partido: '', codigoPostal: '',
                nombreTarjeta: '', numeroTarjeta: '', mesExp: '', anioExp: '', cs: '',
            }} onSubmit={(values) => {
                // Lógica para manejar el envío del formulario
                console.log(values);
            }}
            >
                <Form>
                    <div className="row">
                        <div className="col">
                            <h3 className="title">Direccion de envio</h3>

                            <div className="inputBox">
                                <span>Nombre:</span>
                                <Field type="text" name="nombre" placeholder="Tienda Node"/>
                            </div>

                            <div className="inputBox">
                                <span>Email:</span>
                                <Field type="email" name="email" placeholder="TiendaNode@mail.com.ar" />
                            </div>

                            <div className="inputBox">
                                <span>Calle:</span>
                                <Field type="text" name="calle" placeholder="Direccion - localidad" />
                            </div>

                            <div className="inputBox">
                                <span>Ciudad:</span>
                                <Field type="text" name="ciudad" placeholder="Ciudad" />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>Partido:</span>
                                    <Field type="text" name="partido" placeholder="Partido" />
                                </div>

                                <div className="inputBox">
                                    <span>Código Postal:</span>
                                    <Field type="text" name="codigoPostal" placeholder="123 456" />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h3 className="title">Su Pago</h3>

                            <div className="inputBox">
                                <span>Tarjetas aceptadas:</span>
                                <img src="src\assets\mercado-pago.jpg" alt="" className='img-tarjetas'/>
                            </div>

                            <div className="inputBox">
                                <span>Nombre impreso en la tarjeta:</span>
                                <Field type="text" name="nombreTarjeta" placeholder="mr. Tienda Node" />
                            </div>

                            <div className="inputBox">
                                <span>Número de tarjeta de crédito/débito:</span>
                                <Field type="number" name="numeroTarjeta" placeholder="1111-2222-3333-4444"
                                    className="number-i" />
                            </div>

                            <div className="inputBox">
                                <span>Mes exp:</span>
                                <Field type="text" name="mesExp" placeholder="Enero" />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>Año exp:</span>
                                    <Field type="number" name="anioExp" placeholder="2023" className="number-i" />
                                </div>

                                <div className="inputBox">
                                    <span>CS:</span>
                                    <Field type="text" name="cs" placeholder="1234" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Finalizar la compra" className="submit-btn" style={{ backgroundColor: "#0B3C5D" }}/>

                </Form>
            </Formik>
        </div>
    );
}

export default FormularioDePago;
