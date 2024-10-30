import {
  AgileMethodologies,
  AiIcon,
  BespokeSolutions,
  ClientCentricCollaboration,
  EndToEndExpertise,
  InnovativeVisionaries,
  ProvenTrackRecord,
} from "../../public/images";

const { strings } = require("@/locales");

const serviceCardItems = [
  {
    image: EndToEndExpertise,
    title: strings.AppDevelopment,
    description: strings.fromConceptToLaunch,
    slug: "mobile-app-development",
  },
  {
    image: InnovativeVisionaries,
    slug: "custom-web-development",
    title: strings.webDevelopments,
    description:
      strings.ElevateYourOnlinePresenceWithOurWebDevelopmentServicesWeDesignAndDevelop,
  },
  {
    image: AgileMethodologies,
    slug: "branding-services",
    title: strings.BrandDevelopment,
    description: strings.defineYourIdentityAndStandOutFromTheCrowd,
  },
  {
    image: BespokeSolutions,
    slug: "startup-consulting-services",
    title: strings.StartupConsulting,
    description: strings.launchingAStartupIsNoEasyFeat,
  },
  {
    image: ClientCentricCollaboration,
    slug: "data-science-services",
    title: strings.DataScience,
    description: strings.harnessThePowerOfDataToDriveInformed,
  },
  {
    image: ProvenTrackRecord,
    slug: "devops-services",
    title: strings.devopsSolutions,
    description: strings.streamlineYourDevelopmentAndOperations,
  },
  {
    image: AiIcon,
    slug: "ai-development-integration",
    title: strings.aiDevAndIntegration,
    description: strings.ourAIDevAndIntegrationServicesAre,
  },
];

export { serviceCardItems };
