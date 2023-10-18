import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  THROTTLED_OUT_BUTTON_LABEL,
  THROTTLED_OUT_PAGE_SUB_TITLE,
  THROTTLED_OUT_PAGE_TITLE,
} from "../Configs/TextConstants";

function ThrottledOutError() {
  return (
    <Box
      bgcolor="background.paper"
      height="100%"
      alignContent="center"
      justifyContent="center"
    >
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        spacing={5}
        minHeight="100%"
        padding={5}
      >
        <Grid item container alignContent="center" justifyContent="center">
          <Typography
            variant="h1"
            alignContent="center"
            justifyContent="center"
          >
            {THROTTLED_OUT_PAGE_TITLE}
          </Typography>
        </Grid>
        <Grid item container alignContent="center" justifyContent="center">
          <Typography
            variant="h3"
            alignContent="center"
            justifyContent="center"
          >
            {THROTTLED_OUT_PAGE_SUB_TITLE}
          </Typography>
        </Grid>
        <Grid item container alignContent="center" justifyContent="center">
          <Link to="/">
            <Button variant="contained" color="primary" size="large" href="/">
              {THROTTLED_OUT_BUTTON_LABEL}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThrottledOutError;
