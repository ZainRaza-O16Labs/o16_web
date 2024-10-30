import React from "react";
import WrapperContainer from "../wrapperContainer";
import Image from "next/image";
import { ColorCode, DesignElementImage } from "../../../public/images";
import Paragraph from "../paragraph";

const DesignElements = ({ title, description, imageOne, imageTwo }) => {
  return (
    <WrapperContainer className="mb-12 lg:flex items-center gap-5">
      <div className="">
        <div className="">
          <div
            className="font-extrabold text-c_2B2B2B text-2xl md:text-3xl xl:text-5xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </div>
        <div className="mt-5 text-c_101010 font-normal 2xl:text-base 2xl:leading-[28px] text-sm" dangerouslySetInnerHTML={{__html: description }}></div>
       </div>
      <div className="md:flex mt-5 gap-5 lg:mt-0">
        <div className="flex-1">
          <Image
            src={imageOne}
            width={2500}
            height={2500}
            className="h-full md:mb-0 mb-3"
            alt="Design Element Image"
            title="Design Element Image"
          />
        </div>
        <div className="flex-1">
          <Image
            src={imageTwo}
            width={2500}
            height={2500}
            className="h-full mb-3"
            alt="Color Code Image"
            title="Color Code Image"
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default DesignElements;
