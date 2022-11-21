import React from 'react';

import Item from '../item/Item';
import './itemListContainer.css';

import { itemList } from "./itemList";

const ItemListContainer = () => {

    //const prueba = itemList.filter((itemList)=>itemList.group=="1");
    
    return (

    <div className="itemList">
        {itemList.map((itemList) => (
                
                <Item
                    image={itemList.image}
                    name={itemList.name}
                    description={itemList.descpriction}
                    price={itemList.price}
                    quantity="0"
                />
                
    
    ))}
    </div>
    );
};


export default ItemListContainer