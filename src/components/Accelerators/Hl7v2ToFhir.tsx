import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Container } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CodeEditor, ResponseAlert } from "../Common";
import BasicTabs from "../Common/BasicTabs";
import LoginOverlay from "../Common/LoginOverlay";
import { BFF_BASE_URL, HL7V2_TO_FHIR_URL } from "../Configs/Constants";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { SelectedSampleContext } from "../Contexts/SelectedSampleContext";
import ThrottledOutError from "../Errors/ThrottledOutError";

interface State {
  input: string;
  output: string;
  errorMessage: string;
  isError: boolean;
  isLoading: boolean;
  alertOpen: boolean;
  outputType: string;
  statusCode: string;
}

export const Hl7v2ToFhir = () => {
  const [state, setState] = useState<State>({
    input: "",
    output: "",
    errorMessage: "",
    isError: false,
    isLoading: false,
    alertOpen: false,
    outputType: "json",
    statusCode: "",
  });

  const [screenWidth, setScreenWidth] = React.useState<number>(
    window.innerWidth
  );

  const [isInterectable, setIsInterectable] = React.useState<boolean>(true);
  const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    isAuthenticated()
      .then((response) => {
        if (response === true) {
          setIsInterectable(true);
        } else {
          setIsInterectable(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAuthenticated]);

  const handleResize = (): void => setScreenWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    input,
    output,
    errorMessage,
    isError,
    isLoading,
    alertOpen,
    outputType,
    statusCode,
  } = state;

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
    // validateInput();
  }, [loadSample, selectedLabel, input]);

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

  const handleInputChange = useCallback((value: string) => {
    setState((prevState) => ({
      ...prevState,
      input: value,
    }));
  }, []);

  const handleInputClear = () => {
    setState((prevState) => ({
      ...prevState,
      input: "",
    }));
  };

  const validateInput = () => {
    if (state.input !== "") {
      callBackend();
    }
  };

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
        setState((prevState) => ({
          ...prevState,
          statusCode: error.response.status,
        }));
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

  const inputEditor = (
    <CodeEditor
      title="HL7 Message"
      value={input}
      readOnly={!isInterectable}
      onChange={handleInputChange}
      darkMode={darkMode}
      onClear={handleInputClear}
      onExecute={validateInput}
      placeholder="Paste or edit HL7 message here..."
      fileType="jsx"
      uploadEnabled
      readFile={readFile}
      clearEnabled
      width="100%"
      height="calc(100vh - 197px)"
      id="hl7-resource-editor"
      aria-label="HL7 Resource Editor"
      isDisabled={!isInterectable}
    />
  );

  const outputEditor = (
    <CodeEditor
      title="FHIR Resource"
      value={output}
      readOnly
      darkMode={darkMode}
      onClear={handleOutputClear}
      placeholder={
        isLoading ? "Loading..." : "FHIR Resource will be displayed here..."
      }
      fileType={outputType}
      downloadEnabled
      downloadName="hl7-to-fhir-output"
      clearEnabled
      width="100%"
      height="calc(100vh - 197px)"
      id="fhir-resource-editor"
      aria-label="FHIR Resource Editor"
      isDisabled={!isInterectable}
      isLoading={isLoading}
    />
  );

  return (
    <Container
      id="hl7v2-to-fhir-container"
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "column", height: 1, mt: 0 }}
    >
      {isError && statusCode != "429" && (
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
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
        marginTop={5}
      >
        {screenWidth < 900 && (
          <>
            <BasicTabs
              inputEditor={inputEditor}
              outputEditor={outputEditor}
              isInterectable={isInterectable}
              statusCode={statusCode}
            ></BasicTabs>
          </>
        )}
        {screenWidth >= 900 && (
          <>
            {!isInterectable && <LoginOverlay />}
            <Box
              sx={{
                pr: 1,
                pb: 1,
                width: "50%",
              }}
              id="hl7-resource-box"
              aria-label="HL7 Resource Box"
            >
              {inputEditor}
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
              {statusCode == "429" ? <ThrottledOutError /> : outputEditor}
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};
