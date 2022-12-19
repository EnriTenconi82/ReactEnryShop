import React, { useState,useEffect, useContext } from "react";
import { useParams,Link } from 'react-router-dom';

import Card from "../../components/card/Card";
import Avatar from "../../components/Avatar/Avatar";
import ItemCount from "../../components/ItemCount/ItemCount";
import './itemDetailsContainer.css'
import { itemList } from "../itemListContainer/itemList";
import {cartContext} from "../../contexts/cartContext";



  

//const  ItemDetailsContainer= ({chartQuantity ,chartQHandler, chart,chartHandler}) =>{ 
const  ItemDetailsContainer= () =>{ 
    
    const {addItem,isInCart} =useContext(cartContext)
    
    const { id } = useParams();
    
    const [itemListP,setItemListP]=useState([])
    
    //okCarga renderiza al tener datos
    const [okCarga,setOkCarga]=useState(false)

    useEffect(() => {
        //simulacion tiempo de red
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
                resolve(itemList)
            }, 1000);
        })
        promesa.then((res) => {
            setItemListP(res)
            setOkCarga(true)
        });
    
    }, []);
    
    //estado para eliminar contador y colocar addtochart
    const [itemAdded,setItemAdded]=useState(false)
    ////


    
    if (okCarga){
        const itemFiltr = itemListP.filter(item=> item.id===(+id));
        // contador .. 

        const itemOnAddChangeHandler=(counter)=>{
        if (counter>0){
        //AGREGO A CARRO
        
        setItemAdded(true)
        //LLAMAR A CART CONTEXT PARA AGREGAR
        
        //controlar si existe y si no lo agrego!
        !isInCart(itemFiltr[0].id) ?
            addItem(itemFiltr[0].id,counter,itemFiltr[0].name,itemFiltr[0].price) 
            : alert("Item ya Agregado al Carrito anteriormente modificar desde carrito")
            //agregar control si existe en cart y si existe no permitir agregado
        }else alert("Intertar una cantidad mayor a cero(0)")     
    }
    

    
        
        let  divItemAction
    

        itemAdded? 
            divItemAction=<Link  className='endBuy' to='/cart'>Finalizar Compra</Link>
            :divItemAction=<ItemCount onAddHandler={itemOnAddChangeHandler} item={itemFiltr[0]}/>

        
        return(
                <Card>
                    <div className="item">
                    <div>{itemFiltr[0].name}</div>
                    <Avatar src={itemFiltr[0].image}/>
                    <div className="descr">{itemFiltr[0].descpriction}</div>
                    <div>Precio: {itemFiltr[0].price}</div>
                    <div>Stock: {itemFiltr[0].stock}</div>
                    <div> 
                        {divItemAction}
                    </div>
                </div>
        </Card>

        )

        }};

export default ItemDetailsContainer