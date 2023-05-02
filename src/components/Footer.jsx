import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h4>Información de contacto</h4>
            <p>Dirección: Av. General Paz 2560</p>
            <p>Teléfono: 3518765463</p>
            <p>Email: TiendaNode@hotmail.com</p>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end">
            <h4>Redes sociales</h4>
            <div className="social-icons ml-md-auto">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="mx-2" size='xl' />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="mx-2" size='xl'/>
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="mx-2" size='xl'/>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="mt-4" />
        <Row>
          <Col>
            <p className="text-center">&copy; 2023 Tienda Node. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
