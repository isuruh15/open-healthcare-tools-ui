import { Box, Typography } from "@mui/material";

const myFunction = () => {
    alert("Hi");
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        color: "secondary.dark",
        px: 2,
        py: 1,
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginRight: "auto", color: "primary.light" }}
      >
        2023 WSO2 LLC.
      </Typography>
      <Typography variant="h6" sx={{ display: "flex", gap: 0.5, fontWeight:400, mr:0.5 }}>
        Like our work?      
      </Typography>
      <Typography onClick={myFunction} sx={{ color: "secondary.main", cursor: "pointer", transition:"0.3s", ":hover": {
          color: "secondary.dark",
        }, }}>
          Leave a feedback
        </Typography>
    </Box>
  );
};

export default Footer;
