import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../assets/imagen-1.jpg"
import imagen2 from "../assets/imagen-2.jpg"
import imagen3 from "../assets/imagen-3.jpg"
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="imagen 1"
        />
        <Carousel.Caption>
          <h3 className='text-white'>Tecnología</h3>
          <p className='text-white' >Múltiples herramientas disponibles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="imagen 2"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Variedad</h3>
          <p className='text-white'>Todas las marcas y últimos lanzamientos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="imagen 3"
        />

        <Carousel.Caption>
          <h3 className='text-white'>Confort y adaptabilidad</h3>
          <p className='text-white'>
            Disfruta de la comodidad tanto de tu trabajo como en tu tiempo libre
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;