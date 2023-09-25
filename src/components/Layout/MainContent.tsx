import { Box, Divider } from "@mui/material";
import { Footer, Header, SideNavigation } from "../Layout";
import { ComingSoon } from "../Common";
import Routes from "../Routes/AppRoutes";
import { items } from "../Configs/AcceleratorConfig";
import itemConfig from "../../tool-config.json";
import { MainBlade } from "../Common/MainBlade";
import { PromotedToolBlade } from "../Common/PromotedToolBlade";
import Tools from "../Common/Tools";
import Banner from "../Common/Banner";
import { title } from "process";

interface ItemConfig {
  [key: string]: {
    status: "enabled" | "disabled" | "maintenance";
  };
}

export const MainContent = () => {
  const filteredItems = items.filter((item) => {
    const itemStatus = (itemConfig as ItemConfig)[item.label]?.status;
    return itemStatus !== "disabled";
  });

  const renderedItems = filteredItems.map((item) => {
    const itemStatus = (itemConfig as ItemConfig)[item.label]?.status;
    if (itemStatus === "maintenance") {
      return { ...item, component: <ComingSoon /> };
    }
    return item;
  });

  const content = {
    title: "Health IT Developer Toolkit",
  };
  const contentBal = {
    title: "Ballerina - A Language built for healthcare",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ flexGrow: 1, display: "flex" }} id="main-container">

        {/* <SideNavigation items={renderedItems} /> */}
        <Box
          width={1}
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
              ml: 2,
              mr: 2,
              flexGrow: 1,
            }}
            id="banner-container"
          >
            <MainBlade />
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
              mt:2,
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
            <Banner content={content}></Banner>
            <Banner content={contentBal}></Banner>
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
