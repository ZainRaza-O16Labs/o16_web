import { strings } from "@/locales";
import React from "react";
import { Slider, WrapperContainer } from "@/components";
import Image from "next/image";
import { Slider1, Slider2, Slider3, Slider4 } from "../../../public/images";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";

const CultureSection = () => {
  const sliderItems = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider1,
    Slider2,
    Slider3,
    Slider4,
  ];
  const sliderResponsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2.5,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <div className="mb-16">
      <WrapperContainer>
        <div className="xl:flex items-center gap-10">
          <HeadingSection
            title={strings.theLifeTimesThatMakesShapesUs}
            containderClassName={`flex-1`}
            titleClassName={`text-c_2B2B2B`}
          />
          <Paragraph
            description={strings.weAreaPackOfTechGeeks}
            descriptionClassName={`flex-1 xl:m-0 mt-5`}
          />
        </div>
      </WrapperContainer>
      <div className="pt-10 2xl:container 2xl:mx-auto">
        <Slider
          items={sliderItems}
          renderItem={(value, index) => (
            <div key={index}>
              <Image
                src={value}
                alt="slider"
                title="slider"
                width={617}
                height={412}
                unoptimized
              />
            </div>
          )}
          sliderClass={`flex !items-end`}
          responsive={sliderResponsive}
          autoPlay={true}
          arrows={false}
          infinite={true}
          autoPlaySpeed={3000}
          centerMode={false}
          shouldResetAutoplay={true}
        />
      </div>
    </div>
  );
};

export default CultureSection;
