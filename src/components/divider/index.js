import React from "react";

const Divider = ({ className }) => {
  return (
    <div
      className={`w-4/5 h-[1px] my-4 md:my-0 md:w-px md:h-[72px] bg-c_2B2B2B opacity-35 ${className}`}
    />
  );
};

export default Divider;
