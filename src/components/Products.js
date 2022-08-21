import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/productsReducer";
import { useHttp } from "../hooks/useFetch";

const Products = () => {
  const productsList = useSelector(state => state.products.productsItems);
  const dispatch = useDispatch(); 
  const {request} = useHttp();

  useEffect(() => {
    request('http://localhost:3001/products')
    .then(res => dispatch(fetchProducts(res)))
  }, [])

  return (
    <div>
      <ul className="products-container">
        {productsList.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
