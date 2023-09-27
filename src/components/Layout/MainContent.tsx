import { Box, Divider } from "@mui/material";
import { Footer, Header, SideNavigation } from "../Layout";
import { ComingSoon } from "../Common";
import Routes from "../Routes/AppRoutes";
import { items } from "../Configs/AcceleratorConfig";
import toolConfig from "../../tool-config.json";
import { MainBlade } from "../Common/MainBlade";
import { PromotedToolBlade } from "../Common/PromotedToolBlade";
import Tools from "../Common/Tools";
import Banner from "../Common/Banner";
import { title } from "process";
import { tools, Tool } from "../Configs/ToolContentConfig";
import { useLocation } from "react-router-dom";
import Wso2Blade from "../Common/Wso2Blade";

interface ToolConfig {
  [key: string]: {
    status: "enabled" | "disabled" | "maintenance";
  };
}

export const MainContent = () => {
  const filteredItems = items.filter((item) => {
    const itemStatus = (toolConfig as ToolConfig)[item.label]?.status;
    return itemStatus !== "disabled";
  });

  const renderedItems = filteredItems.map((item) => {
    const itemStatus = (toolConfig as ToolConfig)[item.label]?.status;
    if (itemStatus === "maintenance") {
      return { ...item, component: <ComingSoon /> };
    }
    return item;
  });

  const location = useLocation();
  const currentItem = tools.find(
    (tool: Tool) => tool.path === location.pathname
  );
  if (!currentItem) {
    return <div>404</div>;
  }

  const content = {
    title: "Health IT Developer Toolkit",
  };
  const contentBal = {
    title: "Ballerina - A Language built for healthcare",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header title={currentItem.header.title} shortDescription={currentItem.header.shortDescription} url={currentItem.header.url} />
      <Box sx={{ flexGrow: 1, display: "flex", mt: 2 }} id="main-container">

        {/* <SideNavigation items={renderedItems} /> */}
        <Box
          // width={1}
          pt={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "auto",
              flexGrow: 1,
            }}
            id="banner-container"
          >
            <MainBlade title={currentItem.mainBlade.title} description={currentItem.mainBlade.description} image={currentItem.mainBlade.image} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "auto",
              flexGrow: 1,
            }}
            id="tool-header-container"
          >

          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "auto",
              flexGrow: 1,
            }}
            id="content-container"
          >
            <Routes items={renderedItems} />
          </Box>
          <Divider sx={{ mt: 1 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "auto",
              ml: 0,
              mr: 0,
              mt: 2,
              flexGrow: 1,
            }}
            id="banner-container"
          >
            <Banner content={content}></Banner>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "space-between",
              mb: 2,
              ml: 2,
              mr: 2,
              flexGrow: 1,
            }}
            id="banner-container"
          >
            <Tools></Tools>
          </Box>
          <Divider sx={{ mt: 1 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: 0,
              ml: 0,
              mr: 0,
            }}
            id="banner-container"
          >
            <Wso2Blade solution={content} language={contentBal}></Wso2Blade>
            {/* <Banner content={content}></Banner>
            <Banner content={contentBal}></Banner> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: 2,
              mt: 2,
              ml: 0,
              mr: 0,
            }}
            id="article-container"
          >
            <Banner content={content}></Banner>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
