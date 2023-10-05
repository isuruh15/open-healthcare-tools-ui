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
  const maxSteps = tools.length-3;

  const handleNext = () => {
    console.log("Next");
    console.log(activeStep);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    console.log("Back");
    console.log(activeStep);
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
                // variant="outlined"
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
              // container
              item
              xs={8}
              alignItems="center"
              justifyContent="center"
            >
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                // index={activeStep}
                // onChangeIndex={handleStepChange}
                enableMouseEvents
                // interval={25000}
              >
                {/* {tools.slice(activeStep, activeStep+3).map((toolObject) => ( */}
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
                    <Grid
                      item
                      xs={4}
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
                        title={tools[activeStep].label}
                        description={tools[activeStep].description}
                        image={tools[activeStep].mainBlade.image}
                        link={tools[activeStep].url}
                      ></Toolcard>
                    </Grid>
                    <Grid
                      item
                      xs={4}
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
                        title={tools[activeStep+1].label}
                        description={tools[activeStep+1].description}
                        image={tools[activeStep+1].mainBlade.image}
                        link={tools[activeStep+1].url}
                      ></Toolcard>
                    </Grid>
                    <Grid
                      item
                      xs={4}
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
                        title={tools[activeStep+2].label}
                        description={tools[activeStep+2].description}
                        image={tools[activeStep+2].mainBlade.image}
                        link={tools[activeStep+2].url}
                      ></Toolcard>
                    </Grid>
                  </Grid>
                {/* // ))} */}
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
                // variant="outlined"
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
