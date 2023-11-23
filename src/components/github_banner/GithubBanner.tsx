import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import {
  GITHUB_LINK_LABEL,
  GITHUB_TITLE,
  LANDING_PAGE_BUTTON_LABEL,
  LANDING_PAGE_SUB_TITLE,
} from "../../configs/TextConstants";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Box
      bgcolor="background.paper"
      alignItems="center"
      justifyContent="center"
      padding={7}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Grid container alignItems="center" justifyContent="center" padding={1}>
        <Grid item container maxWidth="lg" alignItems="center" justifyContent="center">
        <Stack spacing={5} paddingBottom={2}>
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            maxWidth="lg"
          >
            {GITHUB_TITLE}
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            maxWidth="lg"
            color="text.secondary"
            lineHeight={{xs: 1.7, md: 1.9}}
          >
            This tool transforms HL7v2 messages to FHIR resources. Data
            transformation conditions are taken from the{" "}
            <Link
              href="https://build.fhir.org/ig/HL7/v2-to-fhir/"
              target="_blank"
              color="secondary.main"
              sx={{ textDecoration: "none" }}
            >
              official HL7v2 to FHIR mappings guide
            </Link>{" "}
            and based on the feedback received from the users. The service is
            written in Ballerina and hosted in Choreo.{" "}
            <Box component="span" fontWeight="bold">
              This tool should not be used in a production environment.
            </Box>{" "}
            We do not store any of the data you pasted/uploaded to the tool. If
            you want to use these services in a production setting, please
            contact us. For more information, checkout our{" "}
            <Link
              href="https://github.com/wso2/open-healthcare-prebuilt-services/tree/main/transformation/v2-to-fhirr4-service"
              target="_blank"
              color="secondary.main"
              sx={{ textDecoration: "none" }}
            >
              Git repository
            </Link>
            .
          </Typography>
        </Stack>
        </Grid>

      </Grid>
      <Grid item container alignItems="center" justifyContent="center">
      <Button
          variant="contained"
          color="info"
          href="https://wso2.com/contact/?ref=Healthcare"
          target="_blank"
          size="large"
          sx={{
            padding: {xs: "5px 28px", sm: "6px, 32px", md:"8px 36px"},
            color: "#fff",
            fontWeight: {xs:550, sm: 600},
            fontSize: {xs:"1rem", small:"1.1rem", md: "1.2rem"},
            alignSelf: "center",
          }}
        >
          {LANDING_PAGE_BUTTON_LABEL}
        </Button>
      </Grid>
    </Box>
  );
}

export default GithubBanner;
