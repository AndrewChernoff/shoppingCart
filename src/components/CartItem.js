import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeProduct } from "../redux/productsReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  
  return (
    <>
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={() => dispatch(decrementQuantity(id))}>
        -
      </button>
      {quantity}
      <button className="cart-actions" onClick={() => dispatch(incrementQuantity(id))}>
        +
      </button>
      <FontAwesomeIcon onClick={()=> dispatch(removeProduct(id))} icon={faCircleXmark} className="item_close-icon"/>
    </div>
    </>
  );
};

export default CartItem;
