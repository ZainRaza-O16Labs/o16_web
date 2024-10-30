import {
  ProjectLogo,
  ProjectsBackground,
  ServiceImage,
} from "../../public/images";

const { strings } = require("@/locales");

const projects = [
  {
    id: 1,
    logo: ProjectLogo,
    background: ProjectsBackground,
    name: strings.cokeStudio,
    description: strings.appDevelopmentDescription,
    link: "/",
  },
  {
    id: 2,
    logo: ServiceImage,
    background: ServiceImage,
    name: strings.cokeStudio,
    description: strings.appDevelopmentDescription,
    link: "/",
  },
  {
    id: 3,
    logo: ProjectLogo,
    background: ProjectsBackground,
    name: strings.cokeStudio,
    description: strings.appDevelopmentDescription,
    link: "/",
  },
  {
    id: 4,
    logo: ServiceImage,
    background: ServiceImage,
    name: strings.cokeStudio,
    description: strings.appDevelopmentDescription,
    link: "/",
  },
];

export { projects };
