import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen1 from "../assets/A52.jpg"

function Tarjetas() {
  return (
    <>
    <div className="container-fluid my-3">
    <div className="row justify-content-around">
    <Card className='mb-3' style={{ width: '18rem' }}>
      <Card.Img className='mt-3' variant="top" src={imagen1} />
      <Card.Body>
        <Card.Title>Samsung A52 $300</Card.Title>
        <Card.Text>
          Te ofrecemos la mejor opcion en calidad precio para tus compras.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    <Card className='mb-3' style={{ width: '18rem' }}>
      <Card.Img className='mt-3' variant="top" src={imagen1} />
      <Card.Body>
        <Card.Title>Samsung A52</Card.Title>
        <Card.Text>
          Te ofrecemos la mejor opcion en calidad precio para tus compras.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='mt-3' variant="top" src={imagen1} />
      <Card.Body>
        <Card.Title>Samsung A52</Card.Title>
        <Card.Text>
          Te ofrecemos la mejor opcion en calidad precio para tus compras.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>
    </div>


    </>
  );
}

export default Tarjetas;