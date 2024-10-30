import React, { useEffect, useState } from "react";

const CustomRightArrow = ({
  onClick,
  className,
  color,
  hoverColor,
  clickState,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <button
        aria-label='right'
        onClick={onClick}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        className={`absolute bottom-6 right-14 ${className}`}
      >
        {/* Add your custom left arrow icon or text here */}
        <svg
          className="xl:w-auto xl:h-auto w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <circle
            cx="22.9521"
            cy="23.3105"
            r="22"
            stroke={(hover ? hoverColor : color) || "#fff"}
          />
          <path
            d="M14.4521 23.0605C14.0379 23.0605 13.7021 23.3963 13.7021 23.8105C13.7021 24.2248 14.0379 24.5605 14.4521 24.5605L14.4521 23.0605ZM29.9825 24.3409C30.2754 24.048 30.2754 23.5731 29.9825 23.2802L25.2095 18.5072C24.9166 18.2144 24.4417 18.2144 24.1488 18.5072C23.856 18.8001 23.856 19.275 24.1488 19.5679L28.3915 23.8105L24.1488 28.0532C23.856 28.3461 23.856 28.821 24.1488 29.1138C24.4417 29.4067 24.9166 29.4067 25.2095 29.1138L29.9825 24.3409ZM14.4521 24.5605L29.4521 24.5605L29.4521 23.0605L14.4521 23.0605L14.4521 24.5605Z"
            fill={(hover ? hoverColor : color) || "#fff"}
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomRightArrow;
