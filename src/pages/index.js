import dynamic from "next/dynamic";

import {
  AboutSection,
  AboutVideo,
  BuildingTodaySection,
  CompaniesSection,
  ContactSection,
  FAQSection,
  HomeBanner,
  InnovationDiariesSection,
  Layout,
  OurServices,
  ProcessSection,
  ProjectsSection,
  TechnologiesSection,
  Testimonial,
  UniqueSellPoint,
} from "@/components/index";

const ClientsSection = dynamic(() => import("@/components/ClientsSection"), {
  ssr: false,
});
const ContactFormDialog = dynamic(
  () => import("@/components/ContactFormDialog"),
  { ssr: false }
);
const ContactUSForm = dynamic(() => import("@/components/ContactUSForm"), {
  ssr: false,
});
const ScreenSlider = dynamic(() => import("@/components/ScreensSlider"), {
  ssr: false,
});
import { cardItems } from "@/constants/cardItem.constants";
import { faqs } from "@/constants/faq.constants";
import { processItems } from "@/constants/process.constants";
import { strings } from "@/locales";
import { getBlogs } from "@/services/blogs";
import { getCaseStudies } from "@/services/caseStudies";
import { getReviews } from "@/services/reviews";
import { wrapper } from "@/store";
import { setReviews } from "@/store/slices/reviews";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

export default function Home({ caseStudies, reviews, blogs }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
    setTimeout(
      () => {
        setIsShow(true);
      },
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
        ? 4000
        : 2000
    );
  }, []);

  const additionalJsonLd = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: "Mobile App Development & Digital Transformation Services",
    description:
      "We provide cutting-edge solutions to elevate your business with custom mobile apps, seamless digital integration, and transformative technology strategies. Partner with us to stay ahead in the digital era.",
    url: "https://www.o16labs.com/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, app, android, iOS",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "500",
    },
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       !hasScrolled &&
  //       window.scrollY > 50 &&
  //       typeof window !== "undefined" &&
  //       window.sessionStorage &&
  //       !window.sessionStorage?.getItem("showModal")
  //     ) {
  //       setHasScrolled(true);
  //       setIsModalOpen(true);
  //       sessionStorage?.setItem("showModal", true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasScrolled]);

  return (
    <>
      <Layout additionalJsonLd={additionalJsonLd}>
        <LazyMotion features={domAnimation}>
        <HomeBanner isMobile={isMobile} setOpen={setIsModalOpen} />
        <AboutVideo video={true} isMobile={isMobile} />
        <AboutSection
          description={strings.asaWebApp}
          title={strings.webAppDevelopmentCompany}
          button={true}
          isMobile={isMobile}
        />
        {isShow && (
          <>
            <OurServices isMobile={isMobile} />
            {!isMobile && <ScreenSlider />}

            {/* <ProjectsSection items={caseStudies?.data} /> */}
            <ProcessSection
              heading={strings.ourProcess}
              description={`${strings.everyBusinessAndAdd} ${strings.saasAndWeb} ${strings.weActAsa}`}
              items={processItems}
              stickPosition={10}
            />

            <BuildingTodaySection
              buttonText={strings.findOutMore}
              description={strings.industriesAreTransforming}
              heading={strings.buildSomething}
              isMobile={isMobile}
            />
            <UniqueSellPoint
              data={cardItems}
              description={strings.withEveryProject}
              heading={strings.whatMakesUsthe}
            />
            <TechnologiesSection isMobile={isMobile} />
            {/* <InnovationDiariesSection isMobile={isMobile} data={blogs?.data} /> */}

            {/* <CompaniesSection isMobile={isMobile} /> */}
            <FAQSection faqs={faqs} />
            <Testimonial data={reviews?.data} />
            <ClientsSection />
          </>
        )}

        {/* <ContactSection isMobile={isMobile} /> */}
        <ContactFormDialog
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title={
            <div className="flex flex-col justify-center items-center gap-2">
              <span>{strings.getExclusiveDiscounts}</span>
              <span className="text-sm text-center font-normal text-c_818181">
                {strings.offeringARangeOfCompetetive}
              </span>
            </div>
          }
          Content={
            <ContactUSForm setOpen={setIsModalOpen} open={isModalOpen} />
          }
          className="!w-[450px] bg-c_424242"
        />
        </LazyMotion>
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // const getCaseStudiesResponse = await store.dispatch(
    //   getCaseStudies.initiate()
    // );
    const getReviewsResponse = await store.dispatch(getReviews.initiate());

    store.dispatch(setReviews(getReviewsResponse?.data || null));
    // const getBlogsResponse = await store.dispatch(getBlogs.initiate());
    return {
      props: {
        // caseStudies: getCaseStudiesResponse,
        reviews: getReviewsResponse,
        // blogs: getBlogsResponse,
      },
    };
  }
);
