import { SecureApp } from "@asgardeo/auth-react";
import { Box, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import React, { Suspense } from "react";
import { PreLoader } from "./components/Common";
import { DarkModeProvider } from "./components/Contexts/DarkModeContext";
import { create } from "domain";

const MainContent = React.lazy(() =>
  import("./components/Layout/MainContent").then((module) => ({
    default: module.MainContent,
  }))
);

let theme = createTheme({
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#000000", //Black
    },
    secondary: {
      main: "#FF7300", //WSO2 Orange
    },
    text: {
      primary: "#00255C", //Dark blue
      secondary: "#494848", //Light Grey
    },
    background: {
      paper: "#f7f8fb", // Light grey + purple
      default: "#ffffff", // White
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <SecureApp>
        <ThemeProvider theme={theme}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
          >
            <Suspense
              fallback={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                    }}
                  >
                    <PreLoader setActive={true} size={50} />
                  </Box>
                </>
              }
            >
              <MainContent />
            </Suspense>
          </Box>
        </ThemeProvider>
    </SecureApp>
  );
};

export default App;
