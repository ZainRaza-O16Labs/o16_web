import { strings } from "@/locales";
import React from "react";

const ChallangesSolutionsCard = ({ title, BgClassName, details }) => {
  return (
    <div className="bg-c_F3F3F3 rounded-2xl relative p-4 md:6 xl:p-10 mb-0 md:mb-0">
      <h2 className="text-c_101111 font-extrabold text-2xl md:text-3xl xl:text-4xl mb-3 mt-0">
        {title}
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: details }}
        className="challenges_details font-normal text-sm 2xl:text-[18px] 2xl:leading-[28px] lg:text-base leading-5"
      />
      <div
        className={` w-2 h-2 rounded-full absolute top-5 right-5 ${BgClassName}`}
      ></div>
    </div>
  );
};

export default ChallangesSolutionsCard;
