import React from 'react';

import Item from '../item/Item';
import './itemListContainer.css';

import { itemList } from "./itemList";
/* 
const commentVis= (comm)=>{
    console.log({comm})
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(commentVis)

 */
let itemListP
const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve(itemList)
    }, 2000);
})

promesa.then((res) => {
    itemListP=res
    console.log(itemListP)
});



const ItemListContainer = (props) => {
    
    const itemsFiltr = itemList.filter((itemListP)=>itemListP.group==props.id);

    return (
        <div>
            <div className='greeting'>{props.greeting} </div>
            
            <div className="itemList">
                {itemsFiltr.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
};


export default ItemListContainer