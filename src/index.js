import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContextProvider } from "./theme";
import { AuthContextProvider } from "./contexts/auth.context";
import { PostsListProvider } from "./contexts/social-media-posts.context";
import { UserContextProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeContextProvider>
        <UserContextProvider>
          <AuthContextProvider>
            <PostsListProvider>
              <App />
            </PostsListProvider>
          </AuthContextProvider>
        </UserContextProvider>
      </ColorModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
