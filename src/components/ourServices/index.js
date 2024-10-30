import { servicesItems } from "@/constants/services.constants";
import { strings } from "@/locales";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Arrow,
  BlueArrow,
  ServicesArrow,
  ServicesBlueArrow,
} from "../../../public/images";
import Button from "../button";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";
import WrapperContainer from "../wrapperContainer";
import { gsap } from "gsap";
import { selectServices } from "@/store/slices/services";

const OurServices = ({ isMobile = false }) => {
  const [currentIndices, setCurrentIndices] = useState([1, 2]);
  const [isHover, setIsHover] = useState(false);
  const [selcetedService, setSelecetdService] = useState(servicesItems[0]);

  const router = useRouter();

  // Function to update the indices
  const updateIndices = (selected = servicesItems[0].id) => {
    setCurrentIndices((prevIndices) => {
      const nextIndices = prevIndices.map(
        (index) => (index + 1) % servicesItems.length
      );
      const newNextIndices = nextIndices.map((ele, index) => {
        if (ele === selected || ele == selected?.id) {
          return (ele + 1) % servicesItems.length;
        }
        return ele;
      });

      if (newNextIndices[0] === newNextIndices[1]) {
        newNextIndices[1] = (newNextIndices[1] + 1) % servicesItems.length;
      }
      return newNextIndices;
    });
  };

  useEffect(() => {
    const interval = setInterval(updateIndices, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [selcetedService]);

  useEffect(() => {
    // Animate the transition with stagger effect
    gsap.fromTo(
      ".service-card",
      { opacity: 0.4, y: 0, duration: 1 },
      { opacity: 1, y: 0, duration: 1.5 } // Delay for second card
    );
  }, [currentIndices]);

  return (
    <WrapperContainer className={"py-5 mb-10 md:py-10 xl:pb-0 xl:!border-none"}>
      <div className="grid items-center grid-cols-1 md:grid-cols-12 justify-between xl:pb-10">
        <div className="col-span-6">
          <HeadingSection
            title={`${strings.our} ${strings.services}`}
            titleClassName={`text-c_000000 !font-boldest`}
            containderClassName={`col-span-1 md:col-span-6`}
          />
        </div>
        <Paragraph
          description={
            <>
              {strings.at}{" "}
              <span className="text-primary font-semibold text-base lg:text-lg xl:leading-[26px]">
                {strings.o16labs}
              </span>{" "}
              {strings.weAreDedicated}
            </>
          }
          descriptionClassName={`col-span-1 md:col-span-6 md:col-start-7 mt-5 md:mt-0 text-c_000000`}
        />
      </div>
      <div className=" overflow-hidden grid grid-cols-12 md:mt-0 mt-8">
        <div className="md:col-span-8 col-span-12 md:p-3 p-0">
          <div
            className="rounded-[34px]"
            style={{
              backgroundImage: `url(${
                // servicesItems[currentIndices[0]].image?.src
                selcetedService.image?.src
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              borderRadius: 34,
            }}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(360deg, #000000 0%, rgba(102, 102, 102, 0.2) 100%)",
                borderRadius: 34,
              }}
              className="h-full flex justify-between flex-col rounded-[34px]"
            >
              <div className={`md:col-span-1 col-span-1 flex p-6 justify-end`}>
                <Button
                  title={
                    <Image
                      className="relative z-10"
                      src={isHover ? ServicesBlueArrow : ServicesArrow}
                      alt="arrow"
                      loading="lazy"
                      title="arrow"
                      width={12}
                      height={12}
                    />
                  }
                  // className={`xl:p-4 md:p-2 p-[6px] ml-0 md:ml-2 rounded-full text-c_FFFFFF hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full`}
                  className={`xl:p-6 md:p-2 p-[6px] ml-0 md:ml-2 rounded-full  hover:before:bg-c_FFFFFF relative overflow-hidden border border-c_FFFFFF bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-transparent hover:before:left-0 hover:before:w-full  hover:before:border-primary`}
                  onClick={() => router.push(selcetedService.route)}
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                />
              </div>
              <div className="p-6">
                <HeadingSection
                  title={selcetedService.title?.slice(3)}
                  titleClassName={`!text-c_FFFFFF !font-boldest !lg:text-[36px] mb-5`}
                  containderClassName={`col-span-1 md:col-span-6`}
                />

                <Paragraph
                  dangerouslySetInnerHTML={{
                    __html: selcetedService.description,
                  }}
                  descriptionClassName={`col-span-1 md:col-span-6 md:col-start-7 mt-5 md:mt-0 text-c_FFFFFF`}
                />
                {/* <HeadingSection
                    title={selcetedService.description}
                    titleClassName={`!text-c_FFFFFF  lg:!text-[14px] xl:!leading-[20px]  2xl:!leading-[30px] !font-[300]`}
                    containderClassName={`col-span-1 md:col-span-6 mt-3`}
                  /> */}
                {/* <Paragraph
                    dangerouslySetInnerHTML={selcetedService.description}
                    descriptionClassName={`col-span-1 md:col-span-6 md:col-start-7 mt-5 md:mt-0 !text-c_FFFFFF !lg:text-[18px] !mt-3`}
                  /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12 pt-3 ">
          {currentIndices.map((index) => (
            <div
              className="service-card h-[250px] mb-[10px] cursor-pointer"
              key={servicesItems[index].route}
              onClick={() => {
                setSelecetdService(servicesItems[index]);
                updateIndices(index);
              }}
            >
              <div
                className="rounded-[34px]"
                style={{
                  backgroundImage: `url(${servicesItems[index].image?.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "100%",
                  borderRadius: 34,
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(360deg, #000000 0%, rgba(102, 102, 102, 0.2) 100%)",
                    borderRadius: 34,
                  }}
                  className="h-full flex justify-end flex-col rounded-[34px]"
                >
                  <div className="px-6 py-3">
                    <HeadingSection
                      title={servicesItems[index].title.slice(3)}
                      titleClassName={`!text-c_FFFFFF !font-boldest md:!text-[24px]`}
                      containderClassName={`col-span-1 md:col-span-6`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default OurServices;
