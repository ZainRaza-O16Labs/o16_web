import { strings } from "@/locales";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../button";
import WrapperContainer from "../wrapperContainer";
import { AboutImage, Arrow, BlueArrow } from "../../../public/images";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import { useState } from "react";

const AboutSection = ({ button, title, description, isMobile = false }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  return (
    <WrapperContainer className={"mb-8"}>
      <div className="relative">
        <div
          className={`md:absolute md:items-center grid ${
            button ? "grid-cols-12 gap-0" : "grid-cols-12 gap-3"
          } z-20`}
        >
          <HeadingSection
            containderClassName={` md:col-span-3 xl:col-span-3 ${
              button ? "col-span-11" : "col-span-12"
            }`}
            title={title}
            titleClassName={`!text-lg md:!text-xl xl:!text-3xl text-c_2B2B2B`}
          />
          <div className={`md:col-span-1 col-span-1 ${button ? "" : "hidden"}`}>
            <Button
              title={
                <Image
                  className="relative z-10"
                  src={isHover ? BlueArrow : Arrow}
                  alt="arrow"
                  title="arrow"
                  width={14}
                  height={14}
                />
              }
              className={`xl:p-4 md:p-2 p-[6px] ml-0 md:ml-2 rounded-full text-c_FFFFFF hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full`}
              onClick={() => router.push("/about")}
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            />
          </div>
          <div
            className={`${
              button
                ? "col-span-12 md:col-span-5 xl:col-span-5"
                : "col-span-12 md:col-span-6 xl:col-span-6 flex items-center"
            }`}
          >
            <Paragraph
              dangerouslySetInnerHTML={{ __html: description }}
              descriptionClassName={`md:m-0 mt-1 lg:text-[10px] xl:!text-sm md:!text-[14px] md:!leading-[15px] !text-sm 2xl:!text-[17px] 2xl:!leading-[20px]`}
            />
          </div>
        </div>
      </div>

      {!isMobile && (
        <div
          className={`md:flex hidden justify-end -z-10 overflow-hidden pt-0 ${
            button ? "md:pt-[110px] lg:pt-5" : "md:pt-12 lg:pt-0"
          }`}
        >
          <Image
            className="resize w-full h-full"
            src={AboutImage}
            alt="about image"
            title="about image"
            loading="lazy"
            // priority
            width={1000}
            height={743}
          />
        </div>
      )}
    </WrapperContainer>
  );
};

export default AboutSection;
