import React, { useEffect, useState } from "react";

const CustomLeftArrow = ({
  onClick,
  color,
  hoverColor,
  className,
  clickState,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <button
        aria-label='left'
        onClick={onClick}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        className={`absolute bottom-6 right-28 ${className}`}
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
            cx="22.5"
            cy="22.5"
            r="22"
            transform="matrix(-1 0 0 1 45.4521 0.810547)"
            stroke={(hover ? hoverColor : color) || "#fff"}
          />
          <path
            d="M31.4521 23.0605C31.8664 23.0605 32.2021 23.3963 32.2021 23.8105C32.2021 24.2248 31.8664 24.5605 31.4521 24.5605L31.4521 23.0605ZM15.9218 24.3409C15.6289 24.048 15.6289 23.5731 15.9218 23.2802L20.6948 18.5072C20.9877 18.2144 21.4626 18.2144 21.7554 18.5072C22.0483 18.8001 22.0483 19.275 21.7554 19.5679L17.5128 23.8105L21.7554 28.0532C22.0483 28.3461 22.0483 28.821 21.7554 29.1138C21.4626 29.4067 20.9877 29.4067 20.6948 29.1138L15.9218 24.3409ZM31.4521 24.5605L16.4521 24.5605L16.4521 23.0605L31.4521 23.0605L31.4521 24.5605Z"
            fill={(hover ? hoverColor : color) || "#fff"}
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomLeftArrow;
