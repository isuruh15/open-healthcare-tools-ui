import React from "react";
import { Route, Routes } from "react-router-dom";

interface SideNavItem {
  path: string;
  component: any;
}

interface Props {
  items: SideNavItem[];
}

const AppRoutes = ({ items }: Props) => {
  return (
    <Routes>
      {items.map((item) => (
        <Route key={item.path} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;