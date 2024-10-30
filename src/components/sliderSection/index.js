import React from "react";
import { Slider } from "@/components";
import Image from "next/image";
import {
  Tag,
  TopDevelopers,
  TopDevops,
  TopItBusiness,
  TopMobileAppDevelopers,
  TopSEO,
  TopUiUx,
  TopWebDesigners,
} from "../../../public/images";
import { ticket } from "@/constants/ticket.constants";

const SliderSection = () => {
  const sliderResponsive = {
    desktopTwo: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 7,
      partialVisibilityGutter: 0,
    },
    desktopOne: {
      breakpoint: {
        max: 1279,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 0,
    },
    mobileOne: {
      breakpoint: {
        max: 375,
        min: 0,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
    mobileTwo: {
      breakpoint: {
        max: 464,
        min: 376,
      },
      items: 4,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 5,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <div className="w-auto mb-16 2xl:container 2xl:mx-auto flex-grow grid grid-cols-1 justify-end items-end">
      <div className="grid grid-cols-1 gap-4 relative">
        <div className="bg-gradient-to-r from-c_FFFFFF via-transparent to-c_FFFFFF h-full w-[calc(100%+16px)] md:w-[calc(100%)] absolute md:-left-0 -left-4 z-10" />
        <Slider
          items={ticket}
          renderItem={(value, index) => (
            <Image
              key={"slider" + index}
              src={value}
              alt="tag"
              title="tag"
              width={1200}
              height={1200}
              className="w-20 !h-auto lg:!w-[120px] lg:!h-auto flex-shrink-0 aspect-square"
            />
          )}
          responsive={sliderResponsive}
          arrows={false}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={0}
          centerMode={false}
          shouldResetAutoplay={true}
        />
      </div>
    </div>
  );
};

export default SliderSection;
