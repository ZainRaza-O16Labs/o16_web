import { strings } from "@/locales";
import Image from "next/image";
import WrapperContainer from "../wrapperContainer";

const AboutTheService = ({ image, heading, detail }) => {
  return (
    <WrapperContainer
      className={
        "grid grid-cols-1 md:grid-cols-12 mb-16 gap-5 md:gap-10 lg:gap-10 2xl:gap-10 items-center"
      }
    >
      <div className="col-span-1 md:col-span-6 lg:col-span-6 xl:col-span-6 ">
        <div className="w-4/5 mx-auto">
          <Image
            src={image}
            alt="Mobile App 2"
            title="Mobile App 2"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
        <h2 className="font-extrabold text-3xl m-0 xl:text-[40px] xl:leading-[60px] 2xl:text-5xl 2xl:leading-[70px] capitalize">
          {heading}
        </h2>
        <div className="mt-5 md:mt-2">
          <div
            className="mt-5 text-sm 2xl:text-[18px] 2xl:leading-[28px] lg:text-sm leading-5"
            dangerouslySetInnerHTML={{ __html: detail }}
          ></div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default AboutTheService;
