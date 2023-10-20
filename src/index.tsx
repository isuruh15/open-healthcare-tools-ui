import { AuthProvider } from "@asgardeo/auth-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./components/Configs/ThemeConfig";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const basePath =
  import.meta.env.VITE_APP_AUTH_REDIRECT_URL ||
  "https://fcc975f4-146e-494e-946c-d0ab180bd2f0.e1-us-east-azure.choreoapps.dev/";

const config = {
  signInRedirectURL: basePath,
  signOutRedirectURL: basePath,
  clientID: "DN2VylTUi2ZgzUFTI0NuJ17LWKMa",
  baseUrl: "https://api.asgardeo.io/t/healthtools",
  scope: ["openid", "profile"],
};

root.render(
  <AuthProvider config={config}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </AuthProvider>
);
