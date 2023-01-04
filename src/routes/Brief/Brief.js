import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Brief.css";
import OrderCreationContainer from "../../components/OrderCreationContainer/OrderCreationContainer"
import {cartContext} from "../../contexts/cartContext";
import Card from "../../components/card/Card";

const Brief= ()=>{
    //cargo datos del servidor

    const { cartList, deleteItem, removeList,cartTotalValue} =useContext(cartContext)
    if (cartList.length>0)
    {
        return(
            <div>
                
                <div className="button" onClick={removeList}>Vaciar Carrito</div>
                
                <div>Compra total:{cartTotalValue()}</div>

                <div className="itemList" >
                        {(cartList.length>0) &&
                            (cartList.map((item) => (
                            <Card key={item.id}>
                            <div className="item">
                                <div>ID:{item.id}</div> 
                                <div>Nombre:{item.name}</div> 
                                <div>Precio:{item.price}</div> 
                                <div>Cantidad:{item.qta}</div> 
                                <div className="button" onClick={() => deleteItem(item.id)}>Eliminar</div>
                            </div>                    
                        </Card>        
                        )))}
                <OrderCreationContainer/>
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


export default Brief