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

const App = () => {
  return (
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
  );
};

export default App;
