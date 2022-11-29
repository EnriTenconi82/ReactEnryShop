
import React, { useState,useEffect } from 'react';
import "./itemCount.css"
const ItemCount = (props) => {
  const [contador, setContador] = useState(0);

/*   
  useEffect(() => {
    setContador(props.quantity)
    }, [props.id]);
 */


  const buttonClickHandlerS = () => {
    (contador<props.stock) ? setContador(contador + 1) : console.log ("err")
  };

  const buttonClickHandlerL = () => {
    (contador>0) ? setContador(contador - 1) : console.log ("err")

  };

  return (
    <div>

      <p onClick={buttonClickHandlerL}><img src="https://svgsilh.com/svg/1270000.svg"/></p>
      <p>{contador}</p>
      <p onClick={buttonClickHandlerS}><img src="https://svgsilh.com/svg/1721865.svg"/></p>
      <div className='addtoCart'>Agregar </div>
    
    </div>
  );
};

export default ItemCount;
