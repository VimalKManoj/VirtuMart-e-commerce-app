import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { ApiProducts } from "../Contexts/AllProductContext";
import SearchMobile from "./SearchMobile";

export default function Navigation() {
  const { setTitle, setCategoryClicked } = useContext(ApiProducts);
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className="navigation-container">
      {/* <div className="menu-bar-mobile">
        <span class="material-symbols-outlined">menu</span>
      </div> */}
      <NavLink to={"/"}>
        <div
          className="logo-title"
          onClick={() => {
            setCategoryClicked("");
          }}
        >
          <a href="#top"></a>
          <img src="/logo.png" className="main-logo" />
          <p>VirtuMart</p>
        </div>
      </NavLink>
      <div className="nav-items">
        {/* <NavLink to={"/"}>Home</NavLink> */}
        <NavLink
          to={"/products"}
          onClick={() => {
            setCategoryClicked("");
            setTitle("");
          }}
        >
          Products
        </NavLink>
      </div>
      <Search />
      <div className="cart">
        <NavLink to={"/cart"}>
          <span className="material-symbols-outlined">local_mall</span>
        </NavLink>
      </div>
      </div>
      <SearchMobile/>
    </div>
  );
}
