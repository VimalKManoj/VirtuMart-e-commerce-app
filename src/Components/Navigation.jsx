import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navigation = () => {
  
  return (
    <div className="navigation-container">
      <div className="logo-title">
        <a href="#top"></a>
        <img src="/logo.png" className="main-logo" />
        VirtuMart
      </div>
      <div className="nav-items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </div>
      <Search/>
      <div className="cart">
        <NavLink to={"/cart"}>
          <span className="material-symbols-outlined">local_mall</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
