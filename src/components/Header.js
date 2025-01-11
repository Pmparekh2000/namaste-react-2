import {
  ABOUT_US,
  CART,
  CONTACT_US,
  HOME,
  LOGIN,
  LOGO_URL,
  LOGOUT,
} from "../util/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(LOGIN);
  const [internetStatus, setInternetStatus] = useState(true);

  const updateLoginButton = () => {
    setLoginButton((prevValue) => {
      return prevValue === LOGIN ? LOGOUT : LOGIN;
    });
  };

  const onlineStatusValue = useOnlineStatus();
  useEffect(() => {
    setInternetStatus(onlineStatusValue);
  }, [onlineStatusValue]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status{internetStatus ? "🟢" : "🔴"}</li>
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
