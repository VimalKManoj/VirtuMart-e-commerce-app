import React, { useContext, useState, useSyncExternalStore } from "react";
import { ApiProducts } from "../Contexts/AllProductContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryDropDown = ({ setCategoryActive }) => {
  const { allProducts, setCategoryClicked } = useContext(ApiProducts);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate("");
  // const {id ,title ,category} =allProducts
  // const allProducts =value.allProducts;
  // console.log(allProducts);
  const productInfo = allProducts.map((product) => ({
    title: product.title,
    category: product.category,
    id: product.id,
  }));
  const categoryOfEachItem = productInfo.map(
    (product, index) => productInfo[index].category
  );
  const category = new Set(categoryOfEachItem);
  // console.log(category);

  const handleCategory = (e) => {
    const id = e.target.id;
    console.log(id)
    setCategoryClicked(id);
    setSearchParams( {category : id});
    navigate(`/category?category=${id}`);
    setCategoryActive(!setCategoryActive);

  };
  return (
    <>
      <div className="category-menu">
        <ul>
          {Array.from(category).map((product, index) => {
            return (
              <li
                className="category-list"
                key={product}
                id={product}
                value={product}
                onClick={handleCategory}
              >
                {product.charAt(0).toUpperCase() + product.slice(1)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CategoryDropDown;
