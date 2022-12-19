import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Item from '../item/Item';
import './itemListContainer.css';

import { itemList } from "./itemList";

const ItemListContainer = (props) => {


const [itemListP,setItemListP]=useState([])
    //okCarga renderiza al tener datos

const [okCarga,setOkCarga]=useState(false)


useEffect(() => {
    //simulacion tiempo red
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemList)
        }, 1000);
    })
    promesa.then((res) => {
        setItemListP(res)
        setOkCarga(true)
    });

},[]);

    
const { categoryId } = useParams();

if (okCarga){

    const itemsFiltr= itemListP.filter(item=> item.group===categoryId);

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
                }
};


export default ItemListContainer