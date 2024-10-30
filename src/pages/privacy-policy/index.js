import { HeroSection, Layout, WrapperContainer } from "@/components";
import { strings } from "@/locales";
import React from "react";
import { PrivacyPolicyBackground } from "../../../public/images";

const PrivacyPolicy = () => {
  const metadata = {
    title: strings.privacyMeta,
    description: strings.privacyMetaDescription,
  };
  return (
    <Layout backgrouondImage={PrivacyPolicyBackground} metadata={metadata}>
      <HeroSection
        subtitle={strings.privacyPolicy}
        subtitleClassName={"uppercase"}
        title={strings.safeguardingYourInformation}
        titleClassName={"md:leading-[56px] 2xl:leading-[80px]"}
        description={
          <>
            {strings.at}{" "}
            <span className="text-c_101010 font-semibold text-base lg:text-lg xl:leading-[26px]">
              {strings.o16labs}
            </span>{" "}
            {strings.weAreDedicated}
          </>
        }
        leftContainerClassName={"w-4/5 md:w-full"}
      />
      <WrapperContainer className={"mb-16"}>
        <p className="w-full lg:w-11/12 xl:w-4/5 2xl:w-[70%] font-extrabold text-c_2D2D2D text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:leading-[46px] capitalize">
          {strings?.ourBusinessComplies}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5">
          {strings.policies.map((value, index) => {
            return (
              <div key={index}>
                <p className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl capitalize text-c_101010">
                  {value.title}
                </p>
                <p className="font-normal text-xs md:text-sm lg:text-lg text-c_101010">
                  {value.description}
                </p>
                {strings.policies.length - 1 == index && (
                  <p
                    key={index + "-2"}
                    className="font-normal text-xs md:text-sm lg:text-lg text-c_101010"
                  >
                    {value.descriptionTwo}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </WrapperContainer>
    </Layout>
  );
};

export default PrivacyPolicy;
