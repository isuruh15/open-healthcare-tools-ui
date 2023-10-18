import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { PreLoader } from "./PreLoader";

export const MaintenancePage = () => {
  const [active] = useState(true);
  return (
    <Box
      minHeight={300}
      padding={5}
      bgcolor="background.paper"
      borderTop={2}
      borderColor="common.white"
    >
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item container alignItems="center" justifyContent="center">
          <Typography variant="h2" textAlign="center">
            This tool is under maintenance
          </Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center">
          <Typography variant="h6" textAlign="center">
            We are trying to make your experience even better.
          </Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center">
          <PreLoader setActive={active} />
        </Grid>
      </Grid>
    </Box>
  );
};
