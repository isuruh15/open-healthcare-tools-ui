export interface ITool {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export interface IToolGroup {
    title: string;
    tools: ITool[];
  }
  
  export const toolGroups: IToolGroup[] = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tools: [
        {
          title: "HL7V2 to FHIR",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis repellendus nam quasi inventore tempora expedita atque reiciendis adipisci quis, nulla voluptatum assumenda exercitationem doloribus commodi ipsam, eveniet autem optio?",
          image: "tool.jpg",
          link: "https://840608f3-c4e3-4886-8925-4b06c8eab113.e1-us-east-azure.choreoapps.dev",
        },
        {
          title: "C-CDA to FHIR",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis repellendus nam quasi inventore tempora expedita atque reiciendis adipisci quis, nulla voluptatum assumenda exercitationem doloribus commodi ipsam, eveniet autem optio?",
          image: "tool.jpg",
          link: "https://840608f3-c4e3-4886-8925-4b06c8eab113.e1-us-east-azure.choreoapps.dev",
        },
        {
          title: "X12 to FHIR",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis repellendus nam quasi inventore tempora expedita atque reiciendis adipisci quis, nulla voluptatum assumenda exercitationem doloribus commodi ipsam, eveniet autem optio?",
          image: "tool.jpg",
          link: "https://840608f3-c4e3-4886-8925-4b06c8eab113.e1-us-east-azure.choreoapps.dev",
        },
      ],
    }
  ];