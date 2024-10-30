import {
  technologiesSlider1,
  technologiesSlider2,
} from "@/constants/technologies.constants";
import Image from "next/image";
import Slider from "../slider";
import WrapperContainer from "../wrapperContainer";
import Paragraph from "../paragraph";
import { strings } from "@/locales";
import {
  clientSectionImages,
  clientSectionImagesLine2,
  clientSectionImagesLine3,
} from "@/constants/client_section.constants";

const ClientsSection = ({ isMobile = false }) => {
  const sliderResponsive = {
    mobileOne: {
      breakpoint: {
        max: 375,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobileTwo: {
      breakpoint: {
        max: 464,
        min: 376,
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
        max: 3000,
        min: 1280,
      },
      items: 4,
      partialVisibilityGutter: 0,
    },
  };
  return !isMobile ? (
    <div className={"mb-16 relative"}>
      <Slider
        arrows={false}
        autoPlay={true}
        items={clientSectionImages}
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
        sliderClass={"!gap-2"}
        responsive={sliderResponsive}
        rtl={false}
        centerMode={true}
        shouldResetAutoplay={false}
        autoPlaySpeed={0}
        transitionSpeed={"15.5s"}
        transitionDuration={10000}
        infinite={true}
      />
      {/* <div className="my-2"> */}
      <Slider
        arrows={false}
        autoPlay={true}
        sliderClass={"!gap-2"}
        items={clientSectionImagesLine2}
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
        autoPlaySpeed={0}
        transitionSpeed={"15.5s"}
        transitionDuration={10000}
        infinite={true}
      />
      {/* </div> */}
      <Slider
        arrows={false}
        autoPlay={true}
        items={clientSectionImagesLine3}
        renderItem={(value, index) => {
          return (
            <IconComponent
              key={`tech-1-${index}`}
              value={value}
              index={index}
              sliderNo={3}
            />
          );
        }}
        sliderClass={"!gap-2"}
        responsive={sliderResponsive}
        rtl={false}
        centerMode={true}
        shouldResetAutoplay={false}
        autoPlaySpeed={0}
        transitionSpeed={"15.5s"}
        transitionDuration={10000}
        infinite={true}
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-c_FFFFFF via-transparent to-c_FFFFFF object-cover" /> */}
    </div>
  ) : (
    <></>
  );
};

const IconComponent = ({ value, index, sliderNo }) => {
  return (
    <div
      key={`tech-${sliderNo}-${index}`}
      className={` h-[95px]  	  gap-2  rounded-lg flex  items-center ${
        sliderNo == 2 ? "justify-end" : "justify-start"
      }`}
    >
      <Image
        src={value?.image}
        alt="Adobe Illustrator"
        title="Adobe Illustrator"
        // priority
        // width={35}
        // height={35}
        className={` w-[60px] h-[60px] rounded-xl object-contain shadow-md ${
          sliderNo == 2 ? "order-2" : "order-1"
        }`}
      />
      <Paragraph
        description={value?.title}
        descriptionClassName={`lg:text-[18px] text-[16px] font-[900] ${
          sliderNo == 2 ? "order-1" : "order-2"
        }`}
      />
    </div>
  );
};

export default ClientsSection;
