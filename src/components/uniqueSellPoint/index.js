import { useState } from "react";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import SellPointCard from "../sellPointCard";
import WrapperContainer from "../wrapperContainer";

const UniqueSellPoint = ({ heading, description, data }) => {
  const [isOpen, setIsOpen] = useState(-1);
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="grid items-center grid-cols-1 md:grid-cols-12 md:gap-10">
        <div className="col-span-1 md:col-span-6">
          <HeadingSection
            title={heading}
            titleClassName={`text-c_2B2B2B capitalize`}
          />
        </div>
        <div className="col-span-1 md:col-span-6  mt-5 md:mt-0 text-c_2B2B2B">
          <Paragraph
            description={description}
            descriptionClassName={`text-c_2B2B2B`}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 xl:gap-10">
        {data?.map((value, index) => {
          return (
            <SellPointCard
              value={value}
              key={index}
              index={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
    </WrapperContainer>
  );
};

export default UniqueSellPoint;
