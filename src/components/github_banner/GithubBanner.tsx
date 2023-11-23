import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { GITHUB_LINK_LABEL, GITHUB_TITLE } from "../../configs/TextConstants";

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
        <Stack spacing={5}>
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
            lineHeight={1.9}
          >
            This tool transforms HL7v2 messages to FHIR resources. Data
            transformation conditions are taken from the mappings{" "}
            <Link
              href="https://build.fhir.org/ig/HL7/v2-to-fhir/"
              target="_blank"
              color="secondary.main"
              sx={{ textDecoration: "none" }}
            >
              official HL7v2 to FHIR guide
            </Link>{" "}
            and based on the feedback received from the users. The service is
            written in Ballerina and hosted in Choreo. This tool should not be
            used in a production environment. We do not store any of the data
            you pasted/uploaded to the tool. If you want to use these services
            in a production setting, please contact us. For more information,
            checkout our{" "}
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
    </Box>
  );
}

export default GithubBanner;
