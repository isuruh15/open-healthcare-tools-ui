import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { AlertModal, ComponentTitle } from "../Common";
import { items, Item } from "../Configs/AcceleratorConfig";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleResize = (): void => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const currentItem = items.find(
    (item: Item) => item.path === location.pathname
  );
  const label = currentItem ? currentItem.label : "";
  const description = currentItem ? currentItem.description : "";
  const url = currentItem ? currentItem.url : "";

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
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <Logo />
        <KeyboardArrowRightOutlinedIcon fontSize="large" color="primary" />
        <ComponentTitle
          heading={label}
          description={description}
          url={url}
        ></ComponentTitle>
      </Box>
    </>
  );
};
