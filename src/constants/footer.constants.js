import { strings } from "@/locales";
import { routes } from "./route.constants";

const footerItems = [
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
  {
    name: strings.contactUs,
    route: routes.contactUs,
  },
  {
    name: strings.privacyPolicy,
    route: routes.privacyPolicy,
  },
];

export { footerItems };

const footerServiceItems = [
  {
    name: strings.AppDevelopment,
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
    name: strings.contactUs,
    route: routes.ContactUs,
  },
];

export { footerServiceItems };
