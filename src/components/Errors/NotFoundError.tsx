import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  NOT_FOUND_BUTTON_LABEL,
  NOT_FOUND_PAGE_SUB_TITLE,
  NOT_FOUND_PAGE_TITLE,
} from "../Configs/TextConstants";

function NotFoundError() {
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
            {NOT_FOUND_PAGE_TITLE}
          </Typography>
        </Grid>
        <Grid item container alignContent="center" justifyContent="center">
          <Typography
            variant="h3"
            alignContent="center"
            justifyContent="center"
          >
            {NOT_FOUND_PAGE_SUB_TITLE}
          </Typography>
        </Grid>
        <Grid item container alignContent="center" justifyContent="center">
          <Link to="/">
            <Button variant="contained" color="primary" size="large" href="/">
              {NOT_FOUND_BUTTON_LABEL}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NotFoundError;
