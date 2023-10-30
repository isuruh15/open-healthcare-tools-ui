import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MaintenancePage } from "../Common";
import ArticleBanner from "../Common/ArticleBanner";
import GithubBanner from "../Common/GithubBanner";
import { MainBlade } from "../Common/MainBlade";
import Tools from "../Common/Tools";
import Wso2Blade from "../Common/Wso2Blade";
import { Tool, ToolStatus, tools } from "../Configs/ToolContentConfig";
import NotFoundError from "../Errors/NotFoundError";
import { Footer, Header } from "../Layout";
import Routes from "../Routes/AppRoutes";

export const MainContent = () => {
  const activeTools = tools.filter(
    (tool) => tool.status !== ToolStatus.inactive
  );

  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/hl7v2-to-fhir");
    }
  }, [location]);
  let currentItem = activeTools.find(
    (tool: Tool) => tool.path === location.pathname
  );

  if (location.pathname === "/") {
    currentItem = activeTools.find(
      (tool: Tool) => tool.path === "/hl7v2-to-fhir"
    );
  }

  if (!currentItem) {
    return <NotFoundError />;
  }

  return (
    <Box>
      <Header
        title={currentItem.title}
        shortDescription={currentItem.shortDescription}
        url={currentItem.url}
      />
      <Box id="main-container">
        {/* Banner content */}
        <MainBlade
          title={currentItem.title}
          subTitle={currentItem.subTitle}
          description={currentItem.description}
          backgroundImage={currentItem.image}
          status={currentItem.status}
        />

        {/* Tool execution area */}
        {currentItem.status === ToolStatus.active && <Routes items={tools} />}

        {/* Github source display area */}
        {currentItem.status === ToolStatus.active && (
          <GithubBanner marginTop={0} marginBottom={0}></GithubBanner>
        )}

        {/* If the particular page is in maintenance status */}
        {currentItem.status === ToolStatus.maintenance && <MaintenancePage />}

        {/* Other tools display area */}
        {/* temporary removing the tools blade until other tools are ready */}
        {/* <Tools currentTool={currentItem.title}></Tools> */}

        {/* About WSO2 display area */}
        <Wso2Blade></Wso2Blade>

        {/* Articles display area */}
        <ArticleBanner marginTop={0} marginBottom={0}></ArticleBanner>

        {/* Footer display area */}
        <Footer />
      </Box>
    </Box>
  );
};
