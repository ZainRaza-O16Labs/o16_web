import {
  AboutSection,
  AboutVideo,
  ContactSection,
  Counter,
  CultureSection,
  HeroSection,
  Layout,
  Testimonial,
} from "@/components";
const HorizontalSliderSection = dynamic(
  () => import("@/components/horizontalSliderSection"),
  { ssr: false }
);
const SliderSection = dynamic(() => import("@/components/sliderSection"), {
  ssr: false,
});
import { successItems } from "@/constants/successSlider.constants";
import { strings } from "@/locales";
import { getReviews } from "@/services/reviews";
import { wrapper } from "@/store";
import dynamic from "next/dynamic";

const page = ({ reviews }) => {
  const metadata = {
    title: strings.aboutMetaTitle,
    description: strings.aboutMetaDescription,
  };
  return (
    <Layout metadata={metadata}>
      <HeroSection
        subtitle={strings.aboutUs}
        title={strings.buildingAppsForGenerations}
        description={strings.weAreInTheMobileAppDevelopment}
      />
      <AboutSection
        title={strings.youllLoveToKnowUsUpClose}
        description={strings.likeOthersWeWill}
      />
      <Counter />
      <HorizontalSliderSection items={successItems} />
      <AboutVideo video={true} />
      <CultureSection />
      <SliderSection />
      <Testimonial data={reviews?.data} />
      <ContactSection />
    </Layout>
  );
};

export default page;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const getReviewsResponse = await store.dispatch(getReviews.initiate());
    return {
      props: {
        reviews: getReviewsResponse,
      },
    };
  }
);
