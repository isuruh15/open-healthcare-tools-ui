import { useState, useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Box } from "@mui/material";
import { ComponentTitle, CommonButton } from "../Common";
import React from "react";

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
          <CommonButton
            variant="border"
            label={isLogedIn ? "Logout" : "Login"}
            onClick={handleLogin}
            id="load-sample-button"
          />
        </Box>
      </Box>
    </>
  );
};
