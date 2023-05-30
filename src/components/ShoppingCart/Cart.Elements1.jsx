import { Table } from "react-bootstrap";
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import { MdDelete } from "react-icons/md";
export default function CartElements1(){
    let idTabla = 0
    const { cart, setCart, addToCart } = useContext(dataContext);

  const DeleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => {
      return element !== foundId;
    });
    setCart(newCart);
  };

  const decrese = (elemento) =>{
    const productRepeat = cart.find((item) => item.id === elemento.id);

    productRepeat.quantity !== 1 &&
    setCart(cart.map((item) => (item.id === elemento.id ? {
      ...elemento, quantity: productRepeat.quantity - 1
    } : item)))
  }

  return(
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.map(product => {
            return (
                <tr key={product.id}>
                <td>{idTabla = idTabla +1}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()}</td>
                <td>
                    <div className="d-flex justify-content-around">
                        <label className="pointer" onClick={()=>{decrese(product)}}>-</label> 
                        {product.quantity} 
                        <label className="pointer" onClick={()=>{addToCart(product)}}>+</label>
                        <MdDelete className="pointer" onClick={()=>{DeleteProduct(product.id)}} size={20} title="Eliminar"/>
                    </div>
                </td>
                <td>{(product.quantity * product.price).toLocaleString()}</td>
              </tr>
            )
        })}
      </tbody>
    </Table>
  )
}