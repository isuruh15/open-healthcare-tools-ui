import { Box, Grid, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { ToolStatus } from "../Configs/ToolContentConfig";

interface MainBladeProps {
  title: string;
  subTitle: string;
  description: string;
  backgroundImage: string;
  status?: ToolStatus;
}

export const MainBlade = ({
  title,
  subTitle,
  description,
  backgroundImage,
  status = ToolStatus.active,
}: MainBladeProps) => {
  return (
    <>
      <Box bgcolor="background.paper">
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            maxWidth={{ xl: "xl", lg: "lg", md: "md", sm: "md", xs: "xs" }}
            sx={{ padding: { xs: 3, sm: 3, md: 0 } }}
            spacing={8}
          >
            <Grid
              container
              item
              md={6}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                container
                item
                alignItems="center"
                justifyContent="flexStart"
              >
                <Typography
                  variant="h1"
                  sx={{
                    mt: 3,
                    mb: 6,
                  }}
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
              <Box
                component="img"
                sx={{
                  height: { xs: 197, sm: 254, lg: 310, xl: 395 },
                  width: { xs: 350, sm: 450, lg: 550, xl: 700 },
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
                width={700}
                height={395}
                alt="Healthcare Logo"
                src={backgroundImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h2" align="center" paddingTop={5}>
          {status === ToolStatus.active && subTitle}
        </Typography>
      </Box>
    </>
  );
};
