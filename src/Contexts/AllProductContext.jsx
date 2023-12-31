import React, { createContext, useEffect, useState } from "react";
import CategoryDropDown from "../Components/CategoryDropDown";

export const ApiProducts = createContext([]);
const AllProductContext = ({ children }) => {
  const [allProducts, setAllproducts] = useState({});
  const [categoryClicked, setCategoryClicked] = useState("");
  const [title, setTitle] = useState("");

  // const [products, setProducts] = useState(null);
  const getAllProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setAllproducts(data.products);
      console.log(data.products);
    } catch (error) {
      setAllproducts({});
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ApiProducts.Provider
      value={{ allProducts, categoryClicked, setCategoryClicked ,title ,setTitle}}
    >
      {children}
    </ApiProducts.Provider>
  );
};

export default AllProductContext;
