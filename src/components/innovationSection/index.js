import { strings } from "@/locales";
import { useState } from "react";
import DigitalMarketingCard from "../digitalMarketingCard";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import Slider from "../slider";
import WrapperContainer from "../wrapperContainer";
import HeadingSectionH3 from "../headingSectionH3";

const InnovationDiaries = ({ data, isMobile = false }) => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const sliderResponsive = {
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktopOne: {
      breakpoint: {
        max: 1279,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
    desktopTwo: {
      breakpoint: {
        max: 1700,
        min: 1280,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
    desktopThree: {
      breakpoint: {
        max: 3000,
        min: 1701,
      },
      items: 4,
      partialVisibilityGutter: 0,
    },
  };
  const calculateSliderSliderPercentage = (
    currentSlide,
    totalItems,
    slidesToShow
  ) => {
    setScrollWidth(`${((currentSlide + slidesToShow) / totalItems) * 100}%`);
  };
  return !isMobile ? (
    <WrapperContainer className={"mb-16 hidden md:block"}>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="col-span-1 md:col-span-5">
          <HeadingSectionH3
            title={strings.feedYourselfWithTheLatestInsights}
            titleClassName={`text-c_2B2B2B`}
          />
          {/* <HeadingSection
            title={strings.diaries}
            titleClassName={`text-c_2B2B2B`}
          /> */}
        </div>
        <div className="md:col-start-7 md:col-span-6  mt-5 md:mt-0 text-c_2B2B2B font-normal text-base lg:text-lg xl:leading-[26px] ">
          <Paragraph description={strings.exploreOurKnowledgeBased} />
        </div>
      </div>
      <div className="w-full h-auto mt-10">
        {data && (
          <Slider
            renderItem={(value, index) => (
              <DigitalMarketingCard
                containerClass={"md:mr-5 h-full"}
                key={`innovation-diaries-${index}`}
                data={value}
              />
            )}
            responsive={sliderResponsive}
            arrows={true}
            autoPlay={false}
            centerMode={false}
            items={data}
            rtl={false}
            slidesToSlide={1}
            sliderClass={"!gap-0"}
            draggable={true}
            swipeable={true}
            partialVisible={false}
            afterChange={(prevSlide, state) => {
              calculateSliderSliderPercentage(
                state.currentSlide,
                state.totalItems,
                state.slidesToShow
              );
            }}
          />
        )}
        {/* <div className="w-full h-[6px] bg-c_F3F4F5 mt-5 rounded-[3px]">
          <div
            style={{ width: scrollWidth }}
            className={`h-[6px] bg-c_087DBD rounded-[3px]`}
          />
        </div> */}
        {/* <p className="font-medium text-base text-center mt-5 text-primary">
          {strings.dragToSeeMore}
        </p> */}
      </div>
    </WrapperContainer>
  ) : (
    <></>
  );
};
export default InnovationDiaries;
