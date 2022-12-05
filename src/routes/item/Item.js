import React from "react";

import './item.css'
import Card from "../../components/card/Card";
import Avatar from "../../components/Avatar/Avatar";
import { Link } from 'react-router-dom';

const Item= ({item}) =>{

    return(
<Link className="item" to={`/items/${item.id}`}>
        
    <Card>
        <div >
            <div>{item.name}</div>
            <Avatar src={item.image}/>
            <div>{item.description}</div>
            <div>Precio: {item.price}</div>
            <div>Stock: {item.stock}</div>
        </div>
    </Card>
</Link>
);
};

export default Item
