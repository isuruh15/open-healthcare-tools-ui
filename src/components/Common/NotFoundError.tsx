import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Footer } from "../Layout";
import { Link } from "react-router-dom";

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
              404 - Not Found
            </Typography>
          </Grid>
          <Grid item container alignContent="center" justifyContent="center">
            <Typography
              variant="h3"
              alignContent="center"
              justifyContent="center"
            >
              Opps..! The requested page is not found
            </Typography>
          </Grid>
          <Grid item container alignContent="center" justifyContent="center">
            <Link to="/">
              <Button variant="contained" color="primary" size="large" href="/">
                Back to home
              </Button>
            </Link>
          </Grid>
        </Grid>
    </Box>
  );
}

export default NotFoundError;
