import React, { useState,useEffect, useContext } from "react";
import { useParams,Link } from 'react-router-dom';
import {doc, getFirestore,getDoc} from 'firebase/firestore'
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemCount from "../../components/ItemCount/ItemCount";
import './itemDetailsContainer.css'
import {cartContext} from "../../contexts/cartContext";



//const  ItemDetailsContainer= ({chartQuantity ,chartQHandler, chart,chartHandler}) =>{ 
const  ItemDetailsContainer= () =>{ 
    
    const {addItem,isInCart} =useContext(cartContext)
    
    const { id } = useParams();
    const [item,setItem]=useState()
    
    //okCarga renderiza al tener datos
    //const [okCarga,setOkCarga]=useState(false)


    
    //estado para eliminar contador y colocar addtochart
    const [itemAdded,setItemAdded]=useState(false)
    ////

useEffect(() => {
        //tomo de firestore
        console.log(id)//OK
        const Dbase=getFirestore();
        const itemRef= doc(Dbase,"itemList",id)
        getDoc(itemRef).then((snapshot)=>{
        setItem(snapshot)
//
    if(snapshot.exists()){
    const itemNoId= 
    {
        id:snapshot.id,
        ...snapshot.data()
    }

    setItem(itemNoId)
    console.log(itemNoId)}
    else{
        setItem({"name":"ITEM INEXISTENTE"})
        setItemAdded(true)//ITEM NO EXISTE Y HABILITO BOTON A SALIDA
    }
 })

},[id]);


const itemOnAddChangeHandler=(counter)=>{
        if (counter>0){
         //AGREGO A CARRO
        
        setItemAdded(true)
        //LLAMAR A CART CONTEXT PARA AGREGAR
        
        //controlar si existe y si no lo agrego!
        !isInCart(item.id) ?
            addItem(item.id,counter,item.name,item.price) 
            : alert("Item ya Agregado al Carrito anteriormente modificar desde carrito")
            //agregar control si existe en cart y si existe no permitir agregado
        }else alert("Intertar una cantidad mayor a cero(0)")     
}
        let  divItemAction
    
        itemAdded? 
            divItemAction=<Link  className='endBuy' to='/cart'>Finalizar Compra</Link>
            :divItemAction=<ItemCount onAddHandler={itemOnAddChangeHandler} item={item}/>

        
        return(
            item?
            //crear ITEMDETAILS
            <ItemDetail item={item} action={divItemAction}/>
            //si no cargando
            :< div>Cargando...</div>
        )

    }
    

        

export default ItemDetailsContainer