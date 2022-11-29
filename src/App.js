import React, { useState,createContext } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

export const idMenuContext = createContext();


  const App =() => {

  const [idmen, setIdmen] = useState(0) 

  const menuChange = (idNew)=>{
    setIdmen(idNew)
  }

  
  
  return (
    <div className="App">
      <idMenuContext.Provider value={{ idmen, menuChange} }>

        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a Se picó !"/>
        <ItemListContainer id={idmen}/>
        
      </idMenuContext.Provider>




    </div>

    
    
    
  );
}

export default App