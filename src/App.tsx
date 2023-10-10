import {
  Box,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React, { Suspense } from "react";
import { PreLoader } from "./components/Common";

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
      contrastText: "#fff",
    },
    secondary: {
      main: "#00A79D", //Asgardeo Green
      light: "#f7f8fb", // Light grey + purple
    },
    text: {
      primary: "#000000", //Dark blue
      secondary: "#494848", //Light Grey
    },
    background: {
      paper: "#f7f8fb", // Light grey + purple
      default: "#ffffff", // White
    },
    info: {
      main: "#00A79D", //Asgardeo Green
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
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
  );
};

export default App;
