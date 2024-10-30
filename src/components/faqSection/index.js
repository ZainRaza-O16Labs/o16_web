import { strings } from "@/locales";
import { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { FaMinus, FaPlus } from "react-icons/fa";
import Divider from "../divider";
import WrapperContainer from "../wrapperContainer";

const FaqSection = ({ faqs }) => {
  const [open, setOpen] = useState(-1);
  return (
    <WrapperContainer className={"mb-16"}>
      <h3 className="text-center m-0 font-extrabold text-2xl md:text-3xl 2xl:text-5xl text-c_2B2B2B capitalize">
        {strings.faq}
      </h3>
      <div className="mt-5 bg-c_FFFFFF shadow-customShadow rounded-[18px] px-5 py-6 md:px-10 md:py-12">
        {faqs?.map((value, index) => {
          return (
            <div key={index}>
              <div
                className="cursor-pointer py-5"
                onClick={() => {
                  if (open == index) {
                    setOpen(-1);
                  } else {
                    setOpen(index);
                  }
                }}
              >
                <div className="flex justify-between items-center gap-2">
                  <h3
                    className={` ${
                      open == index
                        ? "text-primary m-0 font-semibold text-base md:text-lg lg:text-lg 2xl:text-xl"
                        : "font-medium m-0 text-c_2A2A2A text-sm md:text-base lg:text-lg 2xl:text-xl"
                    }`}
                  >
                    {value.question}
                  </h3>
                  <div className="w-3 h-3 flex-shrink-0 flex-grow-0">
                    {open == index ? (
                      <FaMinus
                        color="#4A3AFF"
                        size={12}
                        className="aspect-square"
                      />
                    ) : (
                      <FaPlus color="#170F49" size={12} />
                    )}
                  </div>
                </div>
                <UnmountClosed isOpened={open == index}>
                  <p
                    className="my-2 text-sm 2xl:text-base overflow-scroll md:overflow-auto pt-3"
                    dangerouslySetInnerHTML={{ __html: value.answer }}
                  ></p>
                </UnmountClosed>
              </div>
              {index != faqs.length - 1 && (
                <Divider className={"!w-full !h-px bg-c_D9DBE9"} />
              )}
            </div>
          );
        })}
      </div>
    </WrapperContainer>
  );
};

export default FaqSection;
