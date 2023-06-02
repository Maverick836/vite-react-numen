import React from 'react'
import './ContactForm.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const ContactForm = () => {
    const initialValues = {
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: ''
    };

    const onSubmit = (values) => {
        console.log(values);
        //  agregar la lógica para enviar los datos del formulario
    };

    const validateForm = (values) => {
        const errors = {};
// Validación del campo "nombre"

        if (!values.nombre) {
            errors.nombre = 'El nombre es requerido';
        }
// Validación del campo "apellido"

        if (!values.apellido) {
            errors.apellido = 'El apellido es requerido';
        }
// Validación del campo "celular"

        if (!values.celular) {
            errors.celular = 'El número de celular es requerido';
        }

// Validación del campo "email"
        if (!values.email) {
            errors.email = 'El correo electrónico es requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'El correo electrónico no es válido';
        }

        return errors;
    };

    return (
        <div className="contactFormulario">
            <h3>Dejanos tu mensaje</h3>
            <Formik

                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validateForm}
            >
                <Form>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field type="text" id="nombre" name="nombre" className="form-control" />
                        <ErrorMessage name="nombre" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <Field type="text" id="apellido" name="apellido" className="form-control" />
                        <ErrorMessage name="apellido" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="celular">Celular</label>
                        <Field type="text" id="celular" name="celular" className="form-control" />
                        <ErrorMessage name="celular" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <Field type="email" id="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <Field as="textarea" id="mensaje" name="mensaje" className="form-control textA" />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn-submit">Enviar</button>
                        <button type="reset" className="btn-cancel">Cancelar</button>
                    </div>
                   

                </Form>
            </Formik>
        </div>
    );
}


export default ContactForm
