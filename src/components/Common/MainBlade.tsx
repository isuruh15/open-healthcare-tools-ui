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
    <Box bgcolor="background.paper">
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
            md={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item alignItems="center" justifyContent="flexStart">
              <Typography
                variant="h2"
                fontWeight="500"
                sx={{ mt: 3, mb: 6 }}
                alignItems="center"
                color="text.primary"
              >
                {title}
              </Typography>
            </Grid>

            <Grid container item alignItems="center" justifyContent="center">
              <Typography
                variant="body1"
                color="text.secondary"
                marginTop={1}
                align="justify"
                lineHeight={1.7}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={6}
            alignItems={{ lg: "center", xl: "left" }}
            justifyContent={{ lg: "center", xl: "start" }}
          >
            <img src={image} alt="Healthcare Logo" width={700} height={395} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
