import {Routes, Route, BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar';
import React from 'react';
import ItemContainer from './components/ItemContainer';
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemContainer/>} />
            <Route path={"/home"} element={<ItemContainer/>} />
            <Route path={"/Detail/:itemID"} element={<ItemDetailContainer/>} />
            <Route path={"/category/:categoryId"} element={<ItemContainer/>} />
            <Route path={"/aboutUs"} element={<AboutUs/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
