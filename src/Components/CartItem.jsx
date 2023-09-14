import React, { useContext } from "react";
import { ProdContext } from "../Contexts/ProductContext";

const CartItem = ({ product }) => {
  const {count,  details: {id, thumbnail, title, price}} = product;
  const { cartProduct, setCartProduct } = useContext(ProdContext);

  const increment = () => {
    
    cartProduct[id] = { ...cartProduct[id], count: cartProduct[id].count + 1 };
    setCartProduct({ ...cartProduct });
  };

  const decrement = () => {
    if (cartProduct[id].count > 0) {
      cartProduct[id] = { ...cartProduct[id], count: cartProduct[id].count - 1 };
      if (cartProduct[id].count === 0) {
        delete cartProduct[id];
        setCartProduct({ ...cartProduct });
      } else {
        setCartProduct({ ...cartProduct });
      }
    }
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-image-wrapper">
        <img className="cartItem-image" src={thumbnail} alt={title} />
      </div>
      <div className="cart-detail-wrapper">
        <h2 className="cartitem-title">{title}</h2>
        <div className="count-wrapper">
          <button className="plus-minus" onClick={increment}>
            +
          </button>
          <p>{count}</p>
          <button className="plus-minus" onClick={decrement}>
            -
          </button>
        </div>

        <h2>${price}</h2>
        <button className="delete-button" onClick={(() =>{
          delete cartProduct[id]
          setCartProduct({...cartProduct})
        })}>
          <span class="material-symbols-outlined delete">delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
