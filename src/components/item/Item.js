import React from "react";

import './item.css'
import Card from "../card/Card";
import Avatar from "../Avatar/Avatar";
import ItemCount from "../ItemCount/ItemCount";

const Item= ({item}) =>{ 
    return(
    <Card>
        <div className="item">
            <div>{item.name}</div>
            <Avatar src={item.image}/>
            <div>{item.description}</div>
            <div>Precio: {item.price}</div>
            <div className="addItem">
                <ItemCount stock={item.stock} id={item.id}/>
            </div>
        </div>
    </Card>
);
};

export default Item
