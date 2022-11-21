import React from "react";

import './cartwidget.css'   

const CartWidget = () =>{
    return(
        <div className="cartWidget">
            <div>
                <img src="https://www.svgrepo.com/show/228775/online-store-shopping-cart.svg"/>
            </div>
    
            <p> (3) </p>
    
        </div>
    )
};

export default CartWidget;