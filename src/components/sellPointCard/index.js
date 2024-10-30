import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SellPointCard = ({ value, isOpen = -1, setIsOpen = () => {}, index }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onMouseOver={() => {
          setOpen(true);
        }}
        onMouseOut={() => {
          setOpen(false);
        }}
        onClick={() => {
          value?.slug && router.push(`/services/${value?.slug}`);
        }}
        className={`${
          open
            ? "bg-c_089DE5 px-4 py-1 w-full justify-center items-center "
            : "bg-c_FFFFFF w-full px-4 py-8 md:p-8 xl:p-10 2xl:px-12 2xl:py-24 justify-center items-center"
        } border overflow-hidden border-c_D9D9D9 rounded-xl hidden md:flex md:flex-col md:h-[240px] lg:h-[300px] xl:h-[330px] 2xl:h-[360px]  max-w-full aspect-square cursor-pointer`}
      >
        {open ? (
          <div className="animate-fade translate-y-0">
            <h3 className="mt-2 mb-0 font-bold text-base lg:text-lg xl:text-xl text-c_FFFFFF">
              {value.title}
            </h3>
            <p className="mt-1 mb-0 lg:mt-2 text-xs xl:text-sm 2xl:mt-5 text-c_FFFFFF font-normal ">
              {value.description}
            </p>
          </div>
        ) : (
          <>
            <Image
              src={value?.image}
              alt="Network Solutions"
              title="Network Solutions"
              width={50}
              height={50}
              className="w-1/4 lg:w-1/3 h-auto"
            />
            <h3 className="mt-2 mb-0 font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
              {value.title}
            </h3>
          </>
        )}
      </div>
      <div
        onClick={() => {
          value?.slug
            ? router.push(`/services/${value?.slug}`)
            : setIsOpen(index);
        }}
        className={`cursor-pointer flex flex-col ${
          isOpen == index
            ? "bg-c_089DE5 p-4 justify-center items-center"
            : "bg-c_FFFFFF px-4 py-8 md:p-8 xl:p-10 2xl:px-12 2xl:py-24 justify-center items-center"
        } border border-c_D9D9D9 rounded-xl w-full h-auto md:hidden max-w-full aspect-square overflow-hidden`}
      >
        {isOpen == index ? (
          <div className="animate-fade translate-y-0">
            <h3 className="mt-2 font-bold text-base text-c_FFFFFF">
              {value.title}
            </h3>
            <p className="mt-2 md:mt-3 xl:mt-4 text-sm text-c_FFFFFF font-normal overflow-hidden">
              {value.description}
            </p>
          </div>
        ) : (
          <>
            <Image
              src={value?.image}
              alt="Network Solutions"
              title="Network Solutions"
              width={50}
              height={50}
              className="w-1/4 lg:w-1/3 h-auto"
            />
            <p className="mt-2 text-center font-bold text-base">
              {value.title}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default SellPointCard;
