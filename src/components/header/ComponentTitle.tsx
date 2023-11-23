import { Box, Link, Typography } from "@mui/material";
import { POWERED_BY_LABEL } from "../../configs/TextConstants";

interface Props {
  heading: string;
  description: string;
}

export const ComponentTitle = ({ heading, description }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 2,
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
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
          </Box>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{ fontWeight: 400 }}
              id="component-description"
              aria-label="Component description"
            >
              {description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0.8,
            ml: { xs: 1, md: 2 },
            mt: { xs: 1, sm: 0 },
            borderLeft: { xs: 0, md: 1 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              alignItems: "center",
              display: "flex",
              ml: { xs: 0, md: 1.2 },
            }}
            id="footer-text"
          >
            {POWERED_BY_LABEL}
          </Typography>
          <Link
            href="https://wso2.com/choreo/"
            target="_blank"
            paddingTop={1.5}
          >
            <Box
              component={"img"}
              src="wso2-related-logo/choreo.svg"
              alt="Choreo Logo"
              sx={{
                width: { xs: 80, sm: 80, md: 80, lg: 80 },
                height: { xs: 25, sm: 25, md: 25, lg: 25 },
              }}
            />
          </Link>
        </Box>
      </Box>
    </>
  );
};
