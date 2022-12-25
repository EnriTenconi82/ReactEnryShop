import React, { useState,useEffect}from "react";
import { getFirestore,doc,getDoc} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Charging from "../../components/Charging/Charging";
import "./Brief.css"

const  Brief= () =>{ 
    const { id } = useParams();
    const [order,setOrder]=useState()
    const [exist,setExist]=useState(true)
    const [fecha,setFecha]=useState()    
    useEffect(() => {
        //tomo de firestore
        const Dbase=getFirestore();
        const orderRef= doc(Dbase,"orders",id)
        getDoc(orderRef).then((snapshot)=>{
        if(snapshot.exists()){
            setOrder(snapshot.data())
            snapshot.data().date ? 
            setFecha(snapshot.data().date.toDate().toString())
            : setFecha("dia no registrado")

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
                    <div>Hola <span>{order.buyer.name}</span></div>
                    <div>Su orden</div>
                    <div className="title"> {id}</div>
                    <span>creada el {fecha}</span>
                    <div>ha sido <span>{order.estado}</span> correctamente </div>
                    <hr />
                    <div className="title">DETTALLE DE COMPRA:</div>
                    <hr />
                    {
                    (order.cart.length>0) &&(
                        order.cart.map((item) => (
                                <div>
                                    <div className="title">ITEM:{item.name}</div>
                                    <div>CANT:{item.qta}</div>
                                    <div>PRECIO:{item.price} c/u.</div>
                                    <hr />
                                </div>
                                )))
                    }
                    
                    <div className="title">TOTAL: {order.total}</div>

                    </>     
                    )
                
                :
                <Charging/>

        )
        
        :
            
        <div>La orden {id} no existe </div>
        
    )          
    }
    

        

export default Brief