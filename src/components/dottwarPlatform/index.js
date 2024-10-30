import React from "react";
import Image from "next/image";
import { AppView, PlateformLayer, SuccessLayer } from "../../../public/images";
import WrapperContainer from "../wrapperContainer";
import { strings } from "@/locales";
import Paragraph from "../paragraph";

const DottwarPlateform = ({ backgroundImage, title, detail, image, link }) => {
  return (
    <div className="bg-c_2B2B2B 2xl:container 2xl:mx-auto h-fit relative mb-16">
      <Image
        src={backgroundImage}
        alt="success layer"
        title="success layer"
        fill
        unoptimized
      />
      <WrapperContainer>
        <div className="flex flex-col justify-center items-center relative z-2 max-w-[736px] mx-auto py-10">
          <p className="text-center font-bold text-xl md:text-3xl xl:text-5xl text-c_FFFFFF">
            {title}
          </p>
          <Paragraph
            description={detail}
            descriptionClassName={`text-c_FFFFFF mt-3 text-center `}
          />        
          <iframe
            className="mt-10"
            src={link}
            width="100%"
            height="550px"
            allowFullScreen
          ></iframe>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default DottwarPlateform;
