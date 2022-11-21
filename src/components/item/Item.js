import React from "react";

import './item.css'
import Card from "../card/Card";
import Avatar from "../Avatar/Avatar";

const Item= ({ image , name , description , price,quantity}) =>{ 
    return(
    <Card>
        <p>{name}</p>
        <Avatar src={image}/>
        <p>{description}</p>
        <p>Precio: {price}</p>
        <div className="addItem">
            <p> <img src="https://svgsilh.com/svg/1270000.svg"/></p>
            <p> {quantity}</p>
            <p> <img src="https://svgsilh.com/svg/1721865.svg"/></p>
        </div>

    </Card>
);
};

export default Item
