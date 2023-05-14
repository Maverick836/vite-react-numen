import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Style sheets/Buycheck.css"

const Buycheck = ({show, handleClose}) =>{

    return(
    <>
     <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Tienda Node</Modal.Title>
        </Modal.Header>
        <center><Modal.Body>Producto añadido de manera exitosa!!</Modal.Body></center>
        
        <center className='imagen'><img src="src\assets\check-mark-button-joypixels.gif" alt="check" width={50} height={50} /></center>
        
        
        
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Buycheck;