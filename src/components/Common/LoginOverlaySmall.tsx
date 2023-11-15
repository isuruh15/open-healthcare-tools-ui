import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { UNAUTHORIZED_LOGIN_LABEL } from "../Configs/TextConstants";
import GithubSignInButton from "./GithubSignInButton";
import GmailSignInButton from "./GmailSignInButton";
import MicrosoftSignInButton from "./MicrosoftSignInButton";
import PoweredByAsgardeo from "./PoweredByAsgardeo";
import { PreLoader } from "./PreLoader";

function LoginOverlaySmall() {
  const { signOut, signIn, state } = useAuthContext();
  const [isLogedIn, setIsLogedIn] = React.useState<boolean>(false);
  const { isAuthenticated, isLoading } = state;

  useEffect(() => {
    if (isAuthenticated) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, [state]);

  const handleLogin = (fidp: string) => {
    if (isLogedIn) {
      signOut();
    } else {
      signIn({
        fidp: fidp,
      });
    }
  };
  return (
    <Box
      sx={{
        position: "absolute",
        bgcolor: "rgba(0, 0, 0, 0.50)",
        color: "common.white",
        height: "calc(100vh - 197px)",
        width: { xs: "80%", sm: "88.5%" },
        zIndex: 1,
      }}
      marginTop={5.8}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 197px)"
      >
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          display="flex"
          bgcolor="background.paper"
          width="80%"
          padding={1}
          borderRadius={1}
        >
          {isLoading && (
            <>
              <PreLoader setActive={true} size={40} />
              <Typography variant="body2" color="black" marginTop={2}>
                Please wait while we are loading the tool...
              </Typography>
            </>
          )}
          {!isLoading && (
            <>
              <Typography
                variant="h6"
                marginBottom={2}
                color="common.black"
                textAlign="center"
              >
                {UNAUTHORIZED_LOGIN_LABEL}
              </Typography>
              <Box
                alignItems="center"
                flexDirection="column"
                display="flex"
                sx={{ justifyContent: "space-between" }}
              >
                <GmailSignInButton handleLogin={handleLogin} />
                <MicrosoftSignInButton handleLogin={handleLogin} />
                <GithubSignInButton handleLogin={handleLogin} />
              </Box>
              <PoweredByAsgardeo />
            </>
          )}
        </Box>
      </Grid>
    </Box>
  );
}

export default LoginOverlaySmall;
