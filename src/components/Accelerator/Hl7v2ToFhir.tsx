import Heading from "../Common/Heading";
import { Grid } from "@mui/material";
import ConvertButton from "../Common/ConvertButton";
import TextArea from "../Common/TextArea";
import BodyContainer from "../Body/BodyContainer";
import { useState } from "react";
import axios from "axios";

const Hl7v2ToFhir = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const callBackend = () => {
    console.log("Clicked");
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      });
  };

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
            <TextArea
              label="Paste your HL7 resource here:"
              handleOnChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Grid container alignItems="center" justifyContent="center">
            <ConvertButton handleSubmit={callBackend} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
          <Grid container alignItems="center" justifyContent="center">
            <TextArea label="Converted FHIR resource here:" data={response} />
          </Grid>
        </Grid>
      </Grid>
    </BodyContainer>
  );
};

export default Hl7v2ToFhir;
