import React, { useState,useEffect,toDate,}from "react";
import { getFirestore,doc,getDoc, } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const  Checkout= () =>{ 
    
    
    const { id } = useParams();
    const [order,setOrder]=useState()
    const [exist,setExist]=useState(true)
    
    useEffect(() => {
        //tomo de firestore
        const Dbase=getFirestore();
        const orderRef= doc(Dbase,"orders",id)
        getDoc(orderRef).then((snapshot)=>{
        if(snapshot.exists()){
            setOrder(snapshot.data())

        }
        
        else{
            setExist(false)
    } 

    })

},[id]);

        
    return(
        exist ?(
                order?
                    ( 
  
                    <>
                    <div>Hola {order.buyer.name}</div>
                    <div>Su orden {id}</div>
                    <div>creada el {order.date.toDate().toString()}</div>
                    <div>ha sido procesada correctamente </div>
                    <hr />
                    <div>DETTALLE DE COMPRA:</div>
                    <hr />
                
                    {
                  (order.cart.length>0) &&(
                        order.cart.map((item) => (
                                <div>
                                    <div>ITEM:{item.name}</div>
                                    <div>CANT:{item.qta}</div>
                                    <div>PRECIO:{item.price}</div>
                                    <hr />
                                </div>
                                )))
                    }
                    
                    <div>TOTAL: {order.total}</div>

                    </>     
                    )
                
                :
                
                <div>Cargando...</div>
        )
        
        :
            
        <div>La orden {id} no existe </div>
        
    )          
    }
    

        

export default Checkout