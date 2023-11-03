import { AuthProvider } from "@asgardeo/auth-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./components/Configs/ThemeConfig";
import "./index.css";
import { BFF_BASE_URL, HL7V2_TO_FHIR_URL } from "./components/Configs/Constants";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const basePath = import.meta.env.VITE_APP_AUTH_REDIRECT_URL;

const config = {
  signInRedirectURL: basePath,
  signOutRedirectURL: basePath,
  clientID: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
  baseUrl: import.meta.env.VITE_APP_AUTH_BASE_URL,
  scope: ["openid", "profile"],
  resourceServerURLs: [BFF_BASE_URL+HL7V2_TO_FHIR_URL]
};

console.log("basePath-import", import.meta.env.VITE_APP_AUTH_REDIRECT_URL_TST);

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
