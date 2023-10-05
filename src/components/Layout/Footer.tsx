import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Typography } from "@mui/material";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      id="footer-container"
      borderTop={2}
      borderColor="secondary.main"
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
        <Typography
          variant="body1"
          sx={{ color: "grey.500", fontWeight: 300 }}
          id="footer-text"
        >
          2023 WSO2 LLC.
        </Typography>
      </Box>
    </Box>
  );
};
