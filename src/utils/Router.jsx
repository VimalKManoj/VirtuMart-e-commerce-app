import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Product from '../Pages/Product';
import AllProductContext from '../Contexts/AllProductContext';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="products/product/:id" element={<Product/>}/>
    </Routes>
  );
};

export default RouterComponent;
