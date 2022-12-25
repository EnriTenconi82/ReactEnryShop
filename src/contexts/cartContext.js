import React ,{ useState} from 'react';


const cartContext = React.createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  //calculo items en cart
  
  const calcItemsQty = () =>{

      const contador= cart.reduce((acc,item)=>{return acc+item.qta},0)
      return contador
  }
  
  //check si item ya existe en cart
  const isInCart = (id)=>{
    const idExist= cart.filter(item=> item.id===id);
     return (idExist.length>0)
    
    }

  //agregado item a cart
  const addItem = (id, qta, name ,price)=>{
    setCart([...cart,{id:id,qta:qta,name:name,price:price}]) 
  }

  //borrado item en cart
  const deleteItem =(id)=>{
    const newCart= cart.filter(item=> item.id!==id);
    setCart(newCart)
  }

  //vaciado cart
  const removeList  = ()=>{
    setCart([])
  }

  //calculo total carrito
  const cartTotalValue = ()=>{
    const total= cart.reduce((acc,item)=>{return acc+(item.price*item.qta)},0)
    return total
  }

  return (
    <cartContext.Provider value={{ cart, setCart,addItem, deleteItem, removeList,cartTotalValue, isInCart,calcItemsQty}}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };



