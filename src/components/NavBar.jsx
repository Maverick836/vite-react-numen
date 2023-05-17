import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ItemsTotal from './ShoppingCart/ItemsTotal';

const BarraNavegacion = () =>{
  const {cart} = useContext(dataContext);
  return (
    <Navbar sticky='top' variant='dark' bg="dark" expand="lg">
      <Container>
      <Link to={"/"}>
        <img src="src\assets\robotlogo.png" alt="" width={50} height={50} />
        
        <Navbar.Brand>Tienda Node</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <Link to={"/celulares"}>
              <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#action/3.2">
              Tablets
              </NavDropdown.Item>
              <Link to={"/smartwatch"}>
              <NavDropdown.Item href="#action/3.3">SmartWatch</NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
               <Link to={"/tablets"}>
              <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav  >
            
            <Link to={"/cart"}>
              <FontAwesomeIcon icon= {faCartShopping}/>
              {cart.length > 0 ? <ItemsTotal/> : null  }
              
              </Link>
            
         
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;