import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Grid, Typography } from "@mui/material";
import { UNAUTHORIZED_LOGIN_LABEL } from "../Configs/TextConstants";
import GithubSignInButton from "./GithubSignInButton";
import GmailSignInButton from "./GmailSignInButton";
import MicrosoftSignInButton from "./MicrosoftSignInButton";
import PoweredByAsgardeo from "./PoweredByAsgardeo";
import { PreLoader } from "./PreLoader";

export default function LoginOverlay() {
  const { signOut, signIn, state } = useAuthContext();
  const { isAuthenticated, isLoading } = state;

  const handleLogin = (fidp: string) => {
    if (isAuthenticated) {
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
        height: "calc(100vh - 197px)",
        width: { md: "95.5%", lg: "96.4%", xl: "97.5%" },
        zIndex: 1,
      }}
      marginTop={{ md: 5.8 }}
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
          width="98%"
          padding={3}
          borderRadius={1}
        >
          {isLoading && (
            <>
              <PreLoader setActive={true} size={70} />
              <Typography variant="h5" sx={{ mt: 2 }}>
                Please wait while we are loading the tool...
              </Typography>
            </>
          )}
          {!isLoading && !isAuthenticated && (
            <>
              <Typography
                variant="h4"
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
