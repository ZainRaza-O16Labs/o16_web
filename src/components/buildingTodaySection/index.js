import Image from "next/image";
import { useState } from "react";
import {
  Arrow,
  BlueArrow,
  BuildingToday,
  GirlWithLaptop,
} from "../../../public/images";
import Button from "../button";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import WrapperContainer from "../wrapperContainer";
import { useRouter } from "next/navigation";
import HeadingSectionH3 from "../headingSectionH3";

const BuildingTodaySection = ({
  heading,
  description,
  buttonText,
  isMobile = false,
}) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  return (
    <WrapperContainer
      className={
        "relative mb-16 md:min-h-[300px] lg:min-h-[376px] xl:min-h-[450px] grid grid-cols-1 items-end"
      }
    >
      <div className="relative min-h-fit">
        <Image
          // priority
          src={BuildingToday}
          alt="building today image"
          title="building today image"
          //   width={300}
          //   height={103}
          fill
          className="w-auto h-full md:w-full md:h-auto object-cover z-0 rounded-3xl"
        />
        <div className="relative w-full md:w-3/5 h-full z-10 px-4 md:px-0 md:pl-8 lg:pl-12 2xl:pl-16 py-10 md:py-5 xl:py-10">
          <HeadingSectionH3
            title={heading}
            titleClassName={`text-c_FFFFFF font-semibold`}
          />
          <Paragraph
            description={description}
            descriptionClassName={`mt-3 lg:mt-6 text-c_FFFFFF`}
          />
          <Button
            title={
              <span className="relative z-10 flex items-center gap-2">
                {buttonText}
                <Image
                  src={isHover ? BlueArrow : Arrow}
                  alt="arrow"
                  title="arrow"
                  width={16}
                  height={16}
                  className="w-[10px] h-[10px] md:w-3 md:h-3"
                />
              </span>
            }
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
            onClick={() => {
              router.push("/contact-us");
            }}
            className="mt-3 lg:mt-5 xl:mt-10 text-c_FFFFFF flex justify-center items-center gap-2 border border-c_FFFFFF h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] hover:before:bg-c_FFFFFF relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-c_FFFFFF before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full"
          />
        </div>
        {!isMobile && (
          <Image
            src={GirlWithLaptop}
            alt="Girl With Laptop"
            title="Girl With Laptop"
            width={300}
            height={205}
            className="relative hidden md:block w-11/12 md:absolute md:bottom-0 md:right-0 md:w-5/12 px-5 xl:w-w-5/12 2xl:w-2/6 h-auto max-h-[470px] object-cover mx-auto"
          />
        )}
      </div>
    </WrapperContainer>
  );
};

export default BuildingTodaySection;
