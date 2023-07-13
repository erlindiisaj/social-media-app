import { createContext, useState } from "react";

export const authContext = createContext({
  authState: "",
  setAuthSate: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthSate] = useState("signup");
  const value = { authState, setAuthSate };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
