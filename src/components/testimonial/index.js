import { Slider, WrapperContainer } from "@/components";
import { strings } from "@/locales";
import Image from "next/image";
import ReactStars from "react-stars";
import { ClutchLogo, O16Background } from "../../../public/images";
import CustomLeftArrow from "../customLeftArrow";
import CustomRightArrow from "../customRightArrow";

const Testimonial = ({ data }) => {
  const sliderResponsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
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
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="md:grid grid-cols-12 gap-2">
        <div className="xl:col-span-4 md:col-span-5 bg-[#F3F4F5] xl:px-5 xl:py-8 p-5 md:mb-0 mb-6 rounded-3xl">
          <div className="text-center">
            <span className="bg-[#E6E6E6] rounded-[50px] py-3 px-5 xl:text-lg text-sm font-bold">
              {strings.hearFromOurClients}
            </span>
          </div>
          <h3 className="xl:text-xl text-xl font-medium mt-6">
            {strings.realPeopleRealComments}
          </h3>
          <p className="xl:text-[15px] text-sm font-normal mt-4">
            {strings.trueStoryPara}
          </p>
          <div className="flex justify-center items-center mt-7 flex-col">
            <Image
              src={ClutchLogo}
              className="object-contain h-auto w-auto"
              alt="clutch logo"
              loading="lazy"
              title="clutch logo"
              height={104}
              width={212}
            />
          </div>
        </div>
        <div className="xl:col-span-8 md:col-span-7 h-full">
          {data && (
            <Slider
              items={data}
              containerClass={`w-full`}
              renderItem={(value, index) => (
                <div
                  key={index}
                  onClick={() => {
                    window.open(value?.acf?.link, "_blank");
                  }}
                  className="m-auto flex items-center relative xl:p-10 p-5 rounded-3xl overflow-hidden w-full min-h-[350px] xl:min-h-[495px] md:min-h-[460px] xl:!pb-24 md:!pb-16 !pb-20 cursor-pointer"
                >
                  {/* <div className="relative w-full h-full"> */}
                  <Image
                    className="h-full  w-full bg-cover object-cover"
                    src={O16Background}
                    title="o16 background"
                    loading="lazy"
                    alt="o16 background"
                    // quality={100}
                    // width={1021}
                    // height={654}
                    fill
                    unoptimized
                  />
                  <div className="relative z-1 h-full flex flex-col justify-center">
                    <ReactStars
                      count={5}
                      size={40}
                      color1="#FFFFFF80"
                      color2={"#ffffff"}
                      edit={false}
                      half={true}
                      value={Number(value?.acf?.rating)}
                    />
                    <p className="text-c_FFFFFF mt-8 xl:mt-8 font-medium italic text-base md:text-xl lg:text-2xl">
                      "{value?.acf?.description}"
                    </p>
                    <div className="flex md:flex-row flex-col mt-8 xl:mt-10 items-center">
                      <p className="text-c_FFFFFF lg:text-xl md:text-lg text-sm font-semibold">
                        {value?.acf?.title}
                      </p>
                      {/* <p className="text-c_FFFFFF xl:ml-4 ml-2 text-center 2xl:text-2xl md:text-start xl:text-xl md:text-sm text-sm font-medium">
                            {strings.clientCompany}
                          </p> */}
                    </div>
                  </div>
                </div>
              )}
              responsive={sliderResponsive}
              autoplay={false}
              arrows={true}
              sliderClass={"!gap-0"}
              itemClass={`md:!pl-4 md:!pr-1`}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            />
          )}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Testimonial;
