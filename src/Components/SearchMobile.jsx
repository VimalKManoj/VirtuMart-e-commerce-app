import React, { useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Category from "./CategoryDropDown";
import { ApiProducts } from "../Contexts/AllProductContext";

const SearchMobile = () => {
    const [productName, setProductName] = useState("");
    const navigate = useNavigate();
    const { categoryClicked ,setCategoryClicked } = useContext(ApiProducts);
    const [, setSearchParams] = useSearchParams();
    const [categoryActive, setCategoryActive] = useState(false);

  return (
    <>
    <div className="search-container-mobile">
        <button
          className="category-button"
          onClick={(e) =>
            setCategoryActive(!categoryActive, e.stopPropagation())
          }
        >
          {categoryClicked?(<div>{categoryClicked}</div>):(<div>All</div>)}<span className="material-symbols-outlined">arrow_drop_down</span>
        </button>

        <input
          placeholder="Search By Title"
          className="search"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            setSearchParams({ title: productName });
            navigate(`/products?title=${productName}`);
            setProductName("");
            setCategoryClicked("");
          }}
        >
          <span className="material-symbols-outlined search-button">
            search
          </span>
        </button>
      </div>
      {categoryActive && <Category setCategoryActive={setCategoryActive} />}
      </>
  )
}

export default SearchMobile