import { Typography, Box, Link } from "@mui/material";
import choreologo from "./../assets/choreo-logo-black.svg";

export const Logo = () => {
  return (
    <Box
      id="main-logo"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 267,
        marginLeft: 1,
        my: 1,
      }}
      color="text.primary"
    >
      <Typography color="primary.dark" variant="h6" sx={{ fontWeight: 600 }}>
        Open Healthcare Tools
      </Typography>
      <Box sx={{ alignSelf: "flex-end" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography color="#545CEC" variant="h6" sx={{ fontWeight: 600 }}>
            Powered by
          </Typography>
          <Link href="https://wso2.com/choreo/" target="_blank">
            <Box
              component="img"
              sx={{ width: 80 }}
              alt="Choreo Logo"
              src={choreologo}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Logo;
