import { useAuthContext } from "@asgardeo/auth-react";
import {
  Box,
  Button,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ComponentTitle } from "../Common";
import {
  DISCORD_HELP_LABEL,
  SIGN_OUT_BUTTON_LABEL,
} from "../Configs/TextConstants";
import { BALLERINA_DISCORD_LINK } from "../Configs/Constants";

interface Props {
  title: string;
  shortDescription: string;
  url: string;
}

export const Header = ({ title, shortDescription, url }: Props) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const handleResize = (): void => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          // gap: 1,
          py: 0,
          px: 1,
          // mt: 0.1,
          boxShadow: 3,
          mb: 1,
          // "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
        // borderBottom={5}
        // borderColor="secondary.main"
        id="header-container"
      >
        {/* <Logo /> */}
        {/* <KeyboardArrowRightOutlinedIcon fontSize="large" color="primary" /> */}
        <ComponentTitle
          heading={title}
          description={shortDescription}
          url={url}
        ></ComponentTitle>
        <Box
          sx={{
            ml: "auto",
            mr: 2,
            display: "flex",
            alignItems: "center",
          }}
          id="toggle-container"
        >
          <Stack direction="row" spacing={{ xs: 2, sm: 5 }}>
            <Link
              href={BALLERINA_DISCORD_LINK}
              target="_blank"
              underline="none"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {/* https://icons8.com/icons/set/discord */}
                <Box
                  component="img"
                  src="third-party-app-logo/discord.png"
                  sx={{
                    width: { xs: "25px", sm: "30px" },
                    height: { xs: "25px", sm: "30px" },
                  }}
                />
                <Typography
                  variant="body2"
                  color="common.black"
                  display={{ xs: "none", sm: "block" }}
                  fontSize="1.0rem"
                >
                  {DISCORD_HELP_LABEL}
                </Typography>
              </Stack>
            </Link>

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
          </Stack>
        </Box>
      </Box>
    </>
  );
};
