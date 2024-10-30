import {
  Layout,
  ServicesHeroSection,
  TechnologiesSection,
  UniqueSellPoint,
} from "@/components";
import { serviceCardItems } from "@/constants/serviceCardItem.constants";
import { strings } from "@/locales";
import { ServiceBackground } from "../../../public/images";

const Services = () => {
  const metadata = {
    title: strings.serviceMetaTitle,
    description: strings.serviceMetaDescription,
  };
  return (
    <Layout metadata={metadata} backgrouondImage={ServiceBackground}>
      <ServicesHeroSection
        subtitle={strings.ourServices}
        title={strings.EndToEndDigitalSolutions}
        description={strings.fromEstablishedeEnterprises}
      />
      <UniqueSellPoint
        data={serviceCardItems}
        description={strings.asALeadingDigitalTransformation}
        heading={strings.ourDigitalFirstServices}
      />
      <TechnologiesSection />
    </Layout>
  );
};

export default Services;
