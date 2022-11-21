import React from 'react';

import Item from '../item/Item';
import './itemListContainer.css';

import { itemList } from "./itemList";

const ItemListContainer = (props) => {

    //const prueba = itemList.filter((itemList)=>itemList.group=="1");
    
    return (
    <div>
        <div className='greeting'>{props.greeting} </div>
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
    </div>
    );
};


export default ItemListContainer