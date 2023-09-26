import { useState, useEffect, useContext } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { AlertModal, ComponentTitle, ToggleEditorStyle, CommonButton } from "../Common";
import { items, Item } from "../Configs/AcceleratorConfig";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

interface HeaderProps {
  title: string;
  shortDescription: string;
  url: string;
}

export const Header = ({ title,shortDescription,url }: HeaderProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { signOut } = useAuthContext();

  const handleSampleLoad = () => 
    signOut();
    console.log("logout");

  // const location = useLocation();
  // const currentItem = items.find(
  //   (item: Item) => item.path === location.pathname
  // );
  // const label = currentItem ? currentItem.label : "";
  // const description = currentItem ? currentItem.description : "";
  // const url = currentItem ? currentItem.url : "";

  return (
    <>
      {screenWidth < 960 && (
        <AlertModal contentText="Please use a laptop or a desktop to try out the Open Healthcare Sandbox seamlessly." />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 0,
          px: 1,
          mt: 0.1,
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
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
                  label="Logout"
                  onClick={handleSampleLoad}
                  id="load-sample-button"
                />
        </Box>
      </Box>
    </>
  );
};
