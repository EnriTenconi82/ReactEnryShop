import React, { useState,useEffect, useContext } from "react";
import { useParams,Link } from 'react-router-dom';
import {doc, getFirestore,getDoc} from 'firebase/firestore'
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemQuantitySelector from "../../components/ItemQuantitySelector/ItemQuantitySelector";
import Alertmodal from "../../components/modal/Alertmodal";
import './itemDetailsContainer.css'
import {cartContext} from "../../contexts/cartContext";
import Charging from "../../components/Charging/Charging";


const  ItemDetailsContainer= () =>{ 
    
    const {addItem,isInCart,existingQty} =useContext(cartContext)
    
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
            let itemWithId= 
            {
                id:snapshot.id,
                ...snapshot.data()
            }
            if (isInCart(itemWithId.id) )
                {   setModal("Item ya existente en carrito,se agregará la cantidad seleccionada")
                    itemWithId={...itemWithId,stock:itemWithId.stock-existingQty(itemWithId.id)}
                }
            setItem(itemWithId)
            if (itemWithId.stock===0){
                setItemAdded(true)//ITEM NO TIENE MAS STOCK -> HABILITO BOTON A SALIDA
                setModal("Producto sin stock")
            }
        }
    
    else{
        setItem({"name":"ITEM INEXISTENTE"})
        setItemAdded(true)//ITEM NO EXISTE -> HABILITO BOTON A SALIDA
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
            addItem(item.id,counter,item.name,item.price) 
            //agregar control si existe en cart y si existe no permitir agregado
        }
        else  setModal("Inserte un valor mayor a cero (0)")
}
    let  divItemAction
    
    // defino accion a visualizar en item detail (Finalizar compra u Agregar)
    itemAdded? 
        divItemAction=<Link  className='endBuy' to='/Brief'>Finalizar Compra</Link>
        :divItemAction=<ItemQuantitySelector AddItemButton={itemOnAddChangeHandler} item={item}/>
        
        
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