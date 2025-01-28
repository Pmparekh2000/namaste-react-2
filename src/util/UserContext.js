import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  setUserInfo: () => {},
});

export default UserContext;
