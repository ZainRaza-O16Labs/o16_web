import { strings } from "@/locales";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "../button";
import WrapperContainer from "../wrapperContainer";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import HeadingSectionH3 from "../headingSectionH3";

const ProcessSection = ({ heading, description, items, stickPosition }) => {
  const ref = useRef();
  const [gsapPin, setGsapPin] = useState(null);
  const sectionRef = useRef(null);
  const triggernRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [mobileScrollPercentage, setMobileScrollPercentage] = useState(0);

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
          (sectionRef.current?.scrollWidth -
            sectionRef.current.clientWidth +
            100),
        ease: "none",
        duration: 10,
        scrollTrigger: {
          trigger: triggernRef.current,
          start: `-${70 + stickPosition} top`,
          end: "1000 top",
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
  // useEffect(() => {
  //   // setScrollWidth(
  //   //   sectionRef.current.scrollWidth > 0
  //   //     ? sectionRef.current.scrollWidth
  //   //     : ref.current.scrollWidth
  //   // );
  //   ref?.current?.addEventListener("scroll", () => {
  //     const per =
  //       (ref?.current?.scrollLeft + ref?.current.clientWidth) /
  //       ref?.current?.scrollWidth;
  //     setMobileScrollPercentage(per);
  //   });
  // }, []);
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
      <div className="block 2xl:h-auto overflow-hidden" ref={triggernRef}>
        <div
          className="bg-c_2B2B2B py-5 md:py-10 h-fit flex flex-col "
          style={{ minHeight: "calc(100vh - 75px)" }}
        >
          <WrapperContainer className={""}>
            <div className="grid items-center grid-cols-1 md:grid-cols-12 justify-between md:gap-5">
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
                dangerouslySetInnerHTML={{ __html: description }}
                descriptionClassName={`col-span-1 md:col-span-6 mt-2 md:mt-0 text-c_FFFFFF`}
              />
            </div>
          </WrapperContainer>
          <div
            className="w-full h-full flex flex-1 items-center"
            ref={sectionRef}
          >
            <div className="relative flex flex-row pl-4 md:pl-5 lg:pl-16 xl:pl-20 2xl:pl-40 pr-10 mb-5">
              <div className="relative mt-12 w-4 h-4 flex-shrink-0 bg-c_087DBD rounded-full z-10"></div>
              {/* <div
                style={{ left: scrollWidth - 28 }}
                className="absolute mt-10 w-4 h-4 flex-shrink-0 bg-c_087DBD rounded-full z-10 mr-2"
              ></div> */}
              <div
                style={{ width: scrollWidth - 150 }}
                className={`absolute top-14 w-full h-[2px] bg-c_424242 z-0`}
              ></div>
              {items?.map((value, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="ml-20 relative mt-11 md:mt-5 bg-c_2B2B2B w-11 h-11 md:w-20 md:h-20 aspect-square rounded-full p-1 md:p-4 border border-primary flex justify-center items-center z-10">
                      <Image
                        src={value.image}
                        alt={value.title}
                        title={value.title}
                        width={100}
                        height={100}
                        className="w-[30px] md:w-[70px] !h-auto"
                      />
                    </div>
                    <div className="relative ml-20 flex-shrink-0 w-72 mt-10 md:mt-9 z-10 flex flex-col items-center">
                      <div className="absolute left-36 w-[2px] h-28 bg-c_424242 z-0"></div>
                      <Button
                        title={value.title}
                        className="relative text-c_FFFFFF bg-c_089DE5 px-4 py-1 md:py-2 rounded-full z-20 text-sm lg:text-[16px] xl:text-[16px] xl:leading-[20px] text-nowrap"
                      />
                      <p className="w-[90vw] md:w-96 bg-c_373737 p-4 rounded-xl text-xs 2xl:text-[17px] 2xl:leading-[27px] lg:text-sm xl:leading-[23px] text-c_FFFFFF relative mt-16">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <WrapperContainer className={"2xl:px-5"}>
            <div className="w-full h-[6px] bg-c_373737 mt-5 rounded-[3px]">
              <div
                style={{ width: `${scrollPercentage * 100}%` }}
                className={` h-[6px] bg-c_087DBD rounded-[3px]`}
              />
            </div>
          </WrapperContainer>
        </div>
      </div>
      {/* <div className="md:hidden overflow-hidden">
        <div className="bg-c_2B2B2B py-5 md:py-10 h-fit flex flex-col ">
          <WrapperContainer className={""}>
            <div className="grid items-center grid-cols-1 md:grid-cols-12 justify-between md:gap-5">
              <HeadingSectionH3
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
          <div className="w-full h-full flex flex-1 items-center">
            <div
              className="relative flex flex-row pl-4 md:pl-5 lg:pl-16 xl:pl-20 2xl:pl-40 pr-10 mb-5 overflow-scroll no-scrollbar"
              ref={ref}
            >
              <div className="relative mt-[49px] w-4 h-4 flex-shrink-0 bg-c_087DBD rounded-full z-10"></div>
              <div
                style={{ width: scrollWidth - 150 }}
                className={`absolute top-14 w-full h-[2px] bg-c_424242 z-0`}
              ></div>
              {items?.map((value, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="ml-20 relative mt-9 md:mt-5 bg-c_2B2B2B w-11 h-11 md:w-20 md:h-20 aspect-square rounded-full p-1 md:p-4 border border-primary flex justify-center items-center z-10">
                      <Image
                        src={value.image}
                        alt={value.title}
                        title={value.title}
                        width={100}
                        height={100}
                        className="w-[30px] md:w-[70px] !h-auto"
                      />
                    </div>
                    <div className="relative ml-20 flex-shrink-0 w-72 mt-[42px] md:mt-9 z-10 flex flex-col items-center">
                      <div className="absolute left-36 w-[2px] h-28 bg-c_424242 z-0"></div>
                      <Button
                        title={value.title}
                        className="relative text-c_FFFFFF bg-c_089DE5 px-4 py-1 md:py-2 rounded-full z-20 text-sm lg:text-[16px] xl:text-[16px] xl:leading-[20px] text-nowrap"
                      />
                      <div className="w-[90vw] md:w-96 bg-c_373737 p-4 rounded-xl 2xl:text-[17px] 2xl:leading-[27px] text-sm xl:leading-[23px] text-c_FFFFFF relative mt-16">
                        {value.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <WrapperContainer className={"2xl:px-5"}>
            <div className="w-full h-[6px] bg-c_373737 mt-5 rounded-[3px]">
              <div
                style={{ width: `${mobileScrollPercentage * 100}%` }}
                className={` h-[6px] bg-c_087DBD rounded-[3px]`}
              />
            </div>
          </WrapperContainer>
        </div>
      </div> */}
    </div>
  );
};

export default ProcessSection;
