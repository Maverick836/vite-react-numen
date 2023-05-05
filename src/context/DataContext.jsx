import axios from "axios";
import { createContext , useEffect } from "react";
import { useState } from "react";

// Se crea un contexto global de datos que puede Ser
// consumido por otros componentes
export const dataContext = createContext();

const dataProvider = ({children}) => {
    // Se define el estado local "data" con un arreglo vacio
    // y la funcion "setData" para actualizar el estado
    const [data, setData] = useState([]);
    //Se utiliza la funcion "useEffect" para cargar los daos
    // de la "apifake" al cargar el componente
    useEffect(() => {
    getData()
    }, [])
// Se defina la funcion asincronica "getData" para obtener los datos de la API
// y actualizar el estado "data"
const getData = async ()=> {
    const res = await axios.get("http://localhost:8000/cart");
    setData(res.data)
}

// Se devuelve un proveedor de contexto que proporciona los datos a los componentes 
//hijos que lo consumen
return (
    <dataContext.Provider>
        {children}
    </dataContext.Provider>
    
);


}

export default dataProvider
