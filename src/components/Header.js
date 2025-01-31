import {
  ABOUT_US,
  CART,
  CONTACT_US,
  GROCERY,
  HOME,
  LOGIN,
  LOGO_URL,
  LOGOUT,
} from "../util/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState(LOGIN);
  const [internetStatus, setInternetStatus] = useState(true);
  // const { loggedInUser, setUserInfo } = useContext(UserContext);
  const cart = useSelector((store) => store?.cart);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  let cartCount = 0;

  useEffect(() => {
    cart.map((item) => {
      cartCount += item?.items.length;
    });
    setCartItemsCount(cartCount);
  }, [cart]);

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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32 h-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status{internetStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">{HOME}</Link>
          </li>
          <li className="px-4">
            <Link to="/about">{ABOUT_US}</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">{CONTACT_US}</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">{GROCERY}</Link>
          </li>
          <li className="px-1">
            <Link to="/cart">{CART}</Link>
          </li>
          <li className="">
            <span>{cartItemsCount}</span>
          </li>
          <button
            className="login-button px-4"
            onClick={() => updateLoginButton()}
          >
            {loginButton}
          </button>
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
