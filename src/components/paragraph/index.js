import React from "react";

const Paragraph = ({
  description,
  descriptionClassName,
  dangerouslySetInnerHTML,
}) => {
  return (
    <p
      className={`font-normal 2xl:text-base 2xl:leading-[28px] text-sm md:leading-5 ${descriptionClassName}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {description}
    </p>
  );
};

export default Paragraph;
