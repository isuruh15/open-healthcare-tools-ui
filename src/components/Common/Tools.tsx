import { Box, Button, Grid, MobileStepper, Paper, Typography } from "@mui/material";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { tools } from "../Configs/ToolContentConfig";
import Toolcard from "./ToolCard";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SwipeableViews from "react-swipeable-views";


function Tools() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tools.length - 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Grid container rowSpacing={2} color="text.primary" marginBottom={6}>
        <Grid
          container
          item
          xs={12}
          marginTop={7}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            align="center"
            maxWidth="lg"
          >
            Health IT Developer Toolkit
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          maxWidth="lg"
        >
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            maxWidth="lg"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos iste odio repellendus, quas minima quibusdam consequatur
            nulla quia, eius inventore voluptates tempore neque obcaecati libero
            voluptate laudantium provident. Vero, obcaecati!
          </Typography>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              container
              item
              xs={2}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                disabled={activeStep == 0}
                onClick={() => handleBack()}
                sx={{ color: "grey.300", borderRadius: 20 }}
              >
                <ArrowBackIosOutlinedIcon
                  fontSize="large"
                  sx={{ stroke: "primary.main", strokeWidth: 5, color: "primary.main" }}
                />
              </Button>
            </Grid>
            <Grid
              item
              xs={8}
              alignItems="center"
              justifyContent="center"
            >
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                enableMouseEvents
              >
                <Grid
                  container
                  flexDirection={"row"}
                  xs={12}
                  spacing={2}
                  marginTop={2}
                  marginBottom={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  {tools.slice(activeStep,activeStep+3).map((tool) => (
                    <Grid
                    item
                    sm={6}
                    md={4}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Toolcard
                      title={tool.label}
                      description={tool.description}
                      image={tool.mainBlade.image}
                      link={tool.url}
                    ></Toolcard>
                    </Grid>
                  ))}
                </Grid>
              </SwipeableViews>
            </Grid>
            <Grid
              container
              item
              xs={2}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                disabled={activeStep == maxSteps - 1}
                onClick={() => handleNext()}
                sx={{ borderRadius: 200, stroke: "grey.300" }}
              >
                <ArrowForwardIosOutlinedIcon
                  fontSize="large"
                  sx={{ stroke: "primary.main", strokeWidth: 5, color: "primary.main" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Tools;
