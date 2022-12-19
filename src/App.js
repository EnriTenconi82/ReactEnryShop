import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './routes/itemListContainer/ItemListContainer';
import ItemDetailsContainer from './routes/ItemDetailsContainer/ItemDetailsContainer';
import CartContainer from './routes/CartContainer/CartContainer';
import {CartProvider} from './contexts/cartContext';


  const App =() => {

  return (
    <CartProvider>
    
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Se picó !"/>} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route exact path="/items/:id" element={<ItemDetailsContainer />} /> 
            <Route exact path="/cart" element={<CartContainer />} /> 
        </Routes>
      </BrowserRouter>


    </div>
      </CartProvider>

    
    
    
  );
}

export default App