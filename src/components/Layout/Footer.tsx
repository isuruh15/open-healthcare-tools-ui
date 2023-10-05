import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Link, Typography } from "@mui/material";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      id="footer-container"
      borderTop={2}
      borderColor="secondary.main"
      color="text.primary"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.5,
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: "auto",
          px: 1,
          py: 0.6,
          mr: 2,
        }}
      >
        <CopyrightIcon
          sx={{
            color: "grey.400",
            mr: 0.5,
            fontSize: 19,
          }}
          aria-hidden="true"
        />
        <Link href="https://wso2.com/" target="_blank" underline="hover">
        <Typography
          variant="body1"
          sx={{ color: "grey.500", fontWeight: 300 }}
          id="footer-text"
        >
          {new Date().getFullYear()} WSO2 LLC.
        </Typography>
        </Link>
        
      </Box>
    </Box>
  );
};
