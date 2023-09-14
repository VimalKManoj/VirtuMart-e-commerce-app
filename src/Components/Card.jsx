import React, { useContext, useEffect, useState } from "react";
import { ProdContext } from "../Contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate()
  const { id, thumbnail, price, title } = product;
  const [added , setAdded] =useState(false)
  const { cartProduct, setCartProduct } = useContext(ProdContext);

  const addToCart =(e) =>{
    e.stopPropagation()
    setCartProduct({...cartProduct, [id]:{count:1 , details:{id, thumbnail, price, title}}})
    setAdded(true)
  }

  function removeFromCart(e){
    e.stopPropagation()
    delete cartProduct[id];
    setCartProduct(cartProduct)
    setAdded(false)
  }

  useEffect(() =>{
    if(cartProduct[id]){
        setAdded(true)
    }
  })
  

  return (
    <div className="card" >
      <div className="id">{id}</div>
      <img className="thumbnail" src={thumbnail} alt={title} id={id} onClick={() =>{navigate(`product/${id}`)}}/>
      <div className="title-price">
        <div className="title">{title}</div>
        <div className="price">${price}</div>
      </div>
      {!added?(
      <button className='add-to-cart' onClick={addToCart}>Add to Cart</button>
      ):(
        <button className='add-to-cart' onClick={removeFromCart}>Remove </button>
      )
    }

      
    </div>
  );
};

export default Card;
