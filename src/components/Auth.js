import React from "react";

import "./Auth.css";
import { useDispatch } from 'react-redux';
import { login } from "../redux/loginizationReducer";

const Auth = () => {
  const dispatch = useDispatch();

  const onBtnClick = (e) => {
    e.preventDefault();
    dispatch(login());
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button onClick={onBtnClick} className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
