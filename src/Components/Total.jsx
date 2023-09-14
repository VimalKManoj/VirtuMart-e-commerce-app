import React, { useContext, useEffect, useState } from "react";
import { ProdContext } from "../Contexts/ProductContext";

const Total = () => {
  const { cartProduct } = useContext(ProdContext);
  const [total, setTotal] = useState({ count: 0, totalAmount: 0 });


  function totalAmount(){
    total.count = 0;
    total.totalAmount = 0;
    Object.keys(cartProduct).map((key) => {
      total.count =cartProduct[key].count + total.count
      total.totalAmount = cartProduct[key].count * cartProduct[key].details.price + total.totalAmount
    }
  )
  setTotal({...total})
}

  useEffect(()=>{
    totalAmount()
  },[cartProduct])
  return (
    <div className="total-container">
      <p className="summary">Order Summary</p>
      <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
      <p className="sub-total">Subtotal :</p>
      <p className="sub-total text">${total.totalAmount}</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
      <p className="sub-total">Shipping Cost :</p>
      <p className="sub-total text">$10</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
      <p className="sub-total text-total">Total :</p>
      <p className="sub-total text-total">${total.totalAmount>0 &&total.totalAmount + 10}</p>
      </div>
      <div className='checkout-wrapper'>
        <button className="order-button">Place Order</button>
      </div>
    </div>
  );
};

export default Total;
