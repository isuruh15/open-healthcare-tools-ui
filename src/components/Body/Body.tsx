import React from "react";
import { Box } from "@mui/material";
import Routes from "../../contexts/AppRoutes";
import SideNavigation from "../SideNavigation";
import items from './Config'

const Body = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <SideNavigation items={items} />

      <Box sx={{ flexGrow: 3 }}>
        <Routes items={items} />
      </Box>
    </Box>
  );
};
//
export default Body;
