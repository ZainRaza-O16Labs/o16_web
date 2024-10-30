import { HeroSection, Layout, WrapperContainer } from "@/components";
import React from "react";
import { PrivacyPolicyBackground } from "../../../public/images";
import { strings } from "@/locales";

const TermsAndConditions = () => {
  return (
    <Layout backgrouondImage={PrivacyPolicyBackground}>
      <HeroSection
        subtitle={strings.termsAndConditions}
        subtitleClassName={"uppercase"}
        title={strings.yourAgreement}
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
        leftContainerClassName={
          "w-[66%] md:w-auto md:col-span-7 lg:col-span-6 xl:col-span-5 2xl:col-span-6"
        }
        rightContainerClassName={"md:col-span-5 lg:col-span-6 xl:col-start-7"}
      />
      <WrapperContainer className={"mt-10"}>
        <p className="text-c_101010 font-extrabold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:leading-[46px] capitalize">
          {strings.effectiveDate}
        </p>
        <p className="mt-5 font-medium text-sm md:text-base lg:text-xl text-c_101010">
          {strings.agreementDescription}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5">
          {strings.agreements.map((value, index) => {
            return (
              <div key={index}>
                <p className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl capitalize text-c_101010">
                  {value.title}
                </p>
                <p className="font-normal text-xs md:text-sm lg:text-lg text-c_101010">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-c_101010">
            {strings.ifYouHaveAnyQuestionsOrConcerns}
          </p>
          <p className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-c_101010">
            {strings.thanksYouForChoosing}
          </p>
        </div>
      </WrapperContainer>
    </Layout>
  );
};

export default TermsAndConditions;
