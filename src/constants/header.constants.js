import { strings } from "@/locales";
import { routes } from "./route.constants";

const headerItems = [
  {
    name: strings.home,
    route: routes.home,
  },
  {
    name: strings.aboutUs,
    route: routes.about,
  },
  {
    name: strings.services,
    route: routes.services,
  },
  {
    name: strings.caseStudy,
    route: routes.caseStudies,
  },
  {
    name: strings.blog,
    route: routes.blog,
  },
];

export { headerItems };
