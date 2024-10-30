import { strings } from "@/locales";
import { dateFormat } from "@/utils/date_functions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BlueArrow, Calendar } from "../../../public/images";
import Button from "../button";
import Link from "next/link";

const DigitalMarketingCard = ({ data, containerClass }) => {
  const router = useRouter();
  const [arrowHover, setArrowHover] = useState(false);
  return (
    <div
      className={`min-w-fit h-full flex flex-col max-w-full rounded-[15px] overflow-hidden bg-c_F3F4F5 ${containerClass}`}
    >
      <Link href={`/blog/${data?.slug}`}>
      <Image
        src={data?.acf?.image}
        alt="Digital Marketing"
        title="Digital Marketing"
        width={1600}
        height={900}
        className="w-full aspect-video cursor-pointer"
        onClick={() => {
          router.push(`/blog/${data?.slug}`);
        }}
      />
      <div className="p-4 flex-grow flex flex-col justify-start">
        <div className="flex justify-start items-center gap-5">
          <div className="flex justify-start items-center gap-2">
            <Image
              src={Calendar}
              alt="Calendar"
              title="Calendar"
              width={15}
              height={15}
            />
            <p className="text-c_000000 text-sm">{dateFormat(data?.date)}</p>
          </div>          
        </div>
        <div className="mt-2 mb-3">
          <p
            className="text-c_0B0B0B text-xl font-bold cursor-pointer"
            onClick={() => {
              router.push(`/blog/${data?.slug}`);
            }}
          >
            {data?.acf?.title}
          </p>
          <p
            className="text-c_000000 mt-2 text-sm overflow-hidden line-clamp-5 cursor-pointer"
            dangerouslySetInnerHTML={{
              __html: data?.yoast_head_json?.description,
            }}
            onClick={() => {
              router.push(`/blog/${data?.slug}`);
            }}
          ></p>
        </div>
        <div className="flex justify-between items-center gap-3 mt-auto">
          <Button
            title={
              <span className="relative flex justify-center items-center gap-2 z-10">
                {strings.readMore}
                <Image
                  src={BlueArrow}
                  className="relative w-[14px] z-10"
                  alt="Arrow"
                  title="Arrow"
                  width={8}
                  height={8}
                />
              </span>
            }
            onClick={() => {
              router.push(`/blog/${data?.slug}`);
            }}
            className="font-bold text-xl text-c_089DE5 hover:text-toprimary "
          />        
        </div>
      </div>
      </Link>
    </div>
  );
};

export default DigitalMarketingCard;
