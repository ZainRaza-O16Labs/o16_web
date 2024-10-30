import { Divider, Slider, SliderSection, WrapperContainer } from "@/components";
import { strings } from "@/locales";
import Image from "next/image";

import Paragraph from "../paragraph";
import { ticket } from "@/constants/ticket.constants";
import MagneticButton from "../MagneticButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HomeBannerIcons } from "@/constants/home.banner.constants";

const HomeBanner = ({ isMobile = false, setOpen = false }) => {
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
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobileTwo: {
      breakpoint: {
        max: 464,
        min: 376,
      },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 6,
      partialVisibilityGutter: 0,
    },
  };
  const images = HomeBannerIcons;
  const animateRef = useRef();
  const imageRef = useRef(null);
  const popupRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    tl.fromTo(
      popupRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      },
      0
    ).to(
      popupRef.current,
      {
        opacity: 0,
        y: 0,
        duration: 2,
        ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        onComplete: () => {
          setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, 1000); // Delay before changing image
        },
      },
      "+=1" // Adjust time based on the duration of the popup animation
    );

    // Replicate CSS animation with GSAP
    tl.fromTo(
      imageRef.current,
      {
        opacity: 1,
        scale: 0.9,
        z: -1400,
        y: -20,
      },
      {
        opacity: 1,
        scale: 1,
        z: 0,
        y: 0,
        duration: 0.5,
        ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        onComplete: () => {
          setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, 1000); // Delay before changing image
        },
      },
      0
    ).to(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        z: -1400,
        y: -800,
        duration: 2,
        ease: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        onComplete: () => {
          setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, 1000); // Delay before changing image
        },
      },
      "+=1.6" // Delay to match animation duration
    );

    return () => tl.kill(); // Clean up timeline on component unmount
  }, [currentImage]);

  return (
    <WrapperContainer className="mb-16">
      <div className="pt-10 md:pt-16 pb-7 flex items-end   md:pb-12">
        <div className="flex items-end justify-between  w-full">
          {" "}
          <h1 className="m-0 flex flex-col md:items-start items-center  w-full  sm:pb-0 pb-2">
            <span className="text-c_2B2B2B font-extrabold text-[20px]  w-full leading-[45px] md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] xl:text-7xl xl:leading-[100px] 2xl:text-7xl 2xl:leading-[110px] flex justify-start items-center  gap-3 md:gap-10 md:flex-row flex-col ">
              <span className="md:order-1 order-2 md:mt-0  mt-2">
                {strings.weProvide}
              </span>
              {/* <video
                className="w-auto h-[50px] md:h-[54px] lg:h-[90px] xl:h-[120px] 2xl:h-[120px] rounded-[80px]"
                autoPlay
                loop
                muted
                preload="none"
              >
                <source src={"/small.mp4"} type="video/mp4" />
                <track
                  src={"/captions.vtt"}
                  kind="captions"
                  srclang="en"
                  label="english_captions"
                ></track>
                Your browser does not support the video tag
              </video> */}
              <div className="md:order-2 self-center order-1 md:-mt-8 mt-0 2xl:h-[120px] rounded-[80px]  flex justify-center items-center lg:w-[100px] lg:h-[100px]   md:w-[80px] md:h-[80px] w-[80px] h-[80px]">
                <div
                  className="h-[100px] rounded-lg  w-[100px] relative"
                  ref={animateRef}
                >
                  <div
                    className="h-[50px] w-[60%] bg-[#ecf0f1]/70 rounded-t-2xl m-auto absolute top-[2px] left-[20%]"
                    ref={popupRef}
                  ></div>
                  <div className="h-[50px] w-[80%] bg-[#dfe6e9]  rounded-2xl m-auto absolute top-[10px] left-[10%]"></div>
                  <Image
                    ref={imageRef}
                    src={images[currentImage]}
                    alt="Slideshow"
                    className="lg:w-[100px] lg:h-[100px]  md:w-[80px] md:h-[80px] w-[80px] h-[80px] object-center rounded-2xl object-cover top-[22px] absolute shadow-lg"
                  />
                </div>
              </div>
            </span>
            <span className="text-c_2B2B2B font-extrabold text-[20px] leading-[45px] md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[90px] xl:text-7xl xl:leading-[110px] 2xl:text-7xl 2xl:leading-[110px]">
              {strings.solutionsAsPerYour}
            </span>

            <span className=" flex  md:justify-between w-full justify-center">
              <span className="text-c_2B2B2B font-extrabold  text-[20px] leading-[45px] md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[90px] xl:text-7xl xl:leading-[110px] 2xl:text-7xl 2xl:leading-[110px] ">
                {strings.bussinessNeed}
              </span>
              <span>
                <MagneticButton onClick={() => setOpen(true)} />
              </span>
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  lg:justify-between gap-10 lg:gap-16">
        <div className="lg:max-w-[485px] w-full lg:w-fit flex-shrink-0">
          <Paragraph
            description={strings.bannerDescriptionPartOne}
            descriptionClassName={`text-c_2B2B2B border-l-[5px] md:max-w-[385px] lg:max-w-[485px] border-c_087DBD pl-[6px] md:pl-[10px] !leading-0`}
          />
          <div className="mt-7 md:mt-12 flex flex-col md:flex-row gap-1 md:gap-5 md:w-full md:justify-between items-center">
            <div className="lg:w-[84px]">
              <div className="flex justify-center md:justify-start items-center">
                <Paragraph
                  description={
                    <>
                      {strings.yearsOfExperienceCount}
                      <span className="bg-gradient-to-tl ml-1 from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-bold text-base md:text-lg">
                        {strings.plus}
                      </span>
                    </>
                  }
                  descriptionClassName={`text-c_2B2B2B !font-bold !text-base md:!text-lg`}
                />
              </div>
              <Paragraph
                description={strings.yearsOfExperience}
                descriptionClassName={`text-c_2B2B2B`}
              />
            </div>
            <Divider />
            <div className="lg:w-[84px]">
              <div className="flex justify-center md:justify-start items-center">
                <Paragraph
                  description={
                    <>
                      {strings.completedProjectsCount}
                      <span className="bg-gradient-to-tl ml-1 from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-bold text-base md:text-lg">
                        {strings.plus}
                      </span>
                    </>
                  }
                  descriptionClassName={`text-c_2B2B2B !font-bold !text-base md:!text-lg`}
                />
              </div>
              <Paragraph
                description={strings.completedProjects}
                descriptionClassName={`text-c_2B2B2B`}
              />
            </div>
            <Divider />
            <div className="lg:w-[84px]">
              <div className="flex justify-center md:justify-start items-center">
                <Paragraph
                  description={
                    <>
                      {strings.trustedCompaniesCount}
                      <span className="bg-gradient-to-tl ml-1 from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-bold text-base md:text-lg">
                        {strings.plus}
                      </span>
                    </>
                  }
                  descriptionClassName={`text-c_2B2B2B !font-bold !text-base md:!text-lg`}
                />
              </div>
              <Paragraph
                description={strings.trustedCompanies}
                descriptionClassName={`text-c_2B2B2B`}
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[680px] flex-grow grid grid-cols-1 justify-end items-end">
          {!isMobile && (
            <div className="md:grid grid-cols-1 gap-4 relative">
              <div className="bg-gradient-to-r from-c_FFFFFF via-transparent to-c_FFFFFF h-full w-[calc(100%+32px)] md:w-[calc(100%+8px)] absolute md:-left-1 -left-4 z-10" />
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
                    className="!w-auto !h-auto md:!w-20 md:!h-auto lg:!w-[100px] lg:!h-auto flex-shrink-0 aspect-square"
                  />
                )}
                responsive={sliderResponsive}
                arrows={false}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={0}
                centerMode={false}
                shouldResetAutoplay={true}
                sliderClass={"md:gap-5"}
                itemClass={"!w-28 md:!w-20 !h-auto lg:!w-[100px]"}
              />
            </div>
          )}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default HomeBanner;
