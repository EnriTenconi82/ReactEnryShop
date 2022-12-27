import React, { useState,useEffect, useContext } from "react";
import { useParams,Link } from 'react-router-dom';
import {doc, getFirestore,getDoc} from 'firebase/firestore'
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemCount from "../../components/ItemCount/ItemCount";
import Alertmodal from "../../components/modal/Alertmodal";
import './itemDetailsContainer.css'
import {cartContext} from "../../contexts/cartContext";
import Charging from "../../components/Charging/Charging";



//const  ItemDetailsContainer= ({chartQuantity ,chartQHandler, chart,chartHandler}) =>{ 
const  ItemDetailsContainer= () =>{ 
    
    const {addItem,isInCart} =useContext(cartContext)
    
    const { id } = useParams();
    const [item,setItem]=useState()
    //modal
    const [showModal,setShowModal]=useState(false)    
    const [modalText,setModalText]=useState("")
    //
    //estado para eliminar contador y colocar addtochart
    const [itemAdded,setItemAdded]=useState(false)
    ////

    useEffect(() => {
        //tomo de firestore
        const Dbase=getFirestore();
        const itemRef= doc(Dbase,"itemList",id)
        getDoc(itemRef).then((snapshot)=>{
            
        if(snapshot.exists()){
            setItem(snapshot)
            const itemNoId= 
            {
                id:snapshot.id,
                ...snapshot.data()
            }
            setItem(itemNoId)
    }
    
    else{
        setItem({"name":"ITEM INEXISTENTE"})
        setItemAdded(true)//ITEM NO EXISTE Y HABILITO BOTON A SALIDA
    }
})

},[id]);

const setModal = (text )=>{
    setShowModal(true)
    setModalText (text)
}
//llamada a funcion en cartContext (agregado a cart) si no existe en carrito y la cantidad es mayor a 0 
const itemOnAddChangeHandler=(counter)=>{
    if (counter>0){ 
    
            setItemAdded(true)
            //si es existente aviso que ya estaba agregado anteriormente    
            !isInCart(item.id) ?
                addItem(item.id,counter,item.name,item.price) 
                : (
                    setModal("Item existente en carrito,elimiralo  previamente")
                )
            //agregar control si existe en cart y si existe no permitir agregado
        }
        
        else  setModal("Inserte un valor mayor a cero (0)")

        //<Alertmodal text="Intertar una cantidad mayor a cero(0)"/>     
}
        let  divItemAction
    
        itemAdded? 
            divItemAction=<Link  className='endBuy' to='/cart'>Finalizar Compra</Link>
            :divItemAction=<ItemCount onAddHandler={itemOnAddChangeHandler} item={item}/>

        
        return(
            item?
            <>
            <Alertmodal showModal={showModal} setShowModal={setShowModal}text={modalText}/>
            <ItemDetail item={item} action={divItemAction}/>
            </>
            :<Charging/>
        )

    }
    

        

export default ItemDetailsContainer