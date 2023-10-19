import { Box, Grid, Typography } from "@mui/material";
import { THROTTLED_OUT_PAGE_SUB_TITLE } from "../Configs/TextConstants";

function ThrottledOutError() {
  return (
    <Box
      bgcolor="background.paper"
      height="95%"
      alignContent="center"
      justifyContent="center"
      marginTop={10}
    >
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        spacing={5}
        minHeight="100%"
        padding={8}
      >
        {/* <Grid item container alignContent="center" justifyContent="center">
          <Typography
            variant="h2"
            textAlign="center"
          >
            {THROTTLED_OUT_PAGE_TITLE}
          </Typography>
        </Grid> */}
        <Grid item container alignContent="center" justifyContent="center">
          <Typography variant="h4" textAlign="center" border={1} padding={2}>
            {THROTTLED_OUT_PAGE_SUB_TITLE}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThrottledOutError;
