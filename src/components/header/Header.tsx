import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Button, CircularProgress, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { BALLERINA_DISCORD_LINK } from "../../configs/Constants";
import {
  DISCORD_HELP_LABEL,
  SIGN_OUT_BUTTON_LABEL,
} from "../../configs/TextConstants";
import { ComponentTitle } from "./ComponentTitle";

interface Props {
  title: string;
  shortDescription: string;
  url: string;
}

export const Header = ({ title, shortDescription }: Props) => {
  const [isLogedIn, setIsLogedIn] = React.useState<boolean>(false);
  const { signOut, signIn, isAuthenticated } = useAuthContext();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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

  const handleLogout = () => {
    if (isLogedIn) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          py: 0,
          px: 1,
          boxShadow: 3,
          mb: 0.4,
          backgroundColor: "background.paper",
          position: "fixed",
          zIndex: 5,
          width: "100%",
        }}
        id="header-container"
      >
        <ComponentTitle
          heading={title}
          description={shortDescription}
        ></ComponentTitle>
        <Box
          sx={{
            ml: "auto",
            mr: 2,
            display: "flex",
          }}
          id="toggle-container"
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Link href={BALLERINA_DISCORD_LINK} target="_blank">
                {/* https://icons8.com/icons/set/discord */}
                <Box
                  component="img"
                  src="third-party-app-logo/discord.png"
                  sx={{
                    width: { xs: "25px", sm: "30px" },
                    height: { xs: "25px", sm: "30px" },
                  }}
                />
              </Link>
              <Link
                href={BALLERINA_DISCORD_LINK}
                target="_blank"
                underline="none"
                sx={{ paddingLeft: 1, paddingTop: 0.5 }}
              >
                <Typography
                  variant="body2"
                  color="common.black"
                  display={{ xs: "none", sm: "block" }}
                  fontSize="1.0rem"
                >
                  {DISCORD_HELP_LABEL}
                </Typography>
              </Link>
            </Box>

            {isLogedIn && (
              <Button
                href=""
                target="_blank"
                variant="contained"
                size="medium"
                color="info"
                sx={{
                  padding: { xs: "5px", sm: "8px", md: "5px", lg: "8px" },
                  width: { xs: 110, sm: 120, md: 110, lg: 110, xl: 120 },
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1.0rem",
                  textTransform: "none",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                  },
                }}
                onClick={() => {
                  setIsLoading(true);
                  handleLogout();
                }}
                endIcon={
                  isLoading && (
                    <CircularProgress
                      size={16}
                      sx={{ color: "white", ml: 0.1 }}
                    />
                  )
                }
              >
                {SIGN_OUT_BUTTON_LABEL}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
