import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Shop from "./shop"
import Cart from "./cart";

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
 return (
  <> 
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/panier" element={<Cart cart={cart} setCart={setCart} />}/>
   <Route path="/boutique" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
  </Routes>
  </>
 )
}

export default Rout