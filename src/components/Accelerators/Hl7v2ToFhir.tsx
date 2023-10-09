import { useCallback, useContext, useEffect, useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import {
  ConvertButton,
  SamplesModal,
  CodeEditor,
  ResponseAlert,
  HeadersTab,
  ToggleEditorStyle,
} from "../Common";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { SelectedSampleContext } from "../Contexts/SelectedSampleContext";
import apiClient from "../../services/api-client";
import { BFF_BASE_URL, HL7V2_TO_FHIR_URL } from "../Configs/Constants";

interface State {
  input: string;
  output: string;
  errorMessage: string;
  isError: boolean;
  isLoading: boolean;
  alertOpen: boolean;
}

export const Hl7v2ToFhir = () => {
  const [state, setState] = useState<State>({
    input: "",
    output: "",
    errorMessage: "",
    isError: false,
    isLoading: false,
    alertOpen: false,
  });

  const { input, output, errorMessage, isError, isLoading, alertOpen } = state;

  const { loadSample, setLoadSample, selectedLabel, setSelectedLabel } =
    useContext(SelectedSampleContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const [response, setResponse] = useState<any>({
    statusCode: null,
    statusText: "",
    resUrl: "",
    contentType: "",
  });
  const [request, setRequest] = useState<any>({
    reqUrl: "",
    contentType: "",
    method: "",
  });

  useEffect(() => {
    if (selectedLabel == "HL7V2 To FHIR") {
      setState((prevState) => ({
        ...prevState,
        input: loadSample!.data,
        alertOpen: true,
      }));
      setLoadSample(null);
      setSelectedLabel("");
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          alertOpen: false,
        }));
      }, 2000);
    }
  }, [loadSample, selectedLabel]);

  const closeAlert = () => {
    setState((prevState) => ({
      ...prevState,
      alertOpen: false,
    }));
  };

  const closeResponse = () => {
    setState((prevState) => ({
      ...prevState,
      isError: false,
    }));
  };

  const handleInputChange = useCallback((value: string, backendCall:Function) => {
    setState((prevState) => ({
      ...prevState,
      input: value,
    }));
    backendCall();
  }, []);

  const handleInputClear = () => {
    setState((prevState) => ({
      ...prevState,
      input: "",
    }));
  };

  const handleChange = (value: string) => {
    handleInputChange(value, callBackend);
  }

  const handleOutputClear = () => {
    setState((prevState) => ({
      ...prevState,
      output: "",
    }));
  };

  const readFile = (fileInput?: string | ArrayBuffer | null) => {
    if (typeof fileInput == "string") {
      setState((prevState) => ({
        ...prevState,
        input: fileInput,
      }));
    }
  };

  const callBackend = () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      output: "",
      isError: false,
      errorMessage: "",
    }));

    apiClient(BFF_BASE_URL)
      .post(HL7V2_TO_FHIR_URL, input)
      .then((res) => {
        setRequest({
          reqUrl: BFF_BASE_URL + res.config["url"],
          contentType: res.config.headers["Content-Type"],
          method: res.config["method"]?.toUpperCase(),
        });
        setResponse({
          statusCode: res.status,
          statusText: res.statusText,
          resUrl: res.request["responseURL"],
          contentType: res.headers["content-type"],
        });
        setState((prevState) => ({
          ...prevState,
          output: JSON.stringify(res.data, null, 2),
          isLoading: false,
        }));
      })
      .catch((error) => {
        setRequest({
          reqUrl: BFF_BASE_URL + error.config["url"],
          contentType: error.config.headers["Content-Type"],
          method: error.config["method"]?.toUpperCase(),
        });
        setResponse({
          statusCode: error.response.status,
          statusText: error.response.statusText,
          resUrl: error.response.request["responseURL"],
          contentType: error.response.headers["content-type"],
        });
        setState((prevState) => ({
          ...prevState,
          output: JSON.stringify(error.response, null, 2),
          errorMessage: error.message,
          isError: true,
          isLoading: false,
        }));
        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isError: false,
          }));
        }, 2000);
      });
  };

  return (
    <Container
      id="hl7v2-to-fhir-container"
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", height: 1 }}
    >
      {isError && (
        <ResponseAlert
          isOpen={isError}
          severity="error"
          message={errorMessage}
          setIsOpen={closeResponse}
          id="response-alert-error"
          aria-label="Error Response Alert"
        />
      )}
      {alertOpen && (
        <ResponseAlert
          isOpen={alertOpen}
          severity="success"
          message="Sample Loaded"
          setIsOpen={closeAlert}
          id="response-alert-success"
          aria-label="Success Response Alert"
        />
      )}

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      > */}
      {/* <SamplesModal /> */}
      {/* <Box id="headers-button" sx={{
          justifyContent: "flex-end",
        }}>
          <HeadersTab request={request} response={response} />
        </Box>

        <ToggleEditorStyle
          mode={darkMode}
          toggleMode={() => setDarkMode(!darkMode)}
        />
      </Box> */}
      <Divider sx={{ mt: 3, mb:3 }} />
      <Typography variant="h4" align="center" sx={{mt:0}}>Try It Out</Typography>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
        marginTop={5}
      >
        <Box
          sx={{
            pr: 1,
            pb: 1,
            width: "50%",
          }}
          id="hl7-resource-box"
          aria-label="HL7 Resource Box"
        >
          <CodeEditor
            title="HL7 Resource"
            value={input}
            onChange={handleChange}
            darkMode={darkMode}
            onClear={handleInputClear}
            placeholder="Paste or edit HL7 Data here..."
            fileType="jsx"
            uploadEnabled
            readFile={readFile}
            clearEnabled
            width="100%"
            height="calc(100vh - 197px)"
            id="hl7-resource-editor"
            aria-label="HL7 Resource Editor"
          />
        </Box>
        <Box
          sx={{
            pl: 1,
            pb: 1,
            width: "50%",
          }}
          id="fhir-resource-box"
          aria-label="FHIR Resource Box"
        >
          <CodeEditor
            title="FHIR Resource"
            value={output}
            readOnly
            darkMode={darkMode}
            onClear={handleOutputClear}
            placeholder="FHIR Resource will be displayed here..."
            fileType="json"
            downloadEnabled
            downloadName="hl7-to-fhir-output"
            clearEnabled
            width="100%"
            height="calc(100vh - 197px)"
            id="fhir-resource-editor"
            aria-label="FHIR Resource Editor"
          />
        </Box>
      </Box>
      {/* <Box>

      <ConvertButton
          handleSubmit={callBackend}
          isLoading={isLoading}
          aria-label="Convert Button"
        />
      </Box> */}
    </Container>
  );
};
