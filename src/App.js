import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './routes/itemListContainer/ItemListContainer';
import ItemDetailsContainer from './routes/ItemDetailsContainer/ItemDetailsContainer';
import CartContainer from './routes/CartContainer/CartContainer';
import Checkout from './routes/Checkout/Checkout';
import {CartProvider} from './contexts/cartContext';

  const App =() => {

    return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Se picó !"/>} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route exact path="/items/:id" element={<ItemDetailsContainer />} /> 
            <Route exact path="/cart" element={<CartContainer />} /> 
            <Route exact path="/checkout/:id" element={<Checkout/>} /> 

        </Routes>

      </CartProvider>
      </BrowserRouter>


    </div>

    
    
    
  );
}

  
export default App