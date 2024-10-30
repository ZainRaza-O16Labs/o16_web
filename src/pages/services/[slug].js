import {
  AboutTheServiceSection,
  BuildingTodaySection,
  Button,
  ContactSection,
  HeadingSection,
  Layout,
  OurAdvanceWork,
  Paragraph,
  // ProcessSection,
  ServicesHeroSection,
  SliderSection,
  Testimonial,
  UniqueSellPoint,
  WhyChooseUs,
  WrapperContainer,
} from "@/components";
import FaqSection from "@/components/faqSection";
import { strings } from "@/locales";
import { getMultipleCaseStudiesFromIds } from "@/services/caseStudies";
import { getReviews } from "@/services/reviews";
import { getSingleService } from "@/services/services";
import { wrapper } from "@/store";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// export async function generateMetadata(props, parent) {
//   console.log("props", props);
//   console.log("parent", parent);
//   // read route params
//   // const id = params.id

//   // // fetch data
//   // const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || []

//   return {
//     // title: product.title,
//     // openGraph: {
//     //   images: ['/some-specific-page-image.jpg', ...previousImages],
//     // },
//   };
// }
const ServiceDetail = ({ service, caseStudies, reviews }) => {
  const data = service?.data?.length > 0 ? service?.data[0]?.acf : {};

  const caseStudiesArray = caseStudies?.data;
  const metadata = {
    title: service?.data[0]?.yoast_head_json?.title,
    description: service?.data[0]?.yoast_head_json?.description,
  };
  const jsonString = data?.schema?.replace(/\\r\\n/g, "").replace(/\\/g, "");

  return (
    <Layout
      metadata={metadata}
      additionalJsonLd={jsonString ? JSON.parse(jsonString) : {}}
    >
      <ServicesHeroSection
        subtitle={strings.ourServices}
        title={data?.service_name}
        description={data?.service_detail}
      />
      <WrapperContainer>
        <Image
          src={data?.service_image}
          width={1300}
          height={500}
          alt="Mobile App"
          title="Mobile App"
          className={`2xl:container 2xl:mx-auto w-full h-auto object-contain mb-16`}
        />
      </WrapperContainer>
      <AboutTheServiceSection
        heading={data?.about_heading}
        image={data?.about_image}
        detail={data?.about}
      />
      <UniqueSellPoint
        heading={data?.our_speciality_head}
        description={data?.our_speciality_detail}
        data={data?.specialty_data}
      />
      {data?.show_technologies && (
        <UniqueSellPoint
          heading={data?.technology_title}
          description={data?.technology_detail}
          data={data?.technologies_data}
        />
      )}
      <OurAdvanceWork
        title={data?.case_studies_title}
        description={data?.case_studies_detail}
        caseStudies={caseStudiesArray}
      />
      <WhyChooseUs
        heading={data?.choosing_us}
        description={data?.choosing_us_detail}
        data={data?.choosing_us_data}
      />
      {/* <WrapperContainer className={"my-20"}>
        <Image
          src={TechsWithPhones}
          alt="Technologies with phones"
          className="w-full h-auto object-contain"
        />
      </WrapperContainer> */}
      <ProcessSection
        heading={data?.our_process_title}
        description={data?.our_process_detail}
        items={data?.our_process_data}
        stickPosition={5}
      />
      <BuildingTodaySection
        heading={data?.start_building_head}
        description={data?.start_building_detail}
        buttonText={data?.start_building_button_text}
      />
      <FaqSection faqs={data?.faqs} />
      <SliderSection />
      <Testimonial data={reviews?.data} />
      <ContactSection />
    </Layout>
  );
};

export default ServiceDetail;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const getSingleServiceResponse = await store.dispatch(
      getSingleService.initiate(context.params.slug)
    );

    const caseStudiesIds = getSingleServiceResponse?.data[0]?.acf?.case_studies
      ? getSingleServiceResponse?.data[0]?.acf?.case_studies
          ?.map((value) => value.ID)
          .join(",")
      : "";

    const getMultipleCaseStudiesFromIdsResponse =
      caseStudiesIds !== "" &&
      (await store.dispatch(
        getMultipleCaseStudiesFromIds.initiate(caseStudiesIds)
      ));

    const getReviewsResponse = await store.dispatch(getReviews.initiate());
    return {
      props: {
        reviews: getReviewsResponse,
        service: getSingleServiceResponse,
        caseStudies: getMultipleCaseStudiesFromIdsResponse,
      },
    };
  }
);

const ProcessSection = ({ heading, description, items, stickPosition }) => {
  const ref = useRef();
  const [gsapPin, setGsapPin] = useState(null);
  const sectionRef = useRef(null);
  const triggernRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX:
          "-" +
          (sectionRef.current?.scrollWidth - sectionRef.current.clientWidth),
        ease: "none",
        duration: 10,
        scrollTrigger: {
          trigger: triggernRef.current,
          start: `-${70 + stickPosition} top`,
          end: `${
            sectionRef.current?.scrollWidth -
            sectionRef.current.clientWidth +
            200
          } top`,
          scrub: 2,
          pin: true,
        },
      }
    );
    setGsapPin(pin);
    return () => {
      pin.kill();
    };
  }, [items]);
  useEffect(() => {
    setScrollWidth(
      sectionRef.current.scrollWidth > 0
        ? sectionRef.current.scrollWidth
        : ref.current.scrollWidth
    );
  }, []);
  useEffect(() => {
    const handleScroll = (e) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setScrollPercentage(gsapPin?.scrollTrigger?.progress);
  }, [scrollY]);
  return (
    <div className="mb-16">
      <div className="2xl:h-auto overflow-hidden" ref={triggernRef}>
        <div
          className="bg-c_2B2B2B py-5 md:py-10 h-fit flex flex-col "
          style={{ minHeight: "calc(100vh - 75px)" }}
        >
          <WrapperContainer className={""}>
            <div className="grid grid-cols-1 md:grid-cols-12 justify-between items-center md:gap-5">
              <HeadingSection
                title={heading}
                titleClassName={`text-c_FFFFFF ${
                  heading?.length > 35
                    ? "!text-xl md:!text-3xl lg:!text-3xl xl:!text-4xl xl:!leading-[45px] 2xl:!text-[44px] 2xl:!leading-[50px]"
                    : ""
                }`}
                containderClassName={`col-span-1 md:col-span-6`}
              />
              <Paragraph
                description={description}
                descriptionClassName={`col-span-1 md:col-span-6 mt-2 md:mt-0 text-c_FFFFFF`}
              />
            </div>
          </WrapperContainer>
          <div
            className="w-full h-full flex flex-1 items-center"
            ref={sectionRef}
          >
            <div className="relative flex flex-row pl-4 md:pl-5 lg:pl-16 xl:pl-20 2xl:pl-40 pr-10 mb-5">
              <div className="relative mt-[53px] w-4 h-4 flex-shrink-0 bg-c_087DBD rounded-full z-10"></div>
              <div
                style={{ width: scrollWidth - 150 }}
                className={`absolute top-[60px] w-full h-[2px] bg-c_424242 z-0`}
              ></div>
              {items?.map((value, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="ml-20 relative mt-9 md:mt-5 bg-c_2B2B2B w-11 h-11 md:w-20 md:h-20 aspect-square rounded-full p-1 md:p-4 border border-primary flex justify-center items-center z-10">
                      <Image
                        src={value.image}
                        title={value.title}
                        alt={value.title}
                        width={100}
                        height={100}
                        className="w-[30px] md:w-[70px] !h-auto"
                      />
                    </div>
                    <div className="relative ml-20 flex-shrink-0 mt-12 md:mt-[38px] z-10 flex flex-col items-center">
                      <div className="absolute left-[calc(50%-1px)] w-[2px] h-3/4 bg-c_424242 z-0"></div>
                      <Button
                        title={value.title}
                        className="relative text-c_FFFFFF bg-c_089DE5 px-4 py-1 md:py-2 rounded-full z-20 text-sm lg:text-[16px] xl:text-[16px] xl:leading-[20px] text-nowrap"
                      />
                      <p className="w-[90vw] md:w-96 bg-c_373737 p-4 rounded-xl text-sm xl:leading-[23px] text-c_FFFFFF relative mt-16">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <WrapperContainer className={"2xl:px-5"}>
            <div className="w-full h-[6px] bg-c_373737 my-5 rounded-[3px]">
              <div
                style={{ width: `${scrollPercentage * 100}%` }}
                className={` h-[6px] bg-c_087DBD rounded-[3px]`}
              />
            </div>
          </WrapperContainer>
        </div>
      </div>
    </div>
  );
};
