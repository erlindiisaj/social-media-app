import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
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
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
