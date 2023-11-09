import { AuthProvider } from "@asgardeo/auth-react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { OauthConfig } from "../../../oauth-config";
import { MaintenancePage } from "../Common";
import ArticleBanner from "../Common/ArticleBanner";
import GithubBanner from "../Common/GithubBanner";
import { MainBlade } from "../Common/MainBlade";
import Wso2Blade from "../Common/Wso2Blade";
import { BFF_BASE_URL } from "../Configs/Constants";
import { Tool, ToolStatus, tools } from "../Configs/ToolContentConfig";
import NotFoundError from "../Errors/NotFoundError";
import { Footer, Header } from "../Layout";
import Routes from "../Routes/AppRoutes";
import Page from "../landing-page/Page";

export const MainContent = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Page />;
  }

  let currentItem = tools.find(
    (tool: Tool) =>
      tool.status !== ToolStatus.inactive && tool.path === location.pathname
  );

  if (!currentItem) {
    return <NotFoundError />;
  }

  const redirectBaseUrl = OauthConfig.APP_AUTH_REDIRECT_BASE_URL;
  const config = {
    signInRedirectURL: redirectBaseUrl + location.pathname,
    signOutRedirectURL: redirectBaseUrl + location.pathname,
    clientID: OauthConfig.APP_AUTH_CLIENT_ID,
    baseUrl: OauthConfig.APP_AUTH_BASE_URL,
    scope: ["openid", "profile"],
    resourceServerURLs: [BFF_BASE_URL],
    disableTrySignInSilently: false,
  };

  return (
    <AuthProvider config={config}>
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
    </AuthProvider>
  );
};
