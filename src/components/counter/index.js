import { strings } from "@/locales";
import React from "react";
import WrapperContainer from "../wrapperContainer";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <WrapperContainer className="mb-12" >
      <div ref={ref} className="flex justify-around flex-col md:flex-row items-center gap-4">
        <div className="border-[1px] rounded-full h-52 w-52 flex justify-center items-center flex-col border-[#000]">
          <div className="flex items-center">
            <CountUp
              duration={3}
              start={inView ? 900 : 899}
              end={inView ? 1000 : 999}
              // enableScrollSpy={false}
              separator=""
              className="font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] text-c_2B2B2B"
            />
            <span className="text-c_089DE5 font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px]">
              {strings.plus}
            </span>
          </div>
          <Paragraph
            description={strings.projectsDelivered}
            descriptionClassName={`!text-base 2xl:!text-lg	w-32 text-center`}
          />
        </div>
        <div className="border-[1px] rounded-full h-52 w-52 flex justify-center items-center flex-col border-[#000]">
          <div className="flex items-center">
            <CountUp
              duration={3}
              start={inView ? 50 : 49}
              end={inView ? 100 : 99}
              // enableScrollSpy={false}
              separator=""
              className="font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] text-c_2B2B2B"
            />
            <span className="text-c_089DE5 font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px]">
              {strings.plus}
            </span>
          </div>
          <Paragraph
            description={strings.techExpertsOnBoard}
            descriptionClassName={`!text-base 2xl:!text-lg	w-32 text-center`}
          />
        </div>
        <div className="border-[1px] rounded-full h-52 w-52 flex justify-center items-center flex-col border-[#000]">
          <div className="flex items-center">
            <CountUp
              duration={3}
              start={inView ? 20 : 19}
              end={inView ? 50 : 40}
              // enableScrollSpy={false}
              separator=""
              className="font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] text-c_2B2B2B"
            />
            <span className="text-c_089DE5 font-bold leading-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px]">
              {strings.plus}
            </span>
          </div>
          <Paragraph
            description={strings.investmentRaisedForStartups}
            descriptionClassName={`!text-sm 2xl:!text-lg	w-32 text-center`}
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Counter;
