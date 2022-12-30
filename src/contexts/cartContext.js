import React ,{createContext ,useState} from 'react';


const cartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  //calculo items en cart
  
  const calcItemsQty = () =>{
    return cartList.reduce((acc,item)=>{return acc+item.qta},0)
  }

  //calculo total carrito
  const cartTotalValue = ()=>{
    return  cartList.reduce((acc,item)=>{return acc+(item.price*item.qta)},0)
  }
  
  //check si item ya existe en cart
  const isInCart = (id)=>{
    return (cartList.some(item=> item.id===id))
  }

  //check stock si existe
  const existingQty= (id)=>{
    const existingItem = cartList.find(itemToFind=>(itemToFind.id===id))
    return(existingItem.qta)
  }
  
  //agregado item a cart
  const addItem = (id, qta, name ,price)=>{
    const temCart=cartList.filter(item=> item.id!==id)
    let oldQty=0
    //const temCart=cartList.filter(item=> item.id!==id)
    if(isInCart(id))
      {
        oldQty=existingQty(id)
        //elimino  para luegro reponerlo al final
      }
    
    setCartList([...temCart,{id:id,qta:oldQty+qta,name:name,price:price}]) 
    
  }

  //borrado item en cart
  const deleteItem =(id)=>{
    setCartList( cartList.filter(item=> item.id!==id))
  }

  //vaciado cart
  const removeList  = ()=>{
    setCartList([])
  }


  return (
    <cartContext.Provider value={{ cartList, setCartList,addItem, deleteItem, removeList,cartTotalValue, isInCart,calcItemsQty,existingQty}}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };



