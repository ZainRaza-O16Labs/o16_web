import {
  technologiesSlider1,
  technologiesSlider2,
} from "@/constants/technologies.constants";
import Image from "next/image";
import Slider from "../slider";
import WrapperContainer from "../wrapperContainer";

const TechnologiesSection = ({ isMobile = false }) => {
  const sliderResponsive = {
    mobileOne: {
      breakpoint: {
        max: 375,
        min: 0,
      },
      items: 4,
      partialVisibilityGutter: 0,
    },
    mobileTwo: {
      breakpoint: {
        max: 464,
        min: 376,
      },
      items: 6,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 8,
      partialVisibilityGutter: 0,
    },
    desktopOne: {
      breakpoint: {
        max: 1279,
        min: 1024,
      },
      items: 10,
      partialVisibilityGutter: 0,
    },
    desktopTwo: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 12,
      partialVisibilityGutter: 0,
    },
  };
  return !isMobile ? (
    <WrapperContainer className={"mb-16 relative"}>
      <Slider
        arrows={false}
        autoPlay={true}
        items={technologiesSlider1}
        renderItem={(value, index) => {
          return (
            <IconComponent
              key={`tech-1-${index}`}
              value={value}
              index={index}
              sliderNo={1}
            />
          );
        }}
        responsive={sliderResponsive}
        rtl={false}
        centerMode={true}
        shouldResetAutoplay={false}
        transitionSpeed={"2s"}
        transitionDuration={2000}
        infinite={true}
      />
      <Slider
        arrows={false}
        autoPlay={true}
        containerClass={"mt-4"}
        items={technologiesSlider2}
        transitionDuration={2000}
        renderItem={(value, index) => {
          return (
            <IconComponent
              key={`tech-2-${index}`}
              value={value}
              index={index}
              sliderNo={2}
            />
          );
        }}
        responsive={sliderResponsive}
        rtl={true}
        centerMode={true}
        shouldResetAutoplay={false}
        transitionSpeed={"2s"}
        infinite={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-c_FFFFFF via-transparent to-c_FFFFFF object-cover" />
    </WrapperContainer>
  ) : (
    <></>
  );
};

const IconComponent = ({ value, index, sliderNo }) => {
  return (
    <div
      key={`tech-${sliderNo}-${index}`}
      className="w-[50px] h-[50px] bg-c_FFFFFF rounded-lg flex justify-center items-center"
    >
      <Image
        src={value}
        alt="Adobe Illustrator"
        title="Adobe Illustrator"
        // priority
        width={35}
        height={35}
        className="w-[35px] h-auto aspect-square object-contain"
      />
    </div>
  );
};

export default TechnologiesSection;
