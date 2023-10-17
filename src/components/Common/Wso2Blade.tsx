import { Divider, Grid, Typography } from "@mui/material";
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
    <Grid
      container
      justifyContent="center"
      sx={{
        backgroundColor: "grey.300",
        backdropFilter: "blur(5px)",
      }}
      padding={5}
    >
      <Grid
        container
        item
        justifyContent="center"
        maxWidth="xl"
        spacing={10}
        paddingTop={4}
      >
        <Grid item container xs={12} md={6} justifyContent="center" spacing={5}>
          <Grid item container alignItems="flex-start" justifyContent="center">
            <Typography variant="h2" align="center">
              Digital Experiences for Payers, Providers, and Patients
            </Typography>
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
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
              capabilities and on-premises software, enables healthcare app-dev
              teams to kick start their digital healthcare experience
              development.
            </Typography>
          </Grid>
          <Grid item container alignItems="flex-end" justifyContent="center">
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
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center" spacing={5}>
          <Grid
            item
            container
            alignItems="flex-start"
            justifyContent="center"
            borderLeft={{ xs: 0, md: 1 }}
          >
            <Divider
              sx={{
                border: { sx: 1, md: 0 },
                width: "100%",
                marginBottom: { xs: 5, md: 0 },
              }}
            />
            <Typography variant="h2" align="center">
              A Language Built for Healthcare - Ballerina
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            borderLeft={{ xs: 0, md: 1 }}
          >
            <Typography
              variant="body1"
              align="justify"
              color="text.secondary"
              maxWidth="lg"
              lineHeight={1.7}
            >
              Ballerina is the only integration language built for healthcare.
              With its native support for healthcare standards like FHIR, HL7,
              and X12, Ballerina enables rapid health tech application
              development.
            </Typography>
          </Grid>

          <Grid
            item
            container
            alignItems="flex-end"
            justifyContent="center"
            borderLeft={{ xs: 0, md: 1 }}
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
