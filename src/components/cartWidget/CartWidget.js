import React from "react";

import './cartwidget.css'   

const CartWidget = ({qOfCart}) =>{
    
//    useEffect(()=>{console.log("hola")},[qOfCart])


    return(
        <div className="cartWidget">
            <div>
                <img src="https://www.svgrepo.com/show/228775/online-store-shopping-cart.svg" alt="cart"/>
            </div> 
    
            <p> ({qOfCart})</p>
        
        </div>
    )
};

export default CartWidget;