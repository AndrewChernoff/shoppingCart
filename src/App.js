import React, { useEffect, useRef } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from 'react-redux';
import { getNotification } from "./redux/notificationReducer";

function App() {

const cart = useSelector(state => state.products.cart);
const dispatch = useDispatch();
const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    fetch('https://shoppingcart-379da-default-rtdb.firebaseio.com/cartItems.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(() => dispatch(getNotification({notifyStatus: 'success', messege: 'This is a success alert'})))
    .catch((e) => dispatch(getNotification({notifyStatus: 'error', messege: 'Something went wrong. Try again later'})))
  }, [cart])

  return (
    <div className="App">
      {/* <Auth /> */}
      <Layout />
    </div>
  );
}

export default App;
