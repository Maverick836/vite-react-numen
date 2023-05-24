import '../Style sheets/Home.css'
import BarraNavegacion from "./NavBar";
import Carousel from './Carousel'
import Tarjetas_Home from "./Tarjetas_Home";
import Seccion1 from './Seccion1'
import Footer from "./Footer";


const Home = () => {
    return (
        <>
            <div className="contenedor">
                <BarraNavegacion />
                <Carousel />
                <Tarjetas_Home />
                <Seccion1 />
                <Footer />
            </div>
        </>
    )
}

export default Home;