import { strings } from "@/locales";
import Image from "next/image";
import { useState } from "react";
import { AdvancedWorkCardImage, BlueArrow } from "../../../public/images";
import Button from "../button";
import Slider from "../slider";
import WrapperContainer from "../wrapperContainer";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/route.constants";
/**
 * Function to render the OurAdvanceWork component.
 *
 * @return {JSX.Element} The rendered OurAdvanceWork component
 */
const OurAdvanceWork = ({ title, description, caseStudies }) => {
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
      partialVisibilityGutter: 60,
    },
    desktopTwo: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 3,
      partialVisibilityGutter: 20,
    },
    desktopOne: {
      breakpoint: {
        max: 1279,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center md:gap-10">
        <div className="col-span-1 md:col-span-6">
          <h2 className="w-full m-0 text-c_2B2B2B font-extrabold text-3xl lg:text-4xl xl:text-5xl xl:leading-[62px] capitalize">
            {title}
          </h2>
        </div>
        <p
          className="col-span-1 md:col-span-6 mt-5 md:mt-0 text-c_2B2B2B font-normal text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      {caseStudies && caseStudies.length > 0 && (
        <Slider
          arrows={true}
          autoPlay={false}
          draggable={false}
          renderItem={(value, index) => (
            <div key={index}>
            <AdvanceWorkCard value={value} index={index} />
            </div>
          )}
          items={caseStudies}
          responsive={sliderResponsive}
          sliderClass={"!gap-0"}
          itemClass={"pr-3 md:pr-2 lg:pr-4"}
          containerClass={"mt-10"}
          partialVisible={true}
        />
      )}
    </WrapperContainer>
  );
};

/**
 * Component for rendering an advanced work card.
 *
 * @param {object} props - an object containing the component's properties
 * @return {JSX.Element} - the JSX element representing the advanced work card component
 */
const AdvanceWorkCard = ({ value, index }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const data = value?.acf;
  return (
    <div
      style={{ height: "calc(100vh - 83px)" }}
      className={`w-full h-auto max-h-[500px] flex flex-col`}
    >
      <Button
        title={
          <div className="flex justify-start items-center gap-5">
            <h3 className="font-extrabold m-0 text-c_181818 text-lg lg:text-xl xl:text-2xl xl:leading-[26px]">
              {data?.project_name}
            </h3>
            <Image
              src={BlueArrow}
              alt="Arrow"
              title="Arrow"
              width={18}
              height={18}
              className="w-4 md:w-[18px] h-auto cursor-pointer"
            />
          </div>
        }
        onClick={() => {
          router.push(`${routes.caseStudies}/${value?.slug}`);
        }}
      />
      {/* {!isHovered && ( */}
        <p className={`mt-2 text-c_2B2B2B font-normal text-sm line-clamp-5 ${isHovered?"absolute opacity-0":"animate-fadeWithOverlap"}`}>
          {data?.project_detail}
        </p>
      {/* )} */}
      <div
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
        className={`hidden md:block relative mt-5 flex-1 rounded-[20px] overflow-hidden ${
          isHovered
            ? "animate-slideTop"
            : "animate-shortSlideDown translate-y-0"
        }`}
      >
        <Image
          src={data?.project_background_image}
          alt="Project Background"
          title="Project Background"
          fill
          className={``}
        />
        <div className="relative z-10">
          <Image
            src={data?.project_logo}
            alt="Project Logo"
            title="Project Logo"
            width={1000}
            height={1000}
            className={`w-[100px] h-[70px] lg:w-[150px] lg:h-[100px] object-contain object-left-center mt-4 ml-4`}
          />
          <div
            className={`w-3/4 h-auto float-right ${
              isHovered ? "rotate-[315px] " : ""
            }`}
            style={{
              transform: isHovered ? "rotate(315deg)" : "rotate(0deg)",
              position: "relative",
              right: isHovered ? "-20%" : "0%",
              bottom: isHovered ? "-50%" : "0%",
            }}
          >
            <Image
              src={data?.project_image}
              alt="Project Image"
              title="Project Image"
              width={1000}
              height={1000}
              className={`w-full h-auto `}
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsHovered((prev) => !prev);
        }}
        className="md:hidden relative mt-5 flex-1 rounded-[20px] overflow-hidden"
      >
        <Image
          src={data?.background_image}
          alt="Project Background"
          title="Project Background"
          fill
          className={``}
        />
        <div className="relative z-10 animate-slideTop">
          <Image
            src={data?.project_logo}
            alt="Project Logo"
            title="Project Logo"
            width={1000}
            height={1000}
            className={`w-24 h-24 object-contain mt-2 ml-2`}
          />
          <div
            className={`w-3/4 h-auto float-right ${
              isHovered ? "rotate-[315px] " : ""
            }`}
            style={{
              transform: isHovered ? "rotate(315deg)" : "rotate(0deg)",
              position: "relative",
              right: isHovered ? "-20%" : "0%",
              bottom: isHovered ? "-50%" : "0%",
            }}
          >
            <Image
              src={data?.project_image}
              alt="Project Image"
              title="Project Image"
              width={1000}
              height={1000}
              className={`w-full h-auto `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdvanceWork;
