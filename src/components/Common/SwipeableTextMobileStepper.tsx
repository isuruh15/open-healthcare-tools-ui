import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Button, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { articles } from "../Configs/ArticleConfig";
import ArticleContent from "./ArticleContent";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = articles.length;

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
    <Box maxWidth="xl">
      <Grid container alignItems="center" justifyContent="center">
        <Grid container item alignItems="center" justifyContent="center">
          <Grid
            container
            item
            xs={1}
            md={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="text"
              disabled={activeStep == 0}
              onClick={() => handleBack()}
              sx={{ display: { xs: "none", md: "block" } }}
              // sx={{ color: "#FF7300", borderRadius: 20, width: {md:30, lg: 40} }}
            >
              <ArrowBackIosOutlinedIcon
                fontSize="large"
                sx={{
                  // stroke: "#FF7300",
                  strokeWidth: 2,
                  color: "secondary.main",
                  width: { sm: 20, md: 30, lg: 40 },
                }}
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
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              interval={25000}
            >
              {articles.map((step, index) => (
                <Box key={step.title}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Link href={step.link} target="_blank">
                      <ArticleContent
                        imgPath={step.imgPath}
                        title={step.title}
                        description={step.description}
                        link={step.link}
                      />
                    </Link>
                  ) : null}
                </Box>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
          <Grid
            container
            item
            xs={1}
            md={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="text"
              disabled={activeStep == maxSteps - 1}
              onClick={() => handleNext()}
              sx={{ display: { xs: "none", md: "block" } }}
              // sx={{ borderRadius: 200, stroke: "#FF7300", width: {sm: 20, md:30, lg: 40}, padding: 0 }}
            >
              <ArrowForwardIosOutlinedIcon
                fontSize="large"
                sx={{
                  // stroke: "#FF7300",
                  strokeWidth: 2,
                  color: "secondary.main",
                  width: { sm: 20, md: 30, lg: 40 },
                }}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          paddingTop={5}
          alignItems="center"
          justifyContent="center"
          columnSpacing={5}
        >
          {articles.map((step, index) => (
            <Button
              onClick={() => {
                handleStepChange(index);
              }}
              sx={{
                display: "inline-block",
                padding: 0,
                minHeight: 0,
                minWidth: 0,
              }}
            >
              <Box
                height={7}
                bgcolor={
                  index == activeStep ? "secondary.main" : "text.primary"
                }
                marginRight={1}
                borderRadius={1}
                sx={{
                  width: { sm: 20, md: 25, lg: 30 },
                  height: { sm: 6, md: 7, lg: 7 },
                }}
              ></Box>
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
