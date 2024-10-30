import React from "react";

const Tags = ({ tagitems }) => {
  return tagitems.map((value, index) => {
    return (
      <div className="bg-c_089DE5 w-fit px-4 md:px-6 py-2 border-0 rounded-full text-c_FFFFFF text-sm md:text-base font-semibold">
        {value}
      </div>
    );
  });
};

export default Tags;
