import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Alert } from '@mui/material';
import CartItems from "./CartItems";

const Layout = () => {

  let total = 0;
  const loadingStatus = useSelector(state => state.products.status);

  const productsInCart = useSelector(state => state.products.cart);
  productsInCart.forEach(el => total += (el.price * el.quantity) );

  const notification = useSelector(state => state.notification);
  const isLogedInCart = useSelector(state => state.products.login); 

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        
        {notification.notifyStatus &&  notification.messege? 
        <Alert severity={notification.notifyStatus}>{notification.messege}</Alert> 
        : null}

        {loadingStatus === 'loading'? <Loading/> : <Products/>}

        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
      {isLogedInCart? <CartItems/> : null}
      
    </React.Fragment>
  );
};

export default Layout;
