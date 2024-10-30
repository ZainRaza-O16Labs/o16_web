import { useRef } from "react";
import CustomLeftArrow from "../customLeftArrow";
import CustomRightArrow from "../customRightArrow";
import DigitalMarketingCard from "../digitalMarketingCard";
import Slider from "../slider";
import WrapperContainer from "../wrapperContainer";
import { strings } from "@/locales";

const RecentBlogs = ({ data }) => {
  const sliderRef = useRef();
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
        max: 3000,
        min: 1280,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <div>
      <WrapperContainer>
        <div className="">
          <div className="mb-5 flex">
            <p className="text-c_090909 flex-1 text-start text-xl md:text-4xl font-extrabold">
              {strings.related}{" "}
              <span className="text-c_48B5F3">{strings.blogs}</span>
            </p>
            <div
              className={`flex flex-1 justify-end w-full gap-5 ${
                data?.length > 3 ? "" : "lg:hidden"
              }`}
            >
              <CustomLeftArrow
                onClick={() => {
                  sliderRef.current.previous();
                }}
                className="!relative !right-0 !-top-2 !bottom-0"
                color="#DEDEDE"
                hoverColor="#089DE5"
              />
              <CustomRightArrow
                onClick={() => {
                  sliderRef.current.next();
                }}
                className="!relative !right-0 !-top-2 !bottom-0"
                color="#DEDEDE"
                hoverColor="#089DE5"
              />
            </div>
          </div>
          <Slider
            sliderRef={sliderRef}
            items={data}
            renderItem={(value, index) => (
              <DigitalMarketingCard
                containerClass={"md:mr-5 mx-2 md:mx-0 h-full"}
                key={`innovation-diaries-${index}`}
                data={value}
              />
            )}
            responsive={sliderResponsive}
            autoplay={false}
            partialVisible={false}
            arrows={false}
            sliderClass={"!gap-0"}
          />
        </div>
      </WrapperContainer>
    </div>
  );
};

export default RecentBlogs;
