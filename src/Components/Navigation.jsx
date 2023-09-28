import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { ApiProducts } from "../Contexts/AllProductContext";

const Navigation = () => {
  const { setTitle, setCategoryClicked } = useContext(ApiProducts);
  return (
    <div className="navigation-container">
      
      <NavLink to={"/"}>
        <div className="logo-title">
        <a href="#top"></a>
        <img src="/logo.png" className="main-logo" />
        VirtuMart
      </div></NavLink>
      <div className="nav-items">
        {/* <NavLink to={"/"}>Home</NavLink> */}
        <NavLink
          to={"/products"}
          onClick={() => {
            setCategoryClicked("");
            setTitle('')
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
  );
};

export default Navigation;
