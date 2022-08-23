import React from "react";
import { addInCart } from "../redux/productsReducer";

import "./Product.css";
import { useDispatch } from 'react-redux';
const Product = ({ name, id, imgURL, price}) => {
  
  const dispatch = useDispatch()

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => dispatch(addInCart({id: id,name: name,imgURL:imgURL,price:price, quantity:1}))}>Add to cart</button>
    </div>
  );
};

export default Product;
