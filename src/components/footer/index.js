import { footerItems } from "@/constants/footer.constants";
import { routes } from "@/constants/route.constants";
import { services } from "@/constants/services.constants";
import { strings } from "@/locales";
import Image from "next/image";
import { useRouter as useNavigation } from "next/navigation";
import { useState } from "react";
import { Button, Divider, Input, WrapperContainer } from "..";
import {
  Arrow,
  BlueArrow,
  Facebook,
  FooterBackground,
  FooterLogo,
  FooterSectionBackground,
  Linkedin,
  Twitter,
} from "../../../public/images";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import HeadingSectionH3 from "../headingSectionH3";

const Footer = ({}) => {
  const router = useNavigation();
  const [isHover, setIsHover] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  return (
    <div id="contact-us-form" className="">
      <WrapperContainer>
        <div className="flex items-center mx-auto z-[1] relative -bottom-8">
          <Image
            src={FooterSectionBackground}
            alt={"footer section background"}
            title={"footer section background"}
            width={100}
            height={100}
            className="w-full h-full xl:w-full xl:h-full object-cover z-0 absolute top-0 left-0 rounded-3xl"
          />

          <div className="relative w-full z-[2] flex flex-col md:flex-row justify-between items-center p-5 md:px-7 lg:p-9 xl:p-[60px] gap-5 lg:gap-10 xl:gap-20">
            <div className="md:w-3/5">
              <HeadingSectionH3
                title={strings.yourJourneyToDigital}
                titleClassName={`text-c_FFFFFF !font-semibold !text-base md:!text-xl lg:!text-3xl lg:!leading-[40px] xl:!text-4xl xl:!leading-[46px] 2xl:!text-5xl 2xl:!leading-[56px]`}
              />
              <Paragraph
                description={strings.perfectSolutionsTake}
                descriptionClassName={`text-c_FFFFFF mt-2 md:mt-3 text-justify`}
              />
            </div>
            <div className="w-full md:w-2/5 mt-4 md:mt-0">
              <Input
                placeholder={strings.name}
                type="text"
                error={error}
                inputClassName="text-base xl:text-lg 2xl:text-2xl placeholder:text-c_FFFFFF"
                labelClassName="text-base xl:text-lg 2xl:text-2xl"
                value={name}
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
              />
              <Button
                title={
                  <span className="relative z-10 flex justify-center items-center gap-2">
                    {strings.send}
                    <Image
                      src={isHover ? BlueArrow : Arrow}
                      width={20}
                      height={20}
                      alt={"arrow"}
                      title={"arrow"}
                      className="w-[10px] h-[10px] md:w-3 md:h-3"
                    />
                  </span>
                }
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                onClick={() => {
                  if (name?.length > 0) {
                    setError(false);
                    window.open(
                      `https://calendly.com/connect-o16-labs/consultations?name=${name}`,
                      "_blank"
                    );
                  } else {
                    setError(true);
                  }
                }}
                className="text-c_FFFFFF border border-c_FFFFFF mt-5 h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] hover:before:bg-c_FFFFFF relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-c_FFFFFF before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full"
              />
            </div>
          </div>
        </div>
      </WrapperContainer>
      <div className="relative">
        <Image
          // priority
          src={FooterBackground}
          alt={"footer background"}
          title={"footer background"}
          width={100}
          height={100}
          className="w-full h-full xl:w-full xl:h-full object-cover object-right z-0 absolute top-0 right-0"
        />
        <WrapperContainer className={``}>
          <div className={`relative w-full z-[1] py-12 xl:py-16 2xl:py-28`}>
            <p className="lg:text-base xl:text-xl text-c_FFFFFF ">
              {strings.ourDetails}
            </p>
            <div className="mt-6 2xl:mt-10 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4 md:gap-10 lg:gap-8">
              <div className="w-full md:w-auto">
                <h3 className="text-c_FFFFFF m-0 font-bold text-base md:text-lg lg:text-xl xl:text-[24px] 2xl:text-3xl xl:leading-[38px]">
                  {strings.newYork}
                </h3>
                <p className="mt-3 md:mt-4 lg:mt-[18px] 2xl:mt-7 font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.newYorkaddressOne}
                </p>
                <p className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.newYorkaddressTwo}
                </p>
                <p className="mt-3 md:mt-4 lg:mt-[18px] 2xl:mt-7 font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  <a href={`tel:${strings.newYorkPhoneNumber}`}>
                    {strings.newYorkPhoneNumber}
                  </a>
                </p>
              </div>
              <Divider
                className={
                  "bg-c_FFFFFF !mt-8 !w-full md:!w-px lg:!mt-11 lg:!h-20 2xl:!mt-12 2xl:!h-32"
                }
              />
              <div className="w-full md:w-auto">
                <h3 className="text-c_FFFFFF m-0 font-bold text-base md:text-lg lg:text-xl xl:text-[24px] 2xl:text-3xl lg:leading-[38px]">
                  {strings.sanAntonio}
                </h3>
                <p className="mt-3 md:mt-4 lg:mt-[18px] 2xl:mt-7 font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.sanAntonioAddressOne}
                </p>
                <p className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.sanAntonioAddressTwo}
                </p>
              </div>
              <Divider
                className={
                  "bg-c_FFFFFF !w-full md:!w-px !mt-8 lg:!mt-11 lg:!h-20 2xl:!mt-12 2xl:!h-32"
                }
              />
              <div className="w-full md:w-auto">
                <h3 className="text-c_FFFFFF m-0 font-bold text-base md:text-lg lg:text-xl xl:text-[24px] lg:leading-[38px] 2xl:text-3xl">
                  {strings.pakistan}
                </h3>
                <p className="mt-3 md:mt-4 lg:mt-[18px] 2xl:mt-7 font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.pakistanAddressOne}
                </p>
                <p className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  {strings.pakistanAddressTwo}
                </p>
                <p className="mt-3 md:mt-4 lg:mt-[18px] 2xl:mt-7 font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF">
                  <a href={`tel:${strings.pakistanPhoneNumber}`}>
                    {strings.pakistanPhoneNumber}
                  </a>
                </p>
              </div>
            </div>
            <Divider
              className={
                "bg-c_FFFFFF !w-full lg:!w-3/4 !h-px z-[1] mt-10 md:my-10"
              }
            />
            <div className="relative z-[1] flex flex-col md:flex-row justify-start items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
              <div className="w-full md:w-auto">
                <Image
                  src={FooterLogo}
                  alt={"footer logo"}
                  title={"footer logo"}
                  width={80}
                  height={80}
                  className="w-40 xl:w-48 2xl:w-52 mx-auto"
                />
                <div className="flex mt-8 w-40 xl:w-48 2xl:w-52 mx-auto">
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/O16Labs/",
                        "_blank"
                      );
                    }}
                    title={
                      <>
                        <Image
                          src={Facebook}
                          alt="facebook"
                          title="facebook"
                          className="w-auto mr-6 h-10 resize"
                        />
                      </>
                    }
                    className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2"
                  />
                  <Button
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/company/o16-labs",
                        "_blank"
                      );
                    }}
                    title={
                      <>
                        <Image
                          src={Linkedin}
                          alt="Linkedin"
                          title="Linkedin"
                          className="w-auto mr-6 h-10 resize"
                        />
                      </>
                    }
                    className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2"
                  />
                  <Button
                    onClick={() => {
                      window.open("https://twitter.com/o16labs", "_blank");
                    }}
                    title={
                      <>
                        <Image
                          src={Twitter}
                          alt="Twitter"
                          title="Twitter"
                          className="w-auto mr-6 h-10 resize"
                        />
                      </>
                    }
                    className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2"
                  />
                </div>
              </div>
              <div className="w-full md:w-fit flex justify-between mt-4 md:justify-start md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                <div>
                  {footerItems.map((value, index) => {
                    return (
                      <div
                        onClick={() => {
                          router.push(value.route);
                        }}
                        key={"footer-links-1-" + index}
                        className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2 mt-2 2xl:mt-5 cursor-pointer capitalize"
                      >
                        <span className="w-2 h-[2px] rounded-sm bg-c_089DE5 uppercase" />{" "}
                        {value.name.toLowerCase()}
                      </div>
                    );
                  })}
                </div>
                <div>
                  {services.map((services, index) => {
                    return (
                      <div
                        onClick={() => {
                          router.push(routes.services + "/" + services.slug);
                        }}
                        key={services.name + "-" + index}
                        className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2 mt-2 2xl:mt-5 cursor-pointer "
                      >
                        <span className="w-2 h-[2px] rounded-sm bg-c_089DE5" />{" "}
                        {services.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full min-w-fit md:w-auto flex mt-9 flex-row md:flex-col flex-wrap justify-evenly items-center md:items-start gap-5">
                {/* <Button
                  onClick={() => {
                    window.open("https://www.facebook.com/O16Labs/", "_blank");
                  }}
                  title={
                    <>
                      <Image
                        src={Facebook}
                        alt="facebook"
                        width={20}
                        height={20}
                        className="w-auto mr-6 h-5 xl:h-7 2xl:h-9 resize"
                      />
                      {strings.facebook}
                    </>
                  }
                  className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2"
                />
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/o16-labs",
                      "_blank"
                    );
                  }}
                  title={
                    <>
                      <Image
                        src={Linkedin}
                        alt="linkedin"
                        width={20}
                        height={20}
                        className="w-auto mr-2 h-5 xl:h-7 2xl:w-9 resize"
                      />
                      {strings.linkedin}
                    </>
                  }
                  className="font-normal text-xs lg:text-base 2xl:text-xl text-c_FFFFFF flex justify-start items-center gap-2"
                /> */}
                {/* <Button
                  className="font-normal text-xs lg:text-base 2xl:text-2xl text-c_FFFFFF flex justify-start items-center gap-2"
                  title={
                    <>
                      <Image
                        src={Twitter}
                        alt="twitter"
                        width={20}
                        height={20}
                        className="w-auto mr-1 h-5 xl:h-7 2xl:h-auto 2xl:w-9 resize"
                      />
                      {strings.twitter}
                    </>
                  }
                /> */}
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default Footer;
