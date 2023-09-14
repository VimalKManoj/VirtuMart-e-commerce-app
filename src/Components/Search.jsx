import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Category from "./Category";

const Search = () => {
  const [productName, setProductName] = useState("");
  const navigate =useNavigate()
  const [, setSearchParams] = useSearchParams();
  const [categoryActive, setCategoryActive] = useState(false);

  // const handleBlur =(e) =>{
  //   setCategoryActive(false)
  // }
  return (
    <>
      <div className="search-container">
        <button
          className="category-button"
          onClick={(e) =>
            setCategoryActive(!categoryActive, e.stopPropagation())
          }
        >
          All<span className="material-symbols-outlined">arrow_drop_down</span>
        </button>

        <input
          placeholder="Search By Title"
          className="search"
          value ={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            setSearchParams({ title: productName });
            navigate(`/products?title=${productName}`);
            setProductName('');
          }}
        >
          <span className="material-symbols-outlined search-button">
            search
          </span>
        </button>
      </div>
      {categoryActive && <Category setCategoryActive={setCategoryActive} />}
    </>
  );
};

export default Search;
