import React, { Suspense } from "react";
import { SecureApp } from "@asgardeo/auth-react";
import { Box } from "@mui/material";
import { DarkModeProvider } from "./components/Contexts/DarkModeContext";
import { PreLoader } from "./components/Common";


const Header = React.lazy(() =>
  import("./components/Layout/Header").then((module) => ({
    default: module.Header,
  }))
);
const MainContent = React.lazy(() =>
  import("./components/Layout/MainContent").then((module) => ({
    default: module.MainContent,
  }))
);
const CompositeTool = React.lazy(() =>
  import("./components/Layout/CompositeTool").then((module) => ({
    default: module.CompositeTool,
  }))
);

const App = () => {
  return (
    <SecureApp>
      <DarkModeProvider>
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
            {/* <Header /> */}
            <MainContent />
          </Suspense>
        </Box>
      </DarkModeProvider>
    </SecureApp>
  );
};

export default App;
