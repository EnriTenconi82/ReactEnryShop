import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';

import Card from "../../components/card/Card";
import Avatar from "../../components/Avatar/Avatar";
import ItemCount from "../../components/ItemCount/ItemCount";
import './itemDetailsContainer.css'
import { itemList } from "../itemListContainer/itemList";


const  ItemDetailsContainer= () =>{ 
    const { id } = useParams();

    const [itemListP,setItemListP]=useState([])
    //okCarga renderiza al tener datos
    const [okCarga,setOkCarga]=useState(false)

    useEffect(() => {
        //simulacion tiempo de red
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
                resolve(itemList)
            }, 2000);
        })
        promesa.then((res) => {
            setItemListP(res)
            setOkCarga(true)
        });
    
    }, []);
    


    if (okCarga){

    const itemFiltr = itemListP.filter(item=> item.id===(+id));
    

    return(

        <Card>
        <div className="item">
            <div>{itemFiltr[0].name}</div>
            <Avatar src={itemFiltr[0].image}/>
            <div className="descr">{itemFiltr[0].descpriction}</div>
            <div>Precio: {itemFiltr[0].price}</div>
            <div>Stock: {itemFiltr[0].stock}</div>
            <div className="addItem">
                <ItemCount stock={itemFiltr[0].stock} id={itemFiltr[0].id}/>
            </div>
        </div>
    </Card>
    
    )}};

export default ItemDetailsContainer