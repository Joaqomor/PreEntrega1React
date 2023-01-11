import {Routes, Route, BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar';
import React from 'react';
import ItemContainer from './components/ItemContainer';
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from "./components/AboutUs";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";


function App() {
  return (
    <div>

      <BrowserRouter>
        <CartProvider>      
        <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemContainer/>} />
            <Route path={"/home"} element={<ItemContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/Detail/:itemID"} element={<ItemDetailContainer/>} />
            <Route path={"/category/:categoryId"} element={<ItemContainer/>} />
            <Route path={"/aboutUs"} element={<AboutUs/>} />
          </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
