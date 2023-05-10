import Heading from "../Common/Heading";
import { Grid } from "@mui/material";
import ConvertButton from "../Common/ConvertButton";
import TextArea from "../Common/TextArea";
import BodyContainer from "../Body/BodyContainer";

const Hl7v2ToFhir = () => {
  return (
    <BodyContainer>
      <Heading
        heading="HL7V2 To FHIR"
        description="Convert HL7 V2 data to FHIR"
        url="https://wso2.com/solutions/healthcare/"
      ></Heading>
      <Grid
        container
        spacing={2}
        marginTop={3}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextArea label="Paste your HL7 resource here:" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Grid container alignItems="center" justifyContent="center">
            <ConvertButton></ConvertButton>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextArea label="Converted FHIR resource here:" />
          </Grid>
        </Grid>
      </Grid>
    </BodyContainer>
  );
};

export default Hl7v2ToFhir;
