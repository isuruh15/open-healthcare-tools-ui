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

    let config = {
      headers: {
        "API-Key":
          "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI0NWUyM2MyZC1kYmI4LTRiZDAtODI0NS0xMzFmZGFhNmY2ZmFAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJobDd2MnRvZmhpcmhlYWx0aGNhcmVhY2NlbGVyYXRvciAtIEVuZHBvaW50IDkwOTAgOCIsImNvbnRleHQiOiJcL2MzMjYxOGNmLTM4OWQtNDRmMS05M2VlLWI2N2EzNDY4YWFlM1wvaGRiYlwvaGw3djJ0b2ZoaXJoZWFsdGhjYXJlYWNjZWxlcmF0b3JcL2VuZHBvaW50LTkwOTAtODAzXC8xLjAuMCIsInB1Ymxpc2hlciI6ImNob3Jlb19wcm9kX2FwaW1fYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjpudWxsfV0sImV4cCI6MTY4Mzc4MzQ1OSwidG9rZW5fdHlwZSI6IkludGVybmFsS2V5IiwiaWF0IjoxNjgzNzgyODU5LCJqdGkiOiIyZjdiNTY1Yy0wMWY0LTRiY2EtOGI4OC1jNmI1Y2EwM2ZjZjYifQ.I9nvmWIH3qPu-8mgQL5zXqDz6jug-48l_270-e5nkhSDHkuxsizq2fqxmQSvGCk4Yqp3qCiQIw1GtpzE3Q36ZgaL4TnDCMR8mUeBRGuSKsOZLyMM-ouZJVF9pol39nLjqvcSB9czdp6p0CO7UkFfXRTsHfdsuu0r951fOwRjQP-KJXENr9oBqNxShV8tzogb8C8IsbOAH6FwBMDq-tATiSxzH6Et2FE4LjKTiN5o2JnkexSIRMEU4OiRLrNJPa-lZS7mGFsTgea2aWxB0mewz4pgDsddkZUTwrGdknZ4_cpChU0TTmB1kLNJs-pVJv3wntPwSo-eNaGKD-X9WohlW_wBPIvZp1FiF8hw_A1syUpbMVCO1fjRI2Ui-Zi2O01UNVMrWKsUncn2v-pA-pDNxN0WmvTSnGRoJIoSRQAjRO-VQ10vN-KLS_xhgFmRhI8aq-NhUvoCWp-k1OKiF9SmfJXHXMBRyNqEnroAvDgscU6V6ugympWRyQ0qoWPACL7awtcpe40WIXvHjQn3l6G5YSZtUDVdL6hUU9an-TvC-SJ2QPY1H6zKxGL9Km7r15QT4kCI8uzh65Bva1485uXEa2VAs9QJYvru8nz_iLqXxLvXR48CcpXq8hkJUIn4QSXjcneRIy6il0azxXl3DfUPPf2WhJZgPBoPRyz0HezAx0w",
      },
    };
    const url: string =
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/hl7v2tofhirhealthcareaccelerator/endpoint-9090-803/1.0.0/v2tofhir/transform";

    axios
      .post(url, data, config)
      .then((res) => {
        console.log(res.data);
        setResponse(res.data);
      })
      .catch((e) => {
        console.log(e);
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
