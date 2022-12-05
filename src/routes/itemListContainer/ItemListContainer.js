import React from 'react';
import { useParams } from 'react-router-dom';

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
/* let itemListP

const promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve(itemList)
    }, 2000);
})

promesa.then((res) => {
    itemListP=res
});

 */



const ItemListContainer = (props) => {
    
    const { categoryId } = useParams();

    const itemsFiltr = itemList.filter(item=> item.group===categoryId);

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