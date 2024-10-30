import React from "react";

const WrapperContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={`container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-40 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default WrapperContainer;
