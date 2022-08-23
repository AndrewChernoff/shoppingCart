import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from 'react-redux';
import { login } from "../redux/loginizationReducer";
const Header = () => {

  const dispatch = useDispatch();
  const onLogoutClick = () => dispatch(login())

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li onClick={onLogoutClick} className="header-logout">
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
