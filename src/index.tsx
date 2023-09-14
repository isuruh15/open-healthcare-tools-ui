import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "@asgardeo/auth-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./components/Configs/ThemeConfig";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const config = {
  signInRedirectURL: "http://localhost:3000/hl7-to-fhir",
  signOutRedirectURL: "http://localhost:3000/hl7-to-fhir",
  clientID: "DN2VylTUi2ZgzUFTI0NuJ17LWKMa",
  baseUrl: "https://api.asgardeo.io/t/healthtools",
  scope: ["openid", "profile"]
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

