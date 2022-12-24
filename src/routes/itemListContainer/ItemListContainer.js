import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {collection, getFirestore,getDocs,query,where} from 'firebase/firestore'
import Item from '../item/Item';
import './itemListContainer.css';


const ItemListContainer = (props) => {


const [itemList,setItemList]=useState([])


const { categoryId } = useParams();

useEffect(() => {

    if ( props.greeting===undefined){
    
        const Dbase=getFirestore();
        const itemsColection= collection(Dbase,"itemList")
        const groupQuery=query(itemsColection,where("group","==",categoryId))

        getDocs(groupQuery).then((snapshot)=>{
        const items= snapshot.docs.map((doc)=>
                ({
                    id:doc.id,
                    ...doc.data()
                }))
                
                setItemList(items)
            
            })
    }
},[categoryId]);


return ( 
        <div>
            <div className='greeting'>{props.greeting} </div>

            {(itemList.length===0 && props.greeting===undefined) ? 
            (   <div>
                    <div>....cargando...</div>
                </div>   
            )
            :   (props.greeting===undefined)&&           
            
            (
                <div>

                <div className="itemList">
                
                    {itemList.map((item) => (
                        <Item item={item} key={item.id}/>
                    ))}
                </div>
                </div>)
            }


        </div>    
        
        
    );

};


export default ItemListContainer