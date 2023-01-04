import React ,{useEffect, useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {collection, getFirestore,getDocs,query,where} from 'firebase/firestore'
import Item from '../../components/item/Item';
import Alertmodal from '../../components/modal/Alertmodal';
import Charging from "../../components/Charging/Charging";
import './itemListContainer.css';
import { cartContext } from '../../contexts/cartContext';


const ItemListContainer = (props) => {
    
    
const {isInCart,existingQty} =useContext(cartContext)
const [itemList,setItemList]=useState([])
const [showModal,setShowModal]=useState(false)    
const [noExisteCat,setNoExisteCat]=useState(false)
const { categoryId } = useParams();

useEffect(() => {

    if ( props.greeting===undefined){
    
        const Dbase=getFirestore();
        const itemsColection= collection(Dbase,"itemList")
        const groupQuery=query(itemsColection,where("group","==",categoryId))

        getDocs(groupQuery).then((snapshot)=>{
            if(!snapshot.empty){

            const items= snapshot.docs.map((doc)=>{
                    let  item={
                        id:doc.id,
                        ...doc.data()   
                        }
                        if (isInCart(item.id) )
                        item={...item,stock:item.stock-existingQty(item.id)}
                    return item
                })

                setItemList(items)}

                else {
                    setShowModal(true)//modal de categoria inexistente show
                    setNoExisteCat(true)
                    }
            
    })
    }
},[categoryId]);


return ( 
        <div>
            <div className='greeting'>{props.greeting} </div>
            
            <Alertmodal showModal={showModal} setShowModal={setShowModal}text="Categoria Inexistente"/>
    
            {(itemList.length===0 && !props.greeting) ? 
            (   
                (noExisteCat)? <div> Categoria inexistente </div>
                :
                <Charging/>

            )
            :   (!props.greeting && itemList.length>0)&&           
            
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