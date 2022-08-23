import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from 'react-redux';

const CartItems = () => {

  const cartProducts = useSelector(state => state.products.cart);
  console.log(cartProducts)

  return (
    <div className="cart-container">
      {cartProducts.length === 0? <h2>Your cart is empty</h2>
      : 
      <>
      <h2>Your cart</h2>
      <ul>
      <li>
        {cartProducts.map(({id, price, name, quantity}) => {
          return <CartItem key={id} id={id} price={price} name={name} quantity={quantity} />
        })}
      </li>
    </ul>
    </>}
      
    </div>
  );
};

export default CartItems;
