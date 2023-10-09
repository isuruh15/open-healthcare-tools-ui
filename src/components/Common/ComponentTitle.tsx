import { Box, Typography } from "@mui/material";
import { AboutTool } from "../Common";

interface Props {
  heading: string;
  description: string;
  url: string;
}

export const ComponentTitle = ({ heading, description, url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2, ml: 1, mb:1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
            }}
            id="component-heading"
            aria-label="Component heading"
            color="text.primary"
          >
            {heading}
          </Typography>
          <AboutTool url={url} iconType></AboutTool>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ fontWeight: 400 }}
            id="component-description"
            aria-label="Component description"
          >
            {description}
          </Typography>
          {/* <AboutTool url={url}></AboutTool> */}
        </Box>
      </Box>
    </>
  );
};
