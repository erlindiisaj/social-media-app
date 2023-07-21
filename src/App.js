import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth.component";
import User from "./pages/user/user.component";

import { useContext } from "react";
import { ColorModeContext } from "./theme";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const { settings } = useContext(ColorModeContext);
  // const handleModeChange = () => {
  //   const currentMode = mode === "light";
  //   setMode(currentMode ? "dark" : "light");
  // };
  const theme = createTheme(settings);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="user/*" element={<User />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
