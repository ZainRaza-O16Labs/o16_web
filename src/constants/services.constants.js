import { strings } from "@/locales";
import {
  DataScience,
  DevOps,
  Ecommerece,
  ProductDesign,
  ServiceImage,
  WebDevelopment,
  AiImage,
} from "../../public/images";

const services = [
  {
    id: 1,
    name: "App Development",
    image: ServiceImage,
    slug: "mobile-app-development",
  },
  {
    id: 3,
    name: "Branding",
    image: ProductDesign,
    slug: "branding-services",
  },
  {
    id: 6,
    name: "Data Science",
    image: DataScience,
    slug: "data-science-services",
  },
  // {
  //   id: 5,
  //   name: "E-Commerce",
  //   slug: "e-commerce",
  // },
  {
    id: 7,
    name: "Infrastructure and DevOps",
    image: DevOps,
    slug: "devops-services",
  },
  {
    id: 4,
    name: "Web Development",
    image: WebDevelopment,
    slug: "custom-web-development",
  },
  {
    id: 8,
    name: "Start-Up Consulting",
    image: Ecommerece,
    slug: "startup-consulting-services",
  },
  {
    id: 9,
    name: strings.aiDevAndIntegration,
    image: AiImage,
    slug: "ai-development-integration",
  },
];

const servicesItems = [
  {
    id: 0,
    route: "/services/mobile-app-development",
    title: strings.appDevelopment,
    image: ServiceImage,
    description: strings.ourAppDevelopmentService,
  },
  {
    id: 1,
    route: "/services/custom-web-development",
    title: strings?.webDevelopment,
    image: WebDevelopment,
    description: strings.elevateYourOnlinePresence,
  },
  {
    id: 2,
    route: "/services/branding-services",
    title: strings?.brandDevelopment,
    image: ProductDesign,
    description: strings.elevateYourBrandIdentity?.join(" "),
  },
  {
    id: 3,
    route: "/services/startup-consulting-services",
    title: strings.startupConsulting,
    image: Ecommerece,
    description: strings.launchingAStartup?.join(" "),
  },
  {
    id: 4,
    route: "/services/data-science-services",
    image: DataScience,
    description: strings.harnessThePowerOfData?.join(" "),
    title: strings.dataScience,
  },
  {
    id: 5,
    route: "/services/devops-services",
    title: strings.devOpsSolutions,
    image: DevOps,
    description: strings.streamlineYourOperations?.join(" "),
  },
  {
    id: 6,
    route: "/services/ai-development-integration",
    title: strings.AIDevAndIntegration,
    image: AiImage,
    description: strings.ourAIDevAndIntegrationServicesAre,
  },
];

export { services, servicesItems };
