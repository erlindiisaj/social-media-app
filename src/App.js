import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth.component";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import { ColorModeContext } from "./theme";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { userContext } from "./contexts/user.context";
import { useContext, useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import Loading from "./components/loading/loading.component";

const User = lazy(() => import("./pages/user/user.component"));

const App = () => {
  const { setUser } = useContext(userContext);
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Auth />} />
          <Route path="user" element={<User />}>
            <Route path=":page" element={null} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
