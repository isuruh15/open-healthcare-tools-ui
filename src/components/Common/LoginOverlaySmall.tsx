import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

function LoginOverlaySmall() {
  const { signOut, signIn, isAuthenticated } = useAuthContext();
  const [isLogedIn, setIsLogedIn] = React.useState<boolean>(false);

  useEffect(() => {
    isAuthenticated()
      .then((response) => {
        if (response === true) {
          setIsLogedIn(true);
        } else {
          setIsLogedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (isLogedIn) {
      setIsLogedIn(false);
      signOut();
    } else {
      setIsLogedIn(true);
      signIn();
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
      marginTop={4.6}
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
          <Typography
            variant="h6"
            marginBottom={2}
            color="common.black"
            textAlign="center"
          >
            Please sign in to try out the Healthcare tool
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: { xs: "1rem" },
              textTransform: "none",
              alignSelf: "center",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Sign In
          </Button>
        </Box>
        <Box alignItems="center" justifyContent="center"></Box>
      </Grid>
    </Box>
  );
}

export default LoginOverlaySmall;
