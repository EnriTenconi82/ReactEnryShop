import React from "react";

import Card from "../../components/card/Card";
import Avatar from "../../components/Avatar/Avatar";
import "./ItemDetail.css"
const ItemDetail= ({item, action}) =>{

    return(
        <div className="itemDiv">
            <Card>
            <div className="item">
            <div>{item.name}</div>
            <Avatar src={item.image}/>
            <div className="descr">{item.descpriction}</div>
            <div>Precio: {item.price}</div>
            <div>Stock: {item.stock}</div>
            <div> 
                {action}
            </div>
        </div>
    </Card>
    </div>    
);
};

export default ItemDetail