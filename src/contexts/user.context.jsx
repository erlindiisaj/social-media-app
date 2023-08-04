import { createContext, useState } from "react";

export const userContext = createContext({
  user: {},
  setUser: () => {},
  postsList: [],
  setPostsList: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [postsList, setPostsList] = useState([]);

  const value = { user, setUser, postsList, setPostsList };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
