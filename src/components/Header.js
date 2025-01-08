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
          <li>{HOME}</li>
          <li>{ABOUT_US}</li>
          <li>{CONTACT_US}</li>
          <li>{CART}</li>
          <button className="login-button" onClick={() => updateLoginButton()}>
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
