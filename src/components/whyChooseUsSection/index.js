import Image from "next/image";
import { useState } from "react";
import WrapperContainer from "../wrapperContainer";

const WhyChooseUs = ({ heading, description, data }) => {
  const [hover, setHover] = useState(-1);
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center md:gap-10">
        <div className="col-span-1 md:col-span-6">
          <h2 className="w-full m-0 text-c_2B2B2B font-extrabold text-3xl lg:text-4xl xl:text-5xl xl:leading-[62px] capitalize">
            {heading}
          </h2>
        </div>
        <p
          className="col-span-1 md:col-span-6 mt-5 md:mt-0 text-c_2B2B2B font-normal text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data?.map((value, index) => {
          return (
            <>
              <div
                key={index}
                onMouseOver={() => {
                  setHover(index);
                }}
                onMouseOut={() => {
                  setHover(-1);
                }}
                className={`hidden md:block h-72 border rounded-xl border-c_D9D9D9 p-4 cursor-pointer ${
                  hover == index ? "bg-c_089DE5" : ""
                }`}
              >
                {hover != index && (
                  <Image
                    src={value?.image}
                    title="cloud with bulb"
                    alt="cloud with bulb"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                )}
                <div
                  className={`${
                    hover == index ? "animate-slideTop translate-y-0" : ""
                  }`}
                >
                  <h3
                    className={`mt-2 mb-0 font-bold text-base lg:text-lg xl:text-xl ${
                      hover == index ? "text-c_FFFFFF" : "text-c_1C1C1C"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`mt-2 md:mt-3 xl:mt-4 text-sm 2xl:mt-5 ${
                      hover == index ? "text-c_FFFFFF" : "text-c_1C1C1C"
                    } font-normal overflow-hidden`}
                    dangerouslySetInnerHTML={{ __html: value.description }}
                  ></p>
                </div>
              </div>
              <div
                key={index}
                onClick={() => {
                  if (hover == index) {
                    setHover(-1);
                  } else {
                    setHover(index);
                  }
                }}
                className={`md:hidden h-72 border rounded-xl border-c_D9D9D9 p-4 cursor-pointer ${
                  hover == index ? "bg-c_089DE5" : ""
                }`}
              >
                {hover != index && (
                  <Image
                    src={value?.image}
                    title="cloud with bulb"
                    alt="cloud with bulb"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                )}
                <div
                  className={`${
                    hover == index ? "animate-slideTop translate-y-0" : ""
                  }`}
                >
                  <h3
                    className={`mt-2 mb-0 font-bold text-base lg:text-lg xl:text-xl ${
                      hover == index ? "text-c_FFFFFF" : "text-c_1C1C1C"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <div
                    className={`mt-2 md:mt-3 xl:mt-4 text-sm lg:text-sm 2xl:mt-5 ${
                      hover == index ? "text-c_FFFFFF" : "text-c_1C1C1C"
                    } font-normal overflow-hidden`}
                    dangerouslySetInnerHTML={{ __html: value.description }}
                  ></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </WrapperContainer>
  );
};

export default WhyChooseUs;
