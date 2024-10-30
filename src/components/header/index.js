import { headerItems } from "@/constants/header.constants";
import { services } from "@/constants/services.constants";
import { strings } from "@/locales";
import Image from "next/image";
import { useRouter as useNavigation } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Collapse } from "react-collapse";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Ecommerece, Logo, Services } from "../../../public/images";
import Button from "../button";
import WrapperContainer from "../wrapperContainer";
import Modal from "../modal";
import ContactFormDialog from "../ContactFormDialog";
import ContactUSForm from "../ContactUSForm";
import Link from "next/link";
/**
 * Function component for rendering the Header.
 *
 * @return {JSX.Element} The rendered JSX element
 */
const Header = () => {
  const router = useNavigation();
  const { pathname, asPath } = useRouter();
  const pathArray = asPath.split("/");
  const [openHeader, setOpenHeader] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHover, setIsHover] = useState(-1);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > 120) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isSticky
          ? "sticky top-0 duration-500 animate-slideDown translate-y-0"
          : ""
      } relative w-full z-[2000] `}
    >
      <div
        className={`hidden w-full bg-c_FFFFFF md:flex justify-between items-center  ${
          isSticky ? "py-3" : "py-2"
        } gap-[30px]`}
      >
        <WrapperContainer className={`flex justify-between items-center`}>
          {/* <div className="flex justify-start items-center gap-[30px] md:gap-10 lg:gap-[50px] xl:gap-[100px] 2xl:gap-[140px]"> */}
          <Button
            title={
              <Image
                src={Logo}
                alt="logo"
                title="logo"
                width={80}
                height={50}
                className={`${isSticky ? "w-16 h-[40px]" : "w-auto h-[45px]"} ${
                  isSticky ? "xl:w-20 xl:h-[50px]" : "xl:w-[123px] xl:h-[77px]"
                } resize`}
              />
            }
            onClick={() => {
              router.push("/");
            }}
          />
          <div className="flex justify-start items-center gap-5 lg:gap-[25px] xl:gap-10 2xl:gap-[60px] flex-shrink-0">
            {headerItems.map((value, index) => {
              return value.route == "/services" ? (
                <div
                  key={value.route + "_" + index}
                  onMouseOver={() => {
                    setShowDropdown(true);
                  }}
                  onMouseOut={() => {
                    setShowDropdown(false);
                  }}
                >
                  <Link href={value.route}>
                    <Button
                      key={value.name + "-" + index}
                      title={
                        <>
                          {value.name}
                          <GoChevronDown
                            size={16}
                            color={
                              value.route == "/" + pathArray[1]
                                ? "#087DBD"
                                : "#2B2B2B"
                            }
                          />
                        </>
                      }
                      className={`${
                        value.route == "/" + pathArray[1]
                          ? "bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold"
                          : "text-c_2B2B2B font-medium"
                      } text-xs h-full lg:text-base uppercase flex justify-center items-center gap-1`}
                      onClick={() => {
                        setShowDropdown(false);
                        router.push(value.route);
                      }}
                    />
                  </Link>
                  <WrapperContainer
                    className={`pt-2 w-full h-fit absolute left-2/4 -translate-x-2/4 ${
                      showDropdown ? "" : "hidden"
                    }`}
                  >
                    <div
                      className={`mx-auto w-9/12 h-full bg-c_FFFFFF rounded-xl shadow-headerShadow overflow-hidden px-2 py-4 lg:p-5 grid grid-cols-12 gap-5`}
                    >
                      <div className="col-span-4 pl-3 lg:pl-0 xl:pl-5 pr-4 lg:pr-6 border-r border-c_EDEDED">
                        <p className="text-lg lg:text-2xl font-extrabold text-c_2B2B2B mb-2">
                          {strings.ourServices}
                        </p>
                        <Image
                          src={
                            isHover > -1 ? services[isHover].image : Services
                          }
                          width={1200}
                          height={800}
                          alt="services"
                          title="services"
                          className="w-full h-auto aspect-video"
                          unoptimized
                        />
                      </div>
                      <div className="col-span-7 grid grid-cols-2 grid-rows-3 xl:px-5 gap-2">
                        {services.map((service, index) => {
                          return (
                            <Link
                              href={value.route + "/" + service.slug}
                              key={service.name + "-" + index}
                            >
                              <Button
                                title={
                                  <>
                                    <span
                                      className={`w-2 h-[2px] block ${
                                        isHover == index
                                          ? "bg-gradient-to-br from-c_089DE5 to-c_087DBD"
                                          : "bg-c_818181"
                                      }`}
                                    />
                                    {service.name}
                                  </>
                                }
                                className={`px-2 py-2 w-fit text-left hover:bg-gradient-to-br hover:from-c_089DE5 hover:to-c_087DBD hover:bg-clip-text hover:text-transparent text-c_818181 font-medium text-xs lg:text-base xl:text-lg capitalize text-nowrap flex justify-start items-center gap-2`}
                                onMouseOver={() => {
                                  setIsHover(index);
                                }}
                                onMouseOut={() => {
                                  setIsHover(-1);
                                }}
                                onClick={() => {
                                  router.push(value.route + "/" + service.slug);
                                  setShowDropdown(false);
                                }}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </WrapperContainer>
                </div>
              ) : (
                <Link href={value.route}>
                  <Button
                    key={value.name + "-" + index}
                    title={value.name}
                    className={`${
                      value.route == "/" + pathArray[1]
                        ? "bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold"
                        : "text-c_2B2B2B font-medium"
                    } text-xs lg:text-base uppercase`}
                    onClick={() =>
                      value.route != "/careers" && router.push(value.route)
                    }
                  />
                </Link>
              );
            })}
          </div>

          <Button
            // title={strings.phoneNumber}
            className={`
                "text-c_2B2B2B font-medium"
             text-xs lg:text-base uppercase`}
            // onClick={() =>
            //   value.route != "/careers" && router.push(value.route)
            // }
            title={
              <a
                href={`tel:${strings.phoneNumber}`}
                target="_blank"
                className="bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold "
              >
                {strings.phoneNumber}
              </a>
            }
          />
          <Button
            title={
              <span className="relative z-10">{strings.letsStartProject}</span>
            }
            onClick={() => setIsModalOpen(true)}
            className={`h-fit px-4 py-3 lg:px-5 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] text-c_FFFFFF hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-gradient-to-tl from-c_089DE5 to-c_087DBD transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full`}
            // className={`h-fit px-4 py-3 lg:px-5 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] text-primary hover:before:bg-primary relative overflow-hidden border border-primary bg-c_FFFFFF transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-toprimary before:transition-all before:duration-500 hover:text-c_FFFFFF hover:before:left-0 hover:before:w-full`}
            // className={`h-fit px-4 py-3 lg:px-5 lg:py-3 flex-shrink-0 rounded-[60px] bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-c_FFFFFF text-sm lg:text-base font-semibold leading-[104%]    hover:before:bg-c_089DE5 relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-toprimary before:transition-all before:duration-500 hover:text-c_FFFFFF hover:before:left-0 hover:before:w-full`}
          />
        </WrapperContainer>
      </div>
      <div
        className={`w-full bg-c_FFFFFF md:hidden ${
          isSticky ? "py-3" : "py-4"
        } px-4`}
      >
        <div className="flex justify-between items-center ">
          <Button
            title={
              <Image
                src={Logo}
                alt="logo"
                title="logo"
                width={123}
                height={77}
                className="w-20 h-[50px] resize"
              />
            }
            onClick={() => {
              router.push("/");
            }}
          />
          <Button
            title={
              openHeader ? (
                <ImCross color="#087DBD" size={20} className="" />
              ) : (
                <GiHamburgerMenu color="#087DBD" size={25} className="" />
              )
            }
            onClick={() => {
              setOpenHeader((prevState) => !prevState);
            }}
          />
        </div>
        {openHeader && (
          <div className="duration-500 animate-slideDown translate-y-0 flex flex-col justify-center items-center gap-4 mt-4 mb-4 overflow-scroll">
            {headerItems.map((value, index) => {
              return value.route == "/services" ? (
                <div key={index}>
                  <Button
                    key={value.name + "-" + index}
                    title={
                      <div className="flex justify-center text-c_087DBD items-center gap-2">
                        {value.name}
                        {showDropdown ? (
                          <FaChevronUp
                            color={
                              value.route == "/" + pathArray[1]
                                ? "#087DBD"
                                : "#087DBD"
                            }
                          />
                        ) : (
                          <FaChevronDown
                            color={
                              value.route == "/" + pathArray[1]
                                ? "#087DBD"
                                : "#087DBD"
                            }
                          />
                        )}
                      </div>
                    }
                    className={`${
                      value.route == "/" + pathArray[1]
                        ? "bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold"
                        : "text-c_2B2B2B font-medium"
                    } block w-full text-lg text-center uppercase`}
                    onClick={() => setShowDropdown((prevState) => !prevState)}
                  />
                  <Collapse isOpened={showDropdown}>
                    <div className="grid grid-cols-1 mt-3 gap-2">
                      <Button
                        key={"All Services" + "-" + index}
                        title={"All Services"}
                        className={`block w-full text-center text-c_2B2B2B font-medium text-base uppercase`}
                        onClick={() => {
                          router.push(value.route);
                          setOpenHeader(false);
                        }}
                      />
                      {services.map((service, index) => {
                        return (
                          <Button
                            key={service.name + "-" + index}
                            title={service.name}
                            className={`block w-full text-center text-c_2B2B2B font-medium text-base uppercase`}
                            onClick={() => {
                              router.push(value.route + "/" + service.slug);
                              setOpenHeader(false);
                            }}
                          />
                        );
                      })}
                    </div>
                  </Collapse>
                </div>
              ) : (
                <Button
                  key={value.name + "-" + index}
                  title={value.name}
                  className={`${
                    value.route == "/" + pathArray[1]
                      ? "bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold"
                      : "font-medium text-c_087DBD"
                  } text-lg text-center uppercase text-c_087DBD`}
                  onClick={() => {
                    value.route != "/careers" && router.push(value.route);
                    setOpenHeader(false);
                  }}
                />
              );
            })}
            <Button
              // title={strings.phoneNumber}
              className={`
                "text-c_2B2B2B font-medium"
             uppercase`}
              // onClick={() =>
              //   value.route != "/careers" && router.push(value.route)
              // }
              title={
                <a
                  href={`tel:${strings.phoneNumber}`}
                  target="_blank"
                  className="bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text font-extrabold "
                >
                  {strings.phoneNumber}
                </a>
              }
            />
            <Button
              title={strings.letsStartProject}
              onClick={() => setIsModalOpen(true)}
              className="w-fit h-[50px] px-5 flex-shrink-0 rounded-[60px] bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-c_FFFFFF text-lg font-semibold leading-[104%] "
            />
          </div>
        )}
      </div>

      <ContactFormDialog
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={
          <div className="flex flex-col justify-center items-center gap-2">
            <span>{strings.getExclusiveDiscounts}</span>
            <span className="text-sm text-center font-normal text-c_818181">
              {strings.offeringARangeOfCompetetive}
            </span>
          </div>
        }
        className="!w-[450px] bg-c_424242"
      >
        <ContactUSForm />
      </ContactFormDialog>
    </div>
  );
};

export default Header;
