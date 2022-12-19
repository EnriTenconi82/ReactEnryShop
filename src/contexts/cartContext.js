import React ,{ useState} from 'react';


const cartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);//ok llega

    const [cartQta, setCartQta] = useState(0);//ok llega
    //FUNCIONES MANEJO CART

    
    
    const isInCart = (id)=>{
    const idExist= cart.filter(item=> item.id===id);
    if (idExist.length>0 ) return  true 
        else return false
}

const cartQ = () =>{
  let contador=0
  cart.forEach((element)=>contador+=element.qta)
  return contador
}

const addItem = (id, qta, name ,price)=>{
    let temp=[]
    temp=cart
    temp.push({id:id,qta:qta,name:name,price:price})
    setCart(temp)
    setCartQta(cartQ())
}

  const removeItem =(id)=>{
    const newCart= cart.filter(item=> item.id!==id);
    setCart(newCart)
    setCartQta(cartQ())
    
  }

  const clear  = ()=>{
    setCart([])
    setCartQta(cartQ())
    
  }


  const cartTotalValue = ()=>{
    let total=0;
    cart.forEach((element)=>total+=element.qta*element.price)
    return total
  }
  //

  return (
    <cartContext.Provider value={{ cart, setCart,addItem, removeItem, clear,cartTotalValue, isInCart,cartQ,cartQta}}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, cartContext };



