import React from "react";
import WrapperContainer from "../wrapperContainer";
import Image from "next/image";
import {
  CaseStudiesImageThree,
  CaseStudiesImageTwo,
  CaseStudiesimageone,
} from "../../../public/images";

const CaseStudiesImageOne = ({ imageOne, imageTwo, imageThree }) => {
  const items = [imageOne, imageTwo, imageThree];
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="md:flex gap-3 col-span-3">
        {items.map((value, index) => {
          return (
            <div key={index}>
              <Image
                className="md:my-0 my-3"
                src={value}
                width={506}
                height={541}
                alt="case Studies Image"
                title="case Studies Image"
              />
            </div>
          );
        })}
      </div>
    </WrapperContainer>
  );
};

export default CaseStudiesImageOne;
