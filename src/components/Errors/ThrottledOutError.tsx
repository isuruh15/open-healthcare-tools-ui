import { Box, Grid, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {
  THROTTLED_OUT_PAGE_SUB_TITLE,
  THROTTLED_OUT_PAGE_TITLE,
} from "../Configs/TextConstants";

function ThrottledOutError() {
  return (
    <Box
      bgcolor="background.paper"
      height="95%"
      alignContent="center"
      justifyContent="center"
      marginTop={11}
    >
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        spacing={5}
        minHeight="100%"
        padding={{ xs: 2, md: 4 }}
        minWidth="100%"
      >
        <Box border={1} padding={1} justifyContent="center" alignItems="center">
          <Grid item container alignContent="center" justifyContent="center">
            <ErrorIcon sx={{ color: "red", fontSize: 80 }} />
          </Grid>
          <Grid item container alignContent="center" justifyContent="center">
            <Typography variant="h4" textAlign="center" padding={2}>
              {THROTTLED_OUT_PAGE_TITLE}
            </Typography>
          </Grid>
          <Grid item container alignContent="center" justifyContent="center">
            <Typography variant="h5" textAlign="center" padding={2}>
              {THROTTLED_OUT_PAGE_SUB_TITLE}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default ThrottledOutError;
