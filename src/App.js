import React, {createContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './routes/itemListContainer/ItemListContainer';
import ItemDetailsContainer from './routes/ItemDetailsContainer/ItemDetailsContainer';

export const chartContext=createContext()

  const App =() => {

//  const [idmen, setIdmen] = useState(0) 

  //const [chartQ,setChartQ]=useState(0)
/* 
  const menuChange = (idNew)=>{
    setIdmen(idNew)
  }

  const chartQChange = (newCQ)=>{
    setChartQ(newCQ)
  }

  let chart=[] 
   */
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Se picó !"/>} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route exact path="/items/:id" element={<ItemDetailsContainer/>} /> 
        </Routes>
      </BrowserRouter>




    </div>

    
    
    
  );
}

export default App