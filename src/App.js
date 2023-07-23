import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth.component";
import User from "./pages/user/user.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";
import PrivateRoute from "./routes/private-route/private-route.component";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import { ColorModeContext } from "./theme";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { userContext } from "./contexts/user.context";
import { useContext, useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

const App = () => {
  const { user, setUser } = useContext(userContext);
  const { settings } = useContext(ColorModeContext);
  const theme = createTheme(settings);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        console.log(user);
      }
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {user ? (
          <Route path="/*" element={<User />} />
        ) : (
          <Route index path="/" element={<Auth />} />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
