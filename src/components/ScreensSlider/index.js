import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Slider } from "@/components/index";
import {
  Components_Images,
  options,
  Screen_Images,
  Text_Images,
  UI_Flow_Images,
} from "@/constants/home_slider.constants";
import Image from "next/image";
import { strings } from "@/locales";
const ScreenSlider = () => {
  const sliderResponsive = {
    desktopTwo: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 6,
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
      items: 3,
      partialVisibilityGutter: 0,
    },
  };
  const [selected, setSelected] = useState(options?.[0]?.toLowerCase());
  const [images, setImages] = useState(Screen_Images);

  useEffect(() => {
    if (selected == "screens") {
      setImages(Screen_Images);
    } else if (selected == "ui elements") {
      setImages(UI_Flow_Images);
    } else if (selected == "flows") {
      setImages(Components_Images);
    } else {
      setImages(Text_Images);
    }
  }, [selected]);
  return (
    <div className="mb-16 ">
      <h1 className="m-0 flex  justify-center   items-center  w-full  mb-6 pb-2">
        {/* <span className="text-c_2B2B2B font-extrabold text-[20px]  w-full leading-[45px] md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[70px] xl:text-7xl xl:leading-[100px] 2xl:text-7xl 2xl:leading-[110px] flex justify-center items-center  gap-3 md:gap-10 md:flex-row flex-col "> */}
        <span className=" text-center md:text-[64px] sm:text-[32px] text-[24px] leading-none !font-extrabold">
          <span className="block">
            <span className="">{strings.find} </span>
            <span className="text__gradient">{strings.design} </span>
            <span>{strings.patterns} </span>
          </span>
          <span>{strings.InSeconds}</span>
        </span>
      </h1>
      <div className="flex gap-4 items-center  mx-auto  overflow-x-auto  md:mb-16 mb-10 max-w-[600px] justify-center rounded-full py-[6px] ">
        <div className="flex bg-c_F3F4F5  flex-wrap flex-row l rounded-full p-1 sm:gap-5 gap-3">
          {options.map((ele, index) => (
            <span
              key={index}
              className={` sm:text-[16px] text-[10px]  font-[700] cursor-pointer  p-3 rounded-full px-4 ${
                selected == ele.toLowerCase()
                  ? "bg-linear-gradeient text-c_FFFFFF  "
                  : "text-c_A1A1A1"
              }`}
              onClick={() => setSelected(ele.toLowerCase())}
            >
              {ele}
            </span>
          ))}
        </div>
      </div>

      <div className="">
        <Slider
          items={images}
          renderItem={(value, index) => (
            <div className="" key={index}>
              {value?.icon ? (
                <>
                  <div className="flex justify-center">
                    <Image
                      key={"slider" + index}
                      src={value?.icon}
                      alt={selected}
                      title={selected}
                      width={300}
                      height={600}
                      // loading="lazy"
                      className={`h-[60px] w-[60px] ${
                        selected == "screens"
                          ? "object-contain"
                          : "object-cover"
                      }  rounded-2xl shadow-md`}
                    />
                  </div>
                  <p className="my-2 text-center text-xs font-manrope">
                    {value?.text}
                  </p>
                </>
              ) : null}

              <Image
                key={"slider" + index}
                src={value?.image}
                alt={selected}
                title={selected}
                width={300}
                height={600}
                // loading="lazy"
                className={`
                  object-cover h-[500px] aspect-h-3
                rounded-2xl`}
              />
            </div>
          )}
          responsive={sliderResponsive}
          arrows={false}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={0}
          transitionSpeed={"15.5s"}
          transitionDuration={10000}
          centerMode={false}
          shouldResetAutoplay={true}
          sliderClass={""}
          itemClass={""}
        />
      </div>
    </div>
  );
};

export default ScreenSlider;
