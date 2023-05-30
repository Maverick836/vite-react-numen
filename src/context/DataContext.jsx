import axios from "axios";
import { createContext , useEffect } from "react";
import { useState } from "react";

// Se crea un contexto global de datos que puede Ser
// consumido por otros componentes
export const dataContext = createContext();

const DataProvider = ({children}) => {

    // Se define el estado local "data" con un arreglo vacio
    // y la funcion "setData" para actualizar el estado
    const [data, setData] = useState([]);
    
    //Se define el estado local "cart" con un arreglo vacio
    // y la funcion "setCar" para actualizar el estado del "carrito"

    const [cart, setCart] = useState([]);

    //Se utiliza la funcion "useEffect" para cargar los daos
    // de la "apifake" al cargar el componente
    useEffect(() => {
    getData()
    }, [])

// Se defina la funcion asincronica "getData" para obtener los datos de la API
// y actualizar el estado "data"
const getData = async ()=> {
    const res = await axios.get("http://localhost:8000/products");
    setData(res.data);
    
}
//agrega productos al carrito.
const addToCart = (product) => {
  const productRepeat = cart.find((item) => item.id === product.id);

  if (productRepeat) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  }
};

  // se define la funcion scrollToTop que carga la pagina con el scroll arriba, utiliza la propiedad
  //behavior: "smoth" para que se deslice suave.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



return (
    <dataContext.Provider  value={{data, cart, setCart, addToCart,scrollToTop}}>
        {children}
    </dataContext.Provider >
    
);


}

export default DataProvider
