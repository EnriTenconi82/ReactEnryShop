import React from "react";

import './cartwidget.css'   

const CartWidget = ({cartQ}) =>{


    return(
    <>
    <div className="cartWidget">
            <div>
                <img src="https://www.svgrepo.com/show/228775/online-store-shopping-cart.svg" alt="cart widget"/>
            </div> 
            
            <p> ({cartQ}) </p>
            
        </div>
        </>
        )
};

export default CartWidget;