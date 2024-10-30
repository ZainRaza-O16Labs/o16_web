import DigitalMarketingCard from "@/components/digitalMarketingCard";
import Pagination from "@/components/pagination";
import React from "react";

const BlogCard = ({ data }) => {
  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-10 gap-5">
        {data?.map((value, index) => {
          return (
            <DigitalMarketingCard
              containerClass={"h-full"}
              key={index}
              data={value}
            />
          );
        })}
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default BlogCard;
