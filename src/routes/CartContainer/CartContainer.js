import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartContainer.css";
import FormContainer from "../../components/FormContainer/FormContainer"
import {cartContext} from "../../contexts/cartContext";
import Card from "../../components/card/Card";

const CartConteiner= ()=>{
    //cargo datos del servido
    
   
    const { cart, deleteItem, removeList,cartTotalValue} =useContext(cartContext)
    if (cart.length>0)
    {
        return(
            <div>
                
                <div className="button" onClick={removeList}>Vaciar Carrito</div>
                    <div>Compra total:{cartTotalValue()}</div>

                <div className="itemList" >
                        {cart.map((item) => (
                            <Card key={item.id}>
                            <div className="item">
                                <div>ID:{item.id}</div> 
                                <div>Nombre:{item.name}</div> 
                                <div>Precio:{item.price}</div> 
                                <div>Cantidad:{item.qta}</div> 
                                <div className="button" onClick={() => deleteItem(item.id)}>Eliminar</div>
                            </div>                    
                        </Card>        
                        ))}
                <FormContainer/>
                </div>

        </div>

);
    }
    else { 
        return(

        <div className='menu'>

        <Link className="button" to="/">Volver a home</Link>
        <div>El Carrito se encuentra vacio</div>

        </div>
        )

    }

    }


export default CartConteiner