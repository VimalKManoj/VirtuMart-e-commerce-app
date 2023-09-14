import React, { useContext } from "react";
import { ProdContext } from "../Contexts/ProductContext";
import CartItem from "../Components/CartItem";
import Total from "../Components/Total";

const Cart = () => {
  const { cartProduct } = useContext(ProdContext);
  const noOfItems = Object.keys(cartProduct);
  console.log(noOfItems);
  return (
    <div className="cart-container">
    <div className="main-cart">
      <div>
        <p className="shopping-bag">Shopping Bag</p>
      </div>
      {noOfItems.length >0 ? (
        Object.keys(cartProduct).map((id) => (
          <CartItem key={id} product={cartProduct[id]} />
        ))
      ) : (
        <div className="no-product">No Products Found</div>
      )}
      
    </div>
    <Total/>
    </div>
  );
};

export default Cart;
