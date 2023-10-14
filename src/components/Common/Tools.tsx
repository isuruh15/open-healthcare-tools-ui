import {
  Box,
  Button,
  Grid,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { tools } from "../Configs/ToolContentConfig";
import Toolcard from "./ToolCard";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SwipeableViews from "react-swipeable-views";

function Tools() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tools.length - 3;
  const [screenWidth, setScreenWidth] = React.useState<number>(
    window.innerWidth
  );

  const handleResize = (): void => setScreenWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Grid container rowSpacing={5} color="text.primary" marginBottom={6}>
        <Grid
          container
          item
          xs={12}
          marginTop={7}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h2" align="center" maxWidth="lg">
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
            Developer Tools for experimentation and learning foundational Health
            IT concepts. WSO2 provides everything you need to provide awesome
            experiences for your healthcare customers under one umbrella;
            Pre-built healthcare APIs, the Choreo Internal Developer Platform,
            Asgardeo’s CIAM capabilities and on-premises software, enables
            healthcare app-dev teams to kick start their digital healthcare
            experience development.
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid
                container
                item
                xs={2}
                sm={3}
                md={2}
                lg={1}
                xl={2}
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
                    sx={{
                      stroke: "primary.main",
                      strokeWidth: 5,
                      color: "primary.main",
                    }}
                  />
                </Button>
              </Grid>
              <Grid
                // container
                item
                xs={8}
                sm={6}
                md={8}
                lg={10}
                xl={8}
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
                    columnSpacing={{ md: 5, lg: 10 }}
                    rowSpacing={2}
                    marginTop={2}
                    marginBottom={4}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      md={6}
                      lg={4}
                    >
                      <Toolcard
                        title={tools[activeStep].title}
                        description={tools[activeStep].description}
                        image={tools[activeStep].image}
                        link={tools[activeStep].url}
                      ></Toolcard>
                    </Grid>
                    {screenWidth >= 900 && (
                      <Grid
                        item
                        md={6}
                        lg={4}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Toolcard
                          title={tools[activeStep + 1].title}
                          description={tools[activeStep + 1].description}
                          image={tools[activeStep + 1].image}
                          link={tools[activeStep + 1].url}
                        ></Toolcard>
                      </Grid>
                    )}
                    {screenWidth >= 1200 && (
                      <Grid
                        item
                        lg={4}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Toolcard
                          title={tools[activeStep + 2].title}
                          description={tools[activeStep + 2].description}
                          image={tools[activeStep + 2].image}
                          link={tools[activeStep + 2].url}
                        ></Toolcard>
                      </Grid>
                    )}
                  </Grid>
                  {/* // ))} */}
                </SwipeableViews>
              </Grid>
              <Grid
                container
                item
                xs={2}
                sm={3}
                md={2}
                lg={1}
                xl={2}
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
                    sx={{
                      stroke: "primary.main",
                      strokeWidth: 5,
                      color: "primary.main",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Tools;
