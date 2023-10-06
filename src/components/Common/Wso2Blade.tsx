import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Wso2BladeProps {
  solution: {
    title: string;
  };
  language: {
    title: string;
  };
}

export const Banner = ({ solution, language }: Wso2BladeProps) => {
  return (
    <Box
      sx={{
        minHeight: 300,
        flexDirection: "row",
        display: "flex",
      }}
    >
      <Box
        sx={{
          minHeight: 300,
          backgroundColor: "background.paper",
          backdropFilter: "blur(5px)",
          flexDirection: "column",
          display: "flex",
          padding: 5,
          width: "0.5",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            alignItems="center"
            sx={{
              paddingRight: 5,
              paddingLeft: 2,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Typography
              variant="h3"
              align="center"
              color="text.primary"
              maxWidth="md"
            >
              {solution.title}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={2}
          >
            <Typography
              variant="body1"
              align="justify"
              color="text.secondary"
              maxWidth="md"
              lineHeight={1.7}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              odio reprehenderit accusantium animi vitae necessitatibus
              molestiae eaque repellendus eos tempora cupiditate magni
              laboriosam ex enim sapiente voluptatum facilis, voluptatem unde.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              odio reprehenderit accusantium animi vitae necessitatibus
              molestiae eaque repellendus eos tempora cupiditate magni
              laboriosam ex enim sapiente voluptatum facilis, voluptatem
              unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" padding={2}>
          <Box
            component={"img"}
            src="wso2-logo.png"
            alt="WSO2 Logo"
            sx={{
              height: 100,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
          ></Box>
        </Grid>
      </Box>
      <Box
        minHeight={300}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: 300,
          backgroundColor: "grey.300",
          backdropFilter: "blur(5px)",
          flexDirection: "column",
          display: "flex",
          padding: 5,

          width: "0.5",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            container
            alignItems="center"
            sx={{
              paddingRight: 5,
              paddingLeft: 2,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Typography
              variant="h3"
              align="center"
              color="#00255C"
              maxWidth="lg"
            >
              {language.title}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={2}
          >
            <Typography
              variant="body1"
              align="justify"
              color="text.secondary"
              maxWidth="lg"
              lineHeight={1.7}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              odio reprehenderit accusantium animi vitae necessitatibus
              molestiae eaque repellendus eos tempora cupiditate magni
              laboriosam ex enim sapiente voluptatum facilis, voluptatem unde.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              odio reprehenderit accusantium animi vitae necessitatibus
              molestiae eaque repellendus eos tempora cupiditate magni
              laboriosam ex enim sapiente voluptatum facilis, voluptatem
              unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" padding={2}>
          <Box
            component={"img"}
            src="ballerina-logo-grey.svg"
            alt="Ballerina Logo"
            sx={{
              height: 100,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
