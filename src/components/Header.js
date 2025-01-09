import {
  ABOUT_US,
  CART,
  CONTACT_US,
  HOME,
  LOGIN,
  LOGO_URL,
  LOGOUT,
} from "../util/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [loginButton, setLoginButton] = useState(LOGIN);
  const updateLoginButton = () => {
    setLoginButton((prevValue) => {
      return prevValue === LOGIN ? LOGOUT : LOGIN;
    });
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">{HOME}</Link>
          </li>
          <li>
            <Link to="/about">{ABOUT_US}</Link>
          </li>
          <li>
            <Link to="/contact">{CONTACT_US}</Link>
          </li>
          <li>
            <Link to="/cart">{CART}</Link>
          </li>
          <button className="login-button" onClick={() => updateLoginButton()}>
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
