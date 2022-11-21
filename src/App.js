import React from 'react';
import './App.css';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
function App() {
  return (
    
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <ItemListContainer greeting="Bienvenidos a Se picó !"/>
      </div>
    </div>

    
    
    
  );
}

export default App;
