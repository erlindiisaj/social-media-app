import { createContext, useState, useEffect } from "react";

//color design tokens
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        blueAccent: {
          100: "#ddd6fe",
          200: "#bbadfd",
          300: "#9a84fc",
          400: "#785bfb",
          500: "#5632fa",
          600: "#4528c8",
          700: "#341e96",
          800: "#221464",
          900: "#110a32",
        },
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
        gray: {
          100: "#f1f1f4",
          200: "#e2e4e9",
          300: "#d4d6dd",
          400: "#c5c9d2",
          500: "#b7bbc7",
          600: "#92969f",
          700: "#6e7077",
          800: "#494b50",
          900: "#252528",
        },
        backgroundAccent: {
          100: "#fdfdfd",
          200: "#fbfbfc",
          300: "#f9f9fa",
          400: "#f7f7f9",
          500: "#f5f5f7",
          600: "#c4c4c6",
          700: "#939394",
          800: "#626263",
          900: "#313131",
        },
      }
    : {
        blueAccent: {
          100: "#110a32",
          200: "#221464",
          300: "#341e96",
          400: "#4528c8",
          500: "#5632fa",
          600: "#785bfb",
          700: "#9a84fc",
          800: "#bbadfd",
          900: "#ddd6fe",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            gray: {
              main: colors.gray[500],
              light: colors.gray[200],
              dark: colors.gray[600],
            },
            black: {
              main: colors.black[500],
              light: colors.black[200],
            },
            white: {
              main: colors.white[500],
              dark: colors.white[800],
            },
            backgroundAccent: {
              light: colors.backgroundAccent[300],
              main: colors.backgroundAccent[500],
              dark: colors.backgroundAccent[600],
            },
          }
        : {
            primary: {
              main: colors.blueAccent[700],
            },
          }),
    },
    spacing: 10,
    borderRadius: "12px",
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 18,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 10,
      },
    },
  };
};

export const ColorModeContext = createContext({
  mode: "",
  settings: {},
  setMode: () => {},
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [settings, setSettings] = useState(themeSettings(mode));

  useEffect(() => {
    setSettings(themeSettings(mode));
  }, [mode]);

  const value = { settings, mode, setMode };
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};
