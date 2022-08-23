import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInCart } from "../redux/productsReducer";
import "./Cart.css";

const Cart = () => {
  const quantity = useSelector(state => state.products.cart.length);
  const dispatch = useDispatch(state => state.products.login);

  return (
    <div onClick={() => dispatch(loginInCart())} className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
