import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BarraNavegacion from '../NavBar';
import Footer from '../Footer';
import ContactForm from './ContactForm';
import { dataContext } from "../../context/DataContext";
import '../../Style sheets/Nosotros.css';

export const Nosotros = () => {
  const { scrollToTop } = useContext(dataContext);

  // utiliza la funcion scrollToTop para cargar con el scroll arriba.
  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <>
    <BarraNavegacion/>
    <div className="container-about contenedor">
      
      <div className="text-about">
      <Link to={"/"} style={{ textDecoration: "none" }}>
      <img src="src\assets\robotlogo.png" alt="" className="imagen-about" />
      </Link>
        <p>
         
          Somos una empresa Argentina líder en el mercado, especializada en la importación y venta de productos informáticos
          de alta calidad. Nuestro objetivo principal es brindarte la mejor experiencia de compra desde la comodidad de tu
          hogar.
          <br />
          Nos enorgullece ofrecerte una amplia gama de productos de última generación, cuidadosamente seleccionados para
          garantizar su rendimiento y durabilidad. Trabajamos con los principales fabricantes y proveedores a nivel global,
          lo que nos permite ofrecerte productos exclusivos y competitivos.
          <br />
          En Tienda Node, nos comprometemos con la excelencia en el servicio al cliente. Nuestro equipo de expertos está
          siempre dispuesto a brindarte asesoramiento personalizado y responder todas tus preguntas, asegurándonos de que
          encuentres el producto perfecto que se adapte a tus necesidades.
          <br />
          Además, nos preocupamos por tu satisfacción total. Por eso, ofrecemos garantía de calidad en todos nuestros
          productos, así como un servicio de atención al cliente excepcional.
          <br />
          Gracias a nuestro compromiso con la calidad, nos hemos ganado la confianza y el reconocimiento de miles de
          clientes satisfechos en toda Argentina. Estamos orgullosos de ser tu opción confiable y segura en el mundo de la
          tecnología.
        </p>
      </div>
    <ContactForm/>
    </div>
    <Footer/>
    </>
  )
}

export default Nosotros;
