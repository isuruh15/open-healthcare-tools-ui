import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { ReactElement } from "react";
import {
  CcdaToFhir,
  ConnectToEmr,
  FhirPath,
  FhirValidation,
  Hl7v2ToFhir,
  SmartOnFhir
} from "../Accelerators";
import { CcdaData, Hl7Data } from "../Accelerators/Samples";

export interface Tool {
  label: string;
  description: string;
  url: string;
  path: string;
  icon: ReactElement;
  component: ReactElement;
  sampleData?: Sample[];
  header:{
    title: string;
    shortDescription: string;
    url: string;
  };
  mainBlade:{
    title: string;
    description: string;
    image: string;
    link: string;
    background: string;
  };
}

export interface Sample {
  name: string;
  apiName?: string;
  data: string;
}

export const tools: Tool[] = [
  // {
  //   label: "FHIR APIs",
  //   description: "Try out sample FHIR APIs",
  //   url: "https://wso2.com/solutions/healthcare/",
  //   path: "/",
  //   icon: <LocalFireDepartmentOutlinedIcon sx={{ width: 23, height: 23 }} />,
  //   component: <FhirApis />,
  //   sampleData: FhirData,
  // },
  {
    label: "FHIR APIs",
    description: "Convert HL7 V2 data to FHIR. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <Hl7v2ToFhir />,
    sampleData: Hl7Data,
    header:{
      title: "FHIR APIs",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "FHIR APIs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "health-intro.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "HL7V2 To FHIR",
    description: "Convert HL7 V2 data to FHIR. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/hl7-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <Hl7v2ToFhir />,
    sampleData: Hl7Data,
    header:{
      title: "HL7V2 To FHIR",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "HL7V2 To FHIR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "health-intro.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "C-CDA To FHIR",
    description: "Convert C-CDA data to FHIR. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/c-cda-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <CcdaToFhir />,
    sampleData: CcdaData,
    header:{
      title: "C-CDA To FHIR",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "C-CDA To FHIR",
      description: "Convert HL7 V2 data to FHIR",
      image: "https://ballerina.io/images/health-sm-banner.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "FHIR Validation",
    description:
      "Validate the FHIR Resource that complies with the FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-validation",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <FhirValidation />,
    header:{
      title: "FHIR Validation",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "FHIR Validation",
      description: "Convert HL7 V2 data to FHIR",
      image: "https://ballerina.io/images/health-sm-banner.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "SMART on FHIR",
    description: "Try out a standalone end user FHIR application",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/smart-on-fhir",
    icon: <VpnKeyOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <SmartOnFhir />,
    header:{
      title: "SMART on FHIR",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "SMART on FHIR",
      description: "Convert HL7 V2 data to FHIR",
      image: "https://ballerina.io/images/health-sm-banner.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "FHIR Path",
    description: "Easily convert, transform and extract healthcare data to meet FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-path",
    icon: <FilterAltOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <FhirPath />,
    header:{
      title: "FHIR Path",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "FHIR Path",
      description: "Convert HL7 V2 data to FHIR",
      image: "https://ballerina.io/images/health-sm-banner.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
  {
    label: "Connect To EMR",
    description: "Connect FHIR resource to EMR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/connect-to-emr",
    icon: <CableOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <ConnectToEmr />,
    header:{
      title: "Connect To EMR",
      shortDescription: "Convert HL7 V2 data to FHIR",
      url: "https://wso2.com/solutions/healthcare/"
    },
    mainBlade:{
      title: "Connect To EMR",
      description: "Convert HL7 V2 data to FHIR",
      image: "https://ballerina.io/images/health-sm-banner.png",
      link: "https://wso2.com/solutions/healthcare/",
      background: "#00255C"
    }
  },
];
