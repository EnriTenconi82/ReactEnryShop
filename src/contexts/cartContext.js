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

/*   //check stock si existe
  const checkStock= (id)=>{
  let usedStock=0
  if (cartList.find(item=>(item.id===id))) usedStock
  usedStock= cartList.find(item=>(item.id===id))
    console.log(usedStock)
}
  
 */  



  //agregado item a cart
  const addItem = (id, qta, name ,price)=>{
    setCartList([...cartList,{id:id,qta:qta,name:name,price:price}]) 
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
    <cartContext.Provider value={{ cartList, setCartList,addItem, deleteItem, removeList,cartTotalValue, isInCart,calcItemsQty}}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };



