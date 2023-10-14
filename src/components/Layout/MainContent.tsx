import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import toolConfig from "../../tool-config.json";
import { ComingSoon } from "../Common";
import ArticleBanner from "../Common/ArticleBanner";
import GithubBanner from "../Common/GithubBanner";
import { MainBlade } from "../Common/MainBlade";
import Tools from "../Common/Tools";
import Wso2Blade from "../Common/Wso2Blade";
// import { items } from "../Configs/AcceleratorConfig";
import { Tool, tools } from "../Configs/ToolContentConfig";
import { Footer, Header } from "../Layout";
import Routes from "../Routes/AppRoutes";

interface ToolConfig {
  [key: string]: {
    status: "enabled" | "disabled" | "maintenance";
  };
}

export const MainContent = () => {
//   const filteredItems = items.filter((item) => {
//     const itemStatus = (toolConfig as ToolConfig)[item.label]?.status;
//     return itemStatus !== "disabled";
//   });

//   const renderedItems = filteredItems.map((item) => {
//     const itemStatus = (toolConfig as ToolConfig)[item.label]?.status;
//     if (itemStatus === "maintenance") {
//       return { ...item, component: <ComingSoon /> };
//     }
//     return item;
//   });

  const location = useLocation();
  const currentItem = tools.find(
    (tool: Tool) => tool.path === location.pathname
  );
  if (!currentItem) {
    // TODO: We should create a proper 404 page
    return <div>404</div>;
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
