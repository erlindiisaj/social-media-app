import {
  createUserDocumentFromAuth,
  getUsersPosts,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import "./App.css";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { userContext } from "./contexts/user.context";
import { userPosts } from "./contexts/userPosts.context";

import { ColorModeContext } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

import Loading from "./components/loading/loading.component";

import Auth from "./pages/auth/auth.component";
import Settings from "./pages/settings/settings.component";
const User = lazy(() => import("./pages/user/user.component"));

const App = () => {
  const { setUser } = useContext(userContext);
  const { setPostsList } = useContext(userPosts);
  const { settings } = useContext(ColorModeContext);
  const theme = createTheme(settings);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        try {
          const data = async () => {
            const result = await getUsersPosts(user);
            setPostsList(result);
          };
          data();
        } catch (err) {
          alert(err);
        }
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
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
