import { routes } from "@/constants/route.constants";
import { strings } from "@/locales";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Arrow, BlueArrow } from "../../../public/images";
import Button from "../button";
import CustomLeftArrow from "../customLeftArrow";
import CustomRightArrow from "../customRightArrow";
import Link from "next/link";

const ProjectSlider = ({ items }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const handlePrevious = () => {
    if (currentSlide == 0) {
      setCurrentSlide(items?.length - 1);
    } else if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const handleNext = () => {
    if (currentSlide == items?.length - 1) {
      setCurrentSlide(0);
    } else if (currentSlide >= 0) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  return items?.length > 0
    ? items?.map((value, index) => {
        return (
          <div key={index}>
            <div
              key={"web-" + index}
              className={`mt-10 relative shadow-headerShadow rounded-3xl ${
                currentSlide == index ? "hidden md:block" : "hidden"
              }`}
            >
              <Image
                src={value?.acf?.project_banner}
                alt="project background"
                title="project background"
                width={1600}
                height={600}
                className="w-full h-auto object-cover rounded-3xl aspect-[2.1]"
              />
              <div className="bg-c_FFFFFF rounded-3xl md:w-2/4 lg:w-2/5 min-h-fit max-h-[calc(100%-10px)] absolute my-1 lg:my-4 bottom-2 2xl:bottom-5 right-5 2xl:right-10 p-4 lg:p-5 2xl:p-10 overflow-clip shadow-headerShadow">
                <div className="flex justify-between items-center gap-5">
                  <div className="relative 2xl:w-[150px] aspect-square rounded-full overflow-hidden flex justify-center items-center p-3">
                    <Image
                      src={value?.acf?.project_background_image}
                      alt="project background"
                      title="project background"
                      fill
                      // className="2xl:w-[150px] aspect-square rounded-full object-scale-down bg-c_089DE5"
                    />
                    <Image
                      src={value?.acf?.project_logo}
                      alt="project logo"
                      title="project logo"
                      width={100}
                      height={100}
                      className="w-[76px] h-[76px] object-scale-down relative z-10"
                    />
                  </div>
                  {items?.length > 1 && (
                    <div className="flex justify-center items-center gap-2">
                      <CustomLeftArrow
                        color={"#737373"}
                        hoverColor={"#089DE5"}
                        className={"!relative !top-0 !right-0 cursor-pointer"}
                        onClick={handlePrevious}
                      />
                      <CustomRightArrow
                        color={"#737373"}
                        hoverColor={"#089DE5"}
                        className={"!relative !top-0 !right-0 cursor-pointer"}
                        onClick={handleNext}
                      />
                    </div>
                  )}
                </div>
                <h3 className="mt-5 mb-0 text-c_181818 font-extrabold text-base lg:text-lg xl:text-xl xl:leading-8">
                  {value?.acf?.project_name}
                </h3>
                <p className="mt-5 xl:mt-5 md:mt-0 text-c_737373 font-normal text-sm line-clamp-5">
                  {value?.acf?.project_detail}
                </p>
                <Link href={routes.caseStudies + "/" + value.slug}>
                <Button
                  title={
                    <span className="relative z-10 flex justify-center items-center gap-2">
                      {strings.viewDetails}
                      <Image
                        src={isHover ? BlueArrow : Arrow}
                        alt="arrow"
                        title="arrow"
                        width={12}
                        height={12}
                        className="w-[10px] h-[10px] md:w-3 md:h-3"
                      />
                    </span>
                  }
                  className="mt-4 2xl:mt-6 text-c_FFFFFF bg-gradient-to-r from-c_089DE5 to-c_087DBD hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%]"
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                  onClick={() =>
                    router.push(routes.caseStudies + "/" + value.slug)
                  }
                />
                </Link>
              </div>
            </div>
            <div
              key={"mobile-" + index}
              className={`mt-10 relative bg-c_FFFFFF overflow-hidden rounded-3xl shadow-headerShadow  ${
                currentSlide == index ? "block md:hidden" : "hidden"
              }`}
            >
              <Image
                src={value?.acf?.project_banner}
                width={1600}
                height={923}
                alt="project background"
                title="project background"
                className="w-full h-auto object-cover rounded-t-3xl aspect-video"
              />
              <div className="w-full min-h-fit p-5">
                <div className="flex justify-between items-center gap-5">
                  <div className="relative w-[80px] aspect-square rounded-full flex justify-center items-center overflow-hidden">
                    <Image
                      src={value?.acf?.project_background_image}
                      alt="project background"
                      title="project background"
                      fill
                    />
                    <Image
                      src={value?.acf?.project_logo}
                      alt="project logo"
                      title="project logo"
                      width={60}
                      height={60}
                      className="h-[60px] object-scale-down relative z-10"
                    />
                  </div>
                  {items?.length > 1 && (
                    <div className="flex justify-center items-center gap-2">
                      <CustomLeftArrow
                        color={"#737373"}
                        hoverColor={"#089DE5"}
                        className={"!relative !top-0 !right-0 cursor-pointer"}
                        onClick={handlePrevious}
                      />
                      <CustomRightArrow
                        color={"#737373"}
                        hoverColor={"#089DE5"}
                        className={"!relative !top-0 !right-0 cursor-pointer"}
                        onClick={handleNext}
                      />
                    </div>
                  )}
                </div>
                <p className="mt-4 md:mt-0 text-c_181818 font-extrabold text-base lg:text-lg xl:text-xl xl:leading-8">
                  {value?.acf?.project_name}
                </p>
                <p className="mt-2 md:mt-0 text-c_2B2B2B font-normal text-sm xl:text-lg xl:leading-[25px]">
                  {value?.acf?.project_detail}
                </p>
                <Link href={routes.caseStudies + "/" + value.slug}>

                <Button
                  title={
                    <>
                      {strings.viewDetails}
                      <Image
                        src={Arrow}
                        alt="arrow"
                        title="arrow"
                        width={10}
                        height={10}
                        className="w-[10px] h-[10px] md:w-3 md:h-3"
                      />
                    </>
                  }
                  className="mt-5 md:mt-0 flex justify-center items-center gap-2 text-c_FFFFFF bg-gradient-to-r from-c_087DBD to-c_089DE5 h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] "
                  onClick={() =>
                    router.push(routes.caseStudies + "/" + value.slug)
                  }
                />
                </Link>
              </div>
            </div>
          </div>
        );
      })
    : null;
};

export default ProjectSlider;
