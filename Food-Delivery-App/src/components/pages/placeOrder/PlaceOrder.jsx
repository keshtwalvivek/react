import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../../context/storeContext";
function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multii-fields">
          <input type=" text" placeholder="First name" />
          <input type=" text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multii-fields">
          <input type=" text" placeholder="City" />
          <input type=" text" placeholder="State" />
        </div>
        <div className="multii-fields">
          <input type=" text" placeholder="Zip code" />
          <input type=" text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
