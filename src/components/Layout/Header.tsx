import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ComponentTitle } from "../Common";

interface HeaderProps {
  title: string;
  shortDescription: string;
  url: string;
}

export const Header = ({ title, shortDescription, url }: HeaderProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isLogedIn, setIsLogedIn] = React.useState<boolean>(false);
  const { signOut, signIn, isAuthenticated, state } = useAuthContext();
  useEffect(() => {
    isAuthenticated()
      .then((response) => {
        console.log("State  " + state.isAuthenticated);
        if (response === true) {
          console.log("response" + response);
          setIsLogedIn(true);
        } else {
          console.log("response " + response);
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

  // const location = useLocation();
  // const currentItem = items.find(
  //   (item: Item) => item.path === location.pathname
  // );
  // const label = currentItem ? currentItem.label : "";
  // const description = currentItem ? currentItem.description : "";
  // const url = currentItem ? currentItem.url : "";

  return (
    <>
      {/* {screenWidth < 600 && (
        <AlertModal contentText="Please use a laptop or a desktop to try out the Open Healthcare Sandbox seamlessly." />
      )} */}
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
              href="https://discord.com/invite/wso2"
              target="_blank"
              underline="none"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {/* https://icons8.com/icons/set/discord */}
                <Box
                  component="img"
                  src="discord-black.png"
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
                  Get Help
                </Typography>
              </Stack>
            </Link>

            {/* <CommonButton
              variant="border"
              label={isLogedIn ? "Logout" : "Login"}
              onClick={handleLogin}
              id="load-sample-button"
            /> */}
            {isLogedIn && (
              <Button
                href=""
                target="_blank"
                variant="contained"
                size="medium"
                color="info"
                sx={{
                  padding: { xs: "0px", sm: "0px", md: "1px", lg: "8px" },
                  width: { xs: 100, sm: 100, md: 100, lg: 100, xl: 110 },
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
                onClick={handleLogin}
              >
                Sign Out
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
