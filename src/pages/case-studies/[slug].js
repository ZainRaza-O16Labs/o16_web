import {
  AboutVideo,
  Brief,
  BuildingTodaySection,
  CaseStudiesDetailHeroSection,
  CaseStudiesImageOne,
  CaseStudiesImagetwo,
  ChallangesSolutions,
  ContactSection,
  DesignElements,
  DottwarPlateform,
  FAQSection,
  Layout,
  SliderSection,
  Testimonial,
} from "@/components";
import { faqs } from "@/constants/faq.constants";
import { strings } from "@/locales";
import { getSingleCaseStudy } from "@/services/caseStudies";
import { getReviews } from "@/services/reviews";
import { wrapper } from "@/store";

const CaseStudyDetail = ({ caseStudy, reviews }) => {
  const data = caseStudy?.data[0].acf;
  const metadata = {
    title: caseStudy?.data[0]?.yoast_head_json?.title,
    description: caseStudy?.data[0]?.yoast_head_json?.description,
  };
  return (
    <Layout metadata={metadata}>
      <CaseStudiesDetailHeroSection
        projectBackground={data?.project_background_image}
        projectLogo={data?.project_logo}
        projectInfo={data?.project_info}
        projectName={data?.project_name}
        technologyLogos={data?.technology_logos}
        bannerLeftImage={data?.banner_first_image}
        bannerRightImage={data?.banner_second_image}
        link={data?.marvel_link}
      />
      <Brief
        description={data?.the_brief}
        typeOfWork={data?.type_of_work}
        industry={data?.industry}
        year={data?.year}
      />
      <ChallangesSolutions
        challenges={data?.challenges}
        solutions={data?.solutions}
      />
      <CaseStudiesImageOne
        imageOne={data?.project_image_1}
        imageTwo={data?.project_image_2}
        imageThree={data?.project_image_3}
      />
      <AboutVideo video={false} image={data?.project_banner} />
      {/* <DottwarPlateform
        backgroundImage={data?.background_image}
        title={data?.project_name}
        detail={data?.project_detail}
        image={data?.project_image}
        link={data?.marvel_link}
      /> */}
      {/* <CaseStudiesImagetwo
        imageOne={data?.project_detail_image_1}
        imageTwo={data?.project_detail_image_2}
      /> */}
      <DesignElements
        title={data?.element}
        description={data?.element_detail}
        imageOne={data?.project_detail_image_3}
        imageTwo={data?.project_detail_image_4}
      />
      <BuildingTodaySection
        buttonText={strings.findOutMore}
        description={strings.industriesAreTransforming}
        heading={strings.buildSomething}
      />
      <FAQSection faqs={faqs} />
      <SliderSection />
      <Testimonial data={reviews?.data} />
      <ContactSection />
    </Layout>
  );
};

export default CaseStudyDetail;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const getSingleCaseStudyResponse = await store.dispatch(
      getSingleCaseStudy.initiate(context.params.slug)
    );
    const getReviewsResponse = await store.dispatch(getReviews.initiate());
    return {
      props: {
        caseStudy: getSingleCaseStudyResponse,
        reviews: getReviewsResponse,
      },
    };
  }
);
