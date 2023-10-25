import { Box, Link, Typography } from "@mui/material";

function PoweredByAsgardeo() {
  return (
    <Box
      alignItems="center"
      display="flex"
      sx={{ justifyContent: "space-between", paddingTop: 2 }}
    >
      <Typography variant="body2" color="text.secondary" fontSize="0.8rem">
        Powered by{" "}
      </Typography>
      <Link href="https://wso2.com/asgardeo/" target="_blank">
        <Box
          component="img"
          height={22}
          width={90}
          margin={1}
          src="asgardeo-logo.svg"
        />
      </Link>
    </Box>
  );
}

export default PoweredByAsgardeo;
