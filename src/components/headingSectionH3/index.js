import React from "react";

const HeadingSectionH3 = ({
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  containderClassName,
}) => {
  return (
    <div className={`${containderClassName}`}>
      {subtitle && (
        <h3
          className={`2xl:text-lg md:text-sm text-xs font-medium bg-gradient-to-tl from-c_089DE5 to-c_087DBD bg-clip-text text-transparent uppercase ${subtitleClassName}`}
        >
          {subtitle}
        </h3>
      )}
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        className={`font-extrabold m-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] text-c_2B2B2B ${titleClassName}`}
      ></h3>
    </div>
  );
};

export default HeadingSectionH3;
