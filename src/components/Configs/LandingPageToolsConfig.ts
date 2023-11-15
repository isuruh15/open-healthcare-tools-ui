export enum ToolStatus {
  active,
  inactive,
  maintenance,
}

export interface ITool {
  title: string;
  description: string;
  image: string;
  link: string;
  status: ToolStatus;
}

export interface IToolGroup {
  title: string;
  description: string;
  tools: ITool[];
}

export const toolGroups: IToolGroup[] = [
  {
    title: "Data Transformation",
    description: "Prebuilt data transformation among different message formats",
    tools: [
      {
        title: "HL7v2 to FHIR",
        description:
          "This API offers health IT developers a turnkey solution for effortlessly converting HL7v2 data to FHIR standards, enabling rapid integration and data exchange while reducing development complexity and accelerating time-to-market.",
        image: "tools-logo/with-background/hl7v2.png",
        link: "/hl7v2-to-fhir",
        status: ToolStatus.active,
      },
      {
        title: "C-CDA to FHIR",
        description:
          "This API provides health IT developers with a powerful tool to seamlessly convert C-CDA documents to FHIR, facilitating the transition of clinical data from older systems to modern standards.",
        image: "tools-logo/with-background/c-cda.png",
        link: "/c-cda-to-fhir",
        status: ToolStatus.maintenance,
      },
      {
        title: "X12 to FHIR",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis repellendus nam quasi inventore tempora expedita atque reiciendis adipisci quis.",
        image: "",
        link: "/x12-to-fhir",
        status: ToolStatus.inactive,
      },
    ],
  },
  {
    title: "FHIR Integration",
    description:
      "Connect to any EMR like EPIC, Cerner, expose your own FHIR server, host your own terminology server - we have the right set of tools",
    tools: [
      {
        title: "Connect to EMR",
        description:
          "We offer seamless integration with EMR/EHR systems featuring standard FHIR APIs and OAuth2 authentication support, guaranteeing secure and efficient data exchange.",
        image: "tools-logo/with-background/emr.png",
        link: "/connect-to-emr",
        status: ToolStatus.maintenance,
      },
      {
        title: "FHIR API",
        description:
          "We have a number of pre-built Ballerina services that are ready to deploy in Choreo as FHIR APIs. All you have to do is configure a relevant backend(API, datasource, FHIR repository…) and deploy.",
        image: "tools-logo/with-background/fhir-api.png",
        link: "/fhir-apis",
        status: ToolStatus.maintenance,
      },
      {
        title: "SMART on FHIR",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis repellendus nam quasi inventore tempora expedita atque reiciendis adipisci quis.",
        image: "",
        link: "/smart-on-fhir",
        status: ToolStatus.inactive,
      },
      {
        title: "Terminology Server",
        description:
          "This tool includes support for the provision of a terminology service - that is, a service that lets healthcare applications make use of codes and value sets without having to become experts in the fine details of the code system, value set.",
        image: "tools-logo/with-background/terminology-service.png",
        link: "/terminology-service",
        status: ToolStatus.maintenance,
      },
    ],
  },
  {
    title: "Other Tools",
    description:
      "Our utility tools empower you to create and deploy robust healthcare software solutions faster and more efficiently, accelerating innovation in the industry",
    tools: [
      {
        title: "FHIR Path",
        description:
          "Our FHIRPath Evaluation API is the key to seamless FHIR resource querying and data manipulation for healthcare applications. This API enables efficient evaluation of FHIRPath expressions.",
        image: "https://ballerina.io/images/health-sm-banner.png",
        link: "/fhir-path",
        status: ToolStatus.maintenance,
      },
      {
        title: "FHIR Validator",
        description:
          "This tool provides the capability to validate the FHIR resource against standard specification. The interface accepts the FHIR resource and returns validation errors if any.",
        image: "tools-logo/with-background/validator.png",
        link: "/fhir-validation",
        status: ToolStatus.maintenance,
      },
    ],
  },
];
