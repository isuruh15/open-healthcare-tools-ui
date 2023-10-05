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
  const maxSteps = tools.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Grid container rowSpacing={2} color="text.primary">
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
                variant="outlined"
                disabled={activeStep == 0}
                onClick={() => handleBack()}
                sx={{ color: "#FF7300", borderRadius: 20 }}
              >
                <ArrowBackIosOutlinedIcon
                  fontSize="large"
                  sx={{ stroke: "#FF7300", strokeWidth: 2, color: "secondary.main" }}
                />
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={8}
              alignItems="center"
              justifyContent="center"
            >
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                // onChangeIndex={handleStepChange}
                enableMouseEvents
                // interval={25000}
              >
                {tools.slice(activeStep, activeStep+3).map((toolObject) => (
                  <Grid
                    container
                    lg={4}
                    xs={12}
                    spacing={0}
                    marginTop={2}
                    marginBottom={4}
                    alignItems="center"
                    justifyContent="center"
                  // maxWidth="xl"
                  >
                    <Grid
                      container
                      lg={12}
                      sm={6}
                      md={
                        tools.length > 2
                          ? 4
                          : tools.length == 2
                            ? 6
                            : 12
                      }
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Toolcard
                        title={toolObject.label}
                        description={toolObject.description}
                        image={toolObject.mainBlade.image}
                        link={toolObject.url}
                      ></Toolcard>
                    </Grid>
                  </Grid>
                ))}
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
                variant="outlined"
                disabled={activeStep == maxSteps - 1}
                onClick={() => handleNext()}
                sx={{ borderRadius: 200, stroke: "#FF7300" }}
              >
                <ArrowForwardIosOutlinedIcon
                  fontSize="large"
                  sx={{ stroke: "#FF7300", strokeWidth: 2, color: "secondary.main" }}
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
