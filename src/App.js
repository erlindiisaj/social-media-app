import {
  createUserDocumentFromAuth,
  getPosts,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import "./App.css";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { userContext } from "./contexts/user.context";
import { postsListContext } from "./contexts/social-media-posts.context";

import { ColorModeContext } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

import Loading from "./components/loading/loading.component";

import Auth from "./pages/auth/auth.component";
import Settings from "./pages/settings/settings.component";
const LoggedInUser = lazy(() =>
  import("./pages/logged-in-user/logged-in-user.component")
);

const App = () => {
  const { user, setUser, setUserPostsList } = useContext(userContext);
  const { setPostsList } = useContext(postsListContext);
  const { settings } = useContext(ColorModeContext);
  const theme = createTheme(settings);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        try {
          const data = async () => {
            const userPostsListArray = [];
            const postsData = await getPosts();
            postsData.map((post) => {
              if (post.data.id === user.uid) {
                userPostsListArray.push(post);
              }
            });
            setUserPostsList(userPostsListArray);
            setPostsList(postsData);
          };
          console.log(user);

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
          {!user ? (
            <Route index element={<Auth />} />
          ) : (
            <>
              <Route path="user" element={<LoggedInUser />}>
                <Route path=":page" element={null} />
              </Route>
              <Route path="settings" element={<Settings />} />
            </>
          )}
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
