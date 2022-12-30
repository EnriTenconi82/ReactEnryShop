
import React, { useState} from 'react';
import "./itemCount.css"


const ItemCount = ({onAddHandler,item}) => {

  const [contador, setContador] = useState(0);
  

  const buttonClickHandlerS = () => {
    if(contador<item.stock)  setContador(contador + 1)
  };

  const buttonClickHandlerL = () => {
    if (contador>0) setContador(contador - 1) 
  };
  
  //llamo codigo de ItemDetailsCont
  const addToChart=()=>{
      onAddHandler(contador)
    }

  
    return (
    <div>
      <p onClick={buttonClickHandlerL}><img src="https://svgsilh.com/svg/1270000.svg" alt='resta resta'/></p>
      <p>{contador}</p>
      <p onClick={buttonClickHandlerS}><img src="https://svgsilh.com/svg/1721865.svg" alt='sumo'/></p>
      <div className='addtoCart' onClick={addToChart} >Agregar</div>
      
    </div>
  );
};

export default ItemCount;
