import React from "react";
import WrapperContainer from "../wrapperContainer";
import Image from "next/image";
import {
  CaseStudiesImageTwo,
  CaseStudiesimageone,
} from "../../../public/images";

const CaseStudiesImagetwo = ({ imageOne, imageTwo }) => {
  const items = [imageOne, imageTwo];
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="md:flex col-span-2 gap-4 justify-between mx-auto">
        {items.map((value, index) => {
          return (
            <div key={index}>
              <Image
                className="md:my-0 my-3 w-full h-auto"
                width={2500}
                height={2500}
                src={value}
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

export default CaseStudiesImagetwo;
