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
  SmartOnFhir,
} from "../Accelerators";

export enum ToolStatus {
  active,
  inactive,
  maintenance,
}

export interface Tool {
  title: string;
  subTitle: string;
  shortDescription: string;
  description: string;
  url: string;
  path: string;
  image: string;
  icon: ReactElement;
  component: ReactElement;
  status?: ToolStatus;
}

export interface Sample {
  name: string;
  apiName?: string;
  data: string;
}

export const tools: Tool[] = [
  {
    title: "HL7v2 To FHIR",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description:
      "This API offers health IT developers a turnkey solution for effortlessly converting HL7v2 data to FHIR standards, enabling rapid integration and data exchange while reducing development complexity and accelerating time-to-market.",
    path: "/hl7-to-fhir",
    image: "health-intro.png",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <Hl7v2ToFhir />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "FHIR APIs",
    subTitle: "Transform",
    shortDescription: "Hands on experience with FHIR APIs",
    description:
      "Hands on experience with FHIR APIs. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    path: "/fhir-apis",
    image: "health-intro.png",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <Hl7v2ToFhir />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "C-CDA To FHIR",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description:
      "Convert C-CDA data to FHIR. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    path: "/c-cda-to-fhir",
    image: "https://ballerina.io/images/health-sm-banner.png",
    icon: <TransformOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <CcdaToFhir />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "FHIR Validation",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description:
      "Validate the FHIR Resource that complies with the FHIR standards",
    path: "/fhir-validation",
    image: "https://ballerina.io/images/health-sm-banner.png",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <FhirValidation />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "SMART on FHIR",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description: "Try out a standalone end user FHIR application",
    path: "/smart-on-fhir",
    image: "https://ballerina.io/images/health-sm-banner.png",
    icon: <VpnKeyOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <SmartOnFhir />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "FHIR Path",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description:
      "Easily convert, transform and extract healthcare data to meet FHIR standards",
    path: "/fhir-path",
    image: "https://ballerina.io/images/health-sm-banner.png",
    icon: <FilterAltOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <FhirPath />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
  {
    title: "Connect To EMR",
    subTitle: "Transform",
    shortDescription: "Convert HL7 V2 data to FHIR",
    description: "Connect FHIR resource to EMR",
    path: "/connect-to-emr",
    image: "https://ballerina.io/images/health-sm-banner.png",
    icon: <CableOutlinedIcon sx={{ width: 23, height: 23 }} />,
    component: <ConnectToEmr />,
    url: "https://wso2.com/solutions/healthcare/",
    status: ToolStatus.active,
  },
];
