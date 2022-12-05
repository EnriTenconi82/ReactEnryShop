import React from "react";
import { useParams } from 'react-router-dom';

import Card from "../../components/card/Card";
import Avatar from "../../components/Avatar/Avatar";
import ItemCount from "../../components/ItemCount/ItemCount";

import { itemList } from "../itemListContainer/itemList";


const  ItemDetailsContainer= () =>{ 
    const { id } = useParams();
    const itemFiltr = itemList.filter(item=> item.id===(+id));
  
    
    return(
        <Card>
        <div className="item">
            <div>{itemFiltr[0].name}</div>
            <Avatar src={itemFiltr[0].image}/>
            <div>{itemFiltr[0].description}</div>
            <div>Precio: {itemFiltr[0].price}</div>
            <div>Stock: {itemFiltr[0].stock}</div>
            <div className="addItem">
                <ItemCount stock={itemFiltr[0].stock} id={itemFiltr[0].id}/>
            </div>
        </div>
    </Card>
    )};

export default ItemDetailsContainer