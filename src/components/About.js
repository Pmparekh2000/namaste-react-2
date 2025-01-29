import { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { fetchUserInfo, resetUserInfo } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store?.user);

  useEffect(() => {
    dispatch(fetchUserInfo("pmparekh2000"));
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(resetUserInfo())}>Reset user info</button>
      {userInfo.loading ? (
        <p>Loading</p>
      ) : userInfo.userInfo ? (
        <p>Hello</p>
      ) : (
        <p>Error: {userInfo.error}</p>
      )}
    </div>
  );
};

export default About;
