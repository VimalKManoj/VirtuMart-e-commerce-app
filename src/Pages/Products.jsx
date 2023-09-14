import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ApiProducts } from "../Contexts/AllProductContext";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // const [products, setProducts] = useState(null);
  const [title, setTitle] = useState("");
  const { allProducts, categoryClicked } = useContext(ApiProducts);
  console.log(allProducts)
  const [searchParams] = useSearchParams();
  for (const params of searchParams.entries()) {
    console.log(params)
  }
  // console.log(searchParams)
  useEffect(() => {
    for (const params of searchParams.entries()) {
      setTitle(params);
    }
  }, [searchParams]);
  
  // console.log(allProducts)
  return (
    <div className="product-wrapper">
      {categoryClicked || title ? (
        allProducts
          ?.filter(
            (product) =>
              (categoryClicked && product.category === categoryClicked) ||
              (title &&
                product.title.toLowerCase().includes(title[1].toLowerCase()))
          )
          .map((product) => <Card key={product.id} product={product} />)
      ) : allProducts !== null ? (
        allProducts.length > 0 ? (
          allProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <div>No Product Found!!!!</div>
        )
      ) : (
        <div>Loading .....</div>
      )}
    </div>
  );
};

export default Products;

// console.log(categoryClicked);
// const getProducts = async () => {
//   try {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     setProducts(data.products);
//     console.log(products);
//   } catch (error) {
//     setProducts([]);
//     console.log(error);
//   }
// };

// useEffect(() => {
//   // getProducts();
//   setProducts(allProducts)
//   console.log(allProducts);
// }, []);
