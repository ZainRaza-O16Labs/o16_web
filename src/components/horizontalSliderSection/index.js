import { strings } from "@/locales";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SuccessLayer } from "../../../public/images";
import WrapperContainer from "../wrapperContainer";

const HorizontalSliderSection = ({ items }) => {
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
        duration: 2,
        scrollTrigger: {
          trigger: triggernRef.current,
          start: "-35 top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    setGsapPin(pin);
    return () => {
      pin.kill();
    };
  }, []);
  useEffect(() => {
    sectionRef.current.scrollWidth > 0 &&
      setScrollWidth(sectionRef.current.scrollWidth);
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
    // <section className="">
    <div
      className="overflow-hidden  relative  2xl:h-auto mb-16"
      ref={triggernRef}
    >
      <div
        className="bg-c_2B2B2B pt-6 h-fit flex flex-col lg:min-h-[calc(100vh)] min-h-[calc(80vh)]"
        // style={{ minHeight: "calc(100vh)" }}
      >
        <Image
          className="z-3 absolute"
          src={SuccessLayer}
          alt="success layer"
          title="success layer"
          loading="lazy"
          fill
          unoptimized
        />
        <WrapperContainer>
          <div className="flex justify-center items-center py-10">
            <h2 className="text-c_FFFFFF m-0 capitalize text-xl text-center md:text-4xl font-extrabold pt-4">
              {strings.our}{" "}
              <span className="text-c_089DE5">{strings.success}</span>
              <span className=""> {strings.thatMatters}</span>
            </h2>
          </div>
        </WrapperContainer>
        <div
          className="flex w-full h-full flex-1 items-center"
          ref={sectionRef}
        >
          <div
            className="flex flex-row gap-24 md:gap-56 pr-[calc(50vw_-_135px)] pl-[calc(50vw_-_135px)] md:pl-[calc(50vw_-_235px)] md:pr-[calc(50vw_-_235px)]"
            // style={{
            //   paddingLeft: "calc(50vw - 235px)",
            //   paddingRight: "calc(50vw - 235px)",
            // }}
          >
            {items?.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`md:min-w-[470px] min-w-[270px]  ${
                    scrollPercentage >= index * 0.35 &&
                    scrollPercentage < 0.35 * index + 0.35
                      ? ""
                      : "opacity-50"
                  }`}
                >
                  <Image
                    className={`align-middle`}
                    src={value.image}
                    alt="success Slider"
                    title="success Slider"
                    width={578}
                    loading="lazy"
                    height={239}
                  />
                  <div
                    className={`${
                      scrollPercentage >= index * 0.35 &&
                      scrollPercentage < 0.35 * index + 0.35
                        ? ""
                        : ""
                    }}`}
                  >
                    <h3 className="md:text-4xl m-0 text-xl py-4 text-center text-c_FFFFFF font-extrabold">
                      {value.title}
                    </h3>
                    <p className="text-sm text-center text-c_FFFFFF">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <WrapperContainer className={"2xl:px-5  my-14"}>
          <div className="w-full h-[6px] bg-c_373737 mt-5 rounded-[3px]">
            <div
              style={{ width: `${scrollPercentage * 100}%` }}
              className={` h-[6px] bg-c_087DBD rounded-[3px]`}
            />
          </div>
        </WrapperContainer>
      </div>
    </div>
    // </section>
  );
};

export default HorizontalSliderSection;
