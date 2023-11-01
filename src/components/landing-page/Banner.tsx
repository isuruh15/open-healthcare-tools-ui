import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Banner() {
  return (
    <Box
      bgcolor="background.paper"
      minHeight={200}
      alignItems="center"
      justifyContent="center"
      paddingTop={10}
      paddingBottom={3}
      // marginTop={9}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          container
          item
          maxWidth={{ xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
          alignItems="center"
          justifyContent="center"
          rowSpacing={5}
          columnSpacing={5}
        >
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            rowSpacing={5}
            xs={12}
            md={6}
            xl={7}
          >
            <Grid container alignItems="center" padding={{ xs: 3, md: 3 }}>
              <Typography variant="h1" align="left" sx={{ textAlign: "left" }}>
                Health IT Tools for Developers
              </Typography>
            </Grid>
            <Grid container alignItems="center" padding={{ xs: 3, md: 3 }}>
              <Typography
                variant="body1"
                align="justify"
                color="text.secondary"
                lineHeight={{ xs: 1.4, sm: 1.8 }}
              >
                Developer Tools for experimentation and learning foundational
                Health IT concepts. Please note these tools are intended for
                experimental purposes and should not be deployed in a production
                environment. WSO2’s internal developer platform, Choreo, is used
                to build and host the tools. WSO2 provides everything you need
                to provide awesome experiences for your healthcare customers
                under one umbrella; Pre-built healthcare APIs, the Choreo
                Internal Developer Platform, Asgardeo’s CIAM capabilities and
                on-premises software, enables healthcare app-dev teams to kick
                start their digital healthcare experience development.
              </Typography>
            </Grid>
            <Grid container item alignItems="center" padding={{ xs: 3, md: 3 }}>
              <Box>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{ textAlign: "left" }}
                  marginBottom={2}
                >
                  Want to use these in production?
                </Typography>
                <Button
                  variant="contained"
                  color="info"
                  href="https://wso2.com/contact/"
                  target="_blank"
                  size="large"
                  sx={{
                    padding: "8px 36px",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    alignSelf: "center",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={6}
            xl={5}
            alignItems="center"
            justifyContent="center"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            <Box
              component="img"
              sx={{
                width: { sm: 500, md: 500, lg: 600, xl: 700 },
                height: { sm: 250, md: 250, lg: 300, xl: 350 },
                backgroundBlendMode: "lighten",
              }}
              src="banner-img.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
