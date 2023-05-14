import imagen1 from "../assets/work-tablet.jpg";
import imagen2 from "../assets/work-laptop.jpg";
import imagen3 from "../assets/smartphoneUtility.webp";

export default function Seccion1() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lh-5 col-xl-4 mb-3">
          <img src={imagen1} alt="work-tablet" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-7 col-lh-7 col-xl-8 mb-3 fs-2 d-flex justify-content-center align-items-center">
            <div className="text-center">
            <h2 className='text-white'>Optimiza tu vida</h2>
          <p className='text-white'>
            Entendemos que puedas tener una vida atareada entre estudios y
            trabajo, puedes llevar tus apuntes contigo y estudiar en cualquier
            momento en tamaño de libro
          </p>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4 mb-3">
          <img src={imagen2} alt="work-tablet" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-8 mb-3 d-flex align-items-center justify-content-center fs-3">
          <div className="text-center">
            <h2 className='text-white'>Trabaja en confort y con adaptabilidad</h2>
            <p className='text-white'>
              Nada mejor que la posibilidad de llevar tu portátil a donde
              quieras y poder trabajar a gusto y adaptarte al momento
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lh-5 col-xl-4 mb-3">
          <img src={imagen3} alt="work-tablet" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-7 col-lh-7 col-xl-8 mb-3 fs-2 d-flex align-items-center justify-content-center">
            <div className="text-center">
            <h2 className='text-white'>Nunca dejaras de estar conectado</h2>
            <p className='text-white'>
            Lleva a todos lados tus redes y actividades
          </p>
            </div>

        </div>
      </div>
    </div>
  );
}
