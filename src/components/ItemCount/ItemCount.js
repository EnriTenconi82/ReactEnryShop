
import React, { useState } from 'react';
import "./itemCount.css"



const ItemCount = (props) => {
  const [contador, setContador] = useState(0);
  
  // CARRITO
/*   const {chartQ} = useContext(chartContext)
  const {chartQChange}= useContext(chartContext)
  const {chart} = useContext(chartContext)
 */
  const addToCart =() =>{
    /* chartQChange(chartQ+contador)
    setContador(0)
     *//* let tempItem = {}
    tempItem.id=0
    tempItem.qta={contador}
    chart.push(tempItem)
    console.log(chart.length)
    console.log(tempItem)
     */
    
  }

/*   
  useEffect(() => {
    setContador(props.quantity)
    }, [props.id]);
        <chartContext.Provider  value={{chartQ,chart}}>

    */


  const buttonClickHandlerS = () => {
    (contador<props.stock) ? setContador(contador + 1) : console.log ("err")
  };

  const buttonClickHandlerL = () => {
    (contador>0) ? setContador(contador - 1) : console.log ("err")
  };

  return (
    <div>

      <p onClick={buttonClickHandlerL}><img src="https://svgsilh.com/svg/1270000.svg" alt='resta'/></p>
      <p>{contador}</p>
      <p onClick={buttonClickHandlerS}><img src="https://svgsilh.com/svg/1721865.svg" alt='sumo'/></p>
      <div className='addtoCart' onClick={addToCart}>Agregar </div>
    
    </div>
  );
};

export default ItemCount;
