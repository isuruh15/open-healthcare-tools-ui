import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

interface MainBladeProps {
  title: string;
  description: string;
  image: string;
  backgroundImage?: string;
}

export const MainBlade = ({
  title,
  description,
  image,
  backgroundImage,
}: MainBladeProps) => {
  const [active] = useState(true);
  return (
    <Box bgcolor="#00A79D75">
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          maxWidth={{ xl: "xl", lg: "lg", md: "md" }}
          spacing={5}
        >
          <Grid
            container
            item
            xl={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item alignItems="left" justifyContent="left">
              <Typography
                variant="h1"
                color="primary.dark"
                fontWeight="500"
                sx={{ mt: 3, mb: 6 }}
                alignItems="left"
                justifyContent="left"
              >
                {title}
              </Typography>
            </Grid>

            <Grid container item alignItems="center" justifyContent="center">
              <Typography
                variant="h6"
                color="primary.dark"
                marginTop={1}
                align="justify"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xl={6} alignItems={{lg: 'center',xl: 'left'}} justifyContent={{lg: 'center', xl: 'start'}}>
            <img src={image} alt="Healthcare Logo" width={700} height={395} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
