import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { Box, Divider, Typography } from "@mui/material";

interface SideNavItem {
  label: string;
  path: string;
  icon: any;
  component: any;
}

interface Props {
  items: SideNavItem[];
}

const SideNav = ({ items }: Props) => {
  const location = useLocation();
  console.log(location.pathname);
  const [currentSelection, setCurrentSelection] = useState<string>(
    location.pathname
  );

  const handleItemClick = (path: string) => {
    setCurrentSelection(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "secondary.main",
        p: 2,
        width: 250,
      }}
    >
      <Typography variant="h4" sx={{ color: "background.paper", mt: 2, ml: 2 }}>
        Tools
      </Typography>
      <Divider
        light
        variant="middle"
        sx={{ m: 1, bgcolor: "background.paper" }}
      />
      {items.map((item) => (
        <Link
          key={item.path}
          className={`sidenav-item ${
            currentSelection === item.path ? "selected" : ""
          }`}          
          to={item.path}
          onClick={() => handleItemClick(item.path)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {item.icon}
            <Typography variant="h6">{item.label}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default SideNav;
