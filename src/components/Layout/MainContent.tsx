import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import toolConfig from "../../tool-config.json";
import { ComingSoon } from "../Common";
import ArticleBanner from "../Common/ArticleBanner";
import GithubBanner from "../Common/GithubBanner";
import { MainBlade } from "../Common/MainBlade";
import Tools from "../Common/Tools";
import Wso2Blade from "../Common/Wso2Blade";
import { Tool, ToolStatus, tools } from "../Configs/ToolContentConfig";
import { Footer, Header } from "../Layout";
import Routes from "../Routes/AppRoutes";
import { useEffect } from "react";
import NotFoundError from "../Common/NotFoundError";

export const MainContent = () => {
  const renderTools = tools.filter(
    (tool) => tool.status !== ToolStatus.inactive
  );

  const activeTools = renderTools.map((tool) => {
    const status = tool.status;
    if (status === ToolStatus.maintenance) {
      return { ...tool, component: <ComingSoon /> };
    }
    return tool;
  });

  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/hl7-to-fhir");
    }
  }, [location]);
  let currentItem = activeTools.find(
    (tool: Tool) => tool.path === location.pathname
  );

  if (location.pathname === "/") {
    currentItem = activeTools.find(
      (tool: Tool) => tool.path === "/hl7-to-fhir"
    );
  }

  if (!currentItem) {
    return <NotFoundError />;
  }

  const content = {
    title: "Complete Healthcare Solution for your business",
  };
  const contentBal = {
    title: "Ballerina - A Language for healthcare",
  };

  const contentArticle = {
    title: "Listen what our developers say about different tools",
  };

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
          description={currentItem.description}
          image={currentItem.image}
        />

        {/* Tool execution area */}
        <Routes items={tools} />

        {/* Github source display area */}
        <GithubBanner
          content={content}
          marginTop={0}
          marginBottom={0}
        ></GithubBanner>

        {/* Other tools display area */}
        <Tools></Tools>

        {/* About WSO2 display area */}
        <Wso2Blade solution={content} language={contentBal}></Wso2Blade>

        {/* Articles display area */}
        <ArticleBanner
          content={contentArticle}
          marginTop={0}
          marginBottom={0}
        ></ArticleBanner>

        {/* Footer display area */}
        <Footer />
      </Box>
    </Box>
  );
};
