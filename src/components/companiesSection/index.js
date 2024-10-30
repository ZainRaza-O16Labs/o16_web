import React from "react";
import Slider from "../slider";
import {
  AcsGala,
  Beebes,
  BetComrade,
  BitCoin,
  Boiler,
  CokeStudio,
  ConnectHear,
  DocuDoc,
  Fanta,
  Hunger,
  ImBaby,
  PeakValley,
  Seizure,
  SenSusport,
  SocialSports,
  Tabibbi,
  Tidy,
  VibeCode,
} from "../../../public/images";
import Image from "next/image";
import WrapperContainer from "../wrapperContainer";

const CompaniesSection = ({ isMobile = false }) => {
  const companies = [
    AcsGala,
    BetComrade,
    Beebes,
    BitCoin,
    Boiler,
    DocuDoc,
    CokeStudio,
    ImBaby,
    ConnectHear,
    PeakValley,
    Fanta,
    Hunger,
    Seizure,
    SocialSports,
    Tidy,
    SenSusport,
    VibeCode,
    Tabibbi,
  ];
  const sliderResponsive = {
    mobileOne: {
      breakpoint: {
        max: 375,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobileTwo: {
      breakpoint: {
        max: 464,
        min: 376,
      },
      items: 3,
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
    desktopOne: {
      breakpoint: {
        max: 1279,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 0,
    },
    desktopTwo: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 5,
      partialVisibilityGutter: 0,
    },
  };
  return !isMobile ? (
    <WrapperContainer className={"mb-16"}>
      <Slider
        items={companies.concat(companies)}
        responsive={sliderResponsive}
        arrows={false}
        autoPlay={true}
        centerMode={true}
        rtl={false}
        shouldResetAutoplay={false}
        transitionSpeed={"2s"}
        transitionDuration={2000}
        infinite={true}
        autoPlaySpeed={0}
        slidesToSlide={1}
        sliderClass={`flex justify-center items-center gap-20`}
        itemClass={"flex justify-center items-center"}
        renderItem={(value, index) => {
          return (
            <div
              key={index}
              className="max-w-[120px] h-[80px] filter grayscale hover:grayscale-0 flex justify-center items-center"
            >
              <Image
                src={value}
                alt="Company Logo"
                title="Company Logo"
                width={200}
                height={200}
                key={index}
                className="w-auto h-full aspect-auto object-contain object-center"
              />
            </div>
          );
        }}
      />
    </WrapperContainer>
  ) : (
    <></>
  );
};

export default CompaniesSection;
