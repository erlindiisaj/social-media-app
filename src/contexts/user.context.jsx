import { createContext, useState } from "react";

export const userContext = createContext({
  user: {},
  setUser: () => {},
  userPostsList: [],
  setUserPostsList: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userPostsList, setUserPostsList] = useState([]);

  const value = { user, setUser, userPostsList, setUserPostsList };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
