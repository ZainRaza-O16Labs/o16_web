import {
  ContactServicesSection,
  ContactUsSection,
  HeroSection,
  Layout,
  WrapperContainer,
} from "@/components";
import { strings } from "@/locales";
import { PrivacyPolicyBackground } from "../../../public/images";

const ContactUs = () => {
  const metadata = {
    title: strings.contactMetaTitle,
    description: strings.contactMetaDescription,
  };
  return (
    <Layout metadata={metadata} backgrouondImage={PrivacyPolicyBackground}>
      <HeroSection
        subtitle={strings.contactUs}
        title={strings.itsAlwaysNiceToTalk}
        description={strings.haveANewProjectIdea}
        leftContainerClassName={"w-2/4 md:w-auto xl:col-span-4 2xl:col-span-6"}
        descriptionClassName={"xl:col-start-7"}
      />
      <ContactServicesSection />
      <div id="contact-form" className={"pt-10"}>
        <ContactUsSection />
      </div>
    </Layout>
  );
};

export default ContactUs;
