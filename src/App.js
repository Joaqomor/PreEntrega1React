import {Routes, Route, BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar';
import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from "./components/AboutUs";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";


function App() {
  return (
    <div>

      <BrowserRouter>
        <CartProvider>      
        <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>} />
            <Route path={"/home"} element={<ItemListContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/Detail/:itemID"} element={<ItemDetailContainer/>} />
            <Route path={"/category/:categoryId"} element={<ItemListContainer/>} />
            <Route path={"/aboutUs"} element={<AboutUs/>} />
            <Route path={"/CheckOut/:orderId"} element={<CheckOut/>} />
          </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
