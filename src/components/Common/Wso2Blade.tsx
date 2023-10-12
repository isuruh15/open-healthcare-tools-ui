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
      <Grid container>
        <Grid item container md={6}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              backgroundColor: "grey.300",
              backdropFilter: "blur(5px)",
              flexDirection: "column",
              display: "flex",
              padding: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid
                item
                alignItems="center"
                sx={{
                  paddingRight: 5,
                  paddingLeft: 2,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  color="text.primary"
                  maxWidth="md"
                >
                  Digital Experiences for Payers, Providers, and Patients
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
                  Everything you need to provide awesome experiences for your
                  healthcare customers under one umbrella; Pre-built healthcare
                  APIs, the Choreo Internal Developer Platform, Asgardeo’s CIAM
                  capabilities and on-premises software, enables healthcare
                  app-dev teams to kick start their digital healthcare
                  experience development.
                </Typography>
              </Grid>
            </Grid>
            <Grid item alignItems="center" justifyContent="center" padding={1}>
              <Box
                component={"img"}
                src="wso2-logo.png"
                alt="WSO2 Logo"
                sx={{
                  height: { xs: 75, sm: 100, md: 86, lg: 106 },
                  width: { xs: 191, sm: 254, md: 220, lg: 270 },
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
              ></Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item container md={6}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              backgroundColor: "grey.300",
              backdropFilter: "blur(5px)",
              flexDirection: "column",
              display: "flex",
              padding: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid
                item
                alignItems="center"
                sx={{
                  paddingRight: 5,
                  paddingLeft: 2,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <Typography
                  variant="h2"
                  align="center"
                  color="text.primary"
                  maxWidth="md"
                >
                  A Language Built for Healthcare - Ballerina
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
                  Ballerina is the only integration language built for
                  healthcare. With its native support for healthcare standards
                  like FHIR, HL7, and X12, Ballerina enables rapid health tech
                  application development.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              padding={2}
            >
              <Box
                component={"img"}
                src="ballerina-logo-grey.svg"
                alt="Ballerina Logo"
                sx={{
                  height: { xs: 60, sm: 90, md: 76, lg: 97 },
                  width: { xs: 198, sm: 297, md: 250, lg: 320 },
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
              ></Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
