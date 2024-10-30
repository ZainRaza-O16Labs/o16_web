import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const GoToTop = () => {
  const [isVisble, SetIsVisible] = useState(false);
  const ListenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      SetIsVisible(true);
    } else {
      SetIsVisible(false);
    }
  };
  const goToButton = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  useEffect(() => {
    window.addEventListener("scroll", ListenToScroll);
  }, []);
  return (
    <div>
      {isVisble && (
        <div
          className="text-c_F2F2F2 z-[2000] cursor-pointer fixed sm:bottom-28 bottom-14 right-6 bg-c_089DE5 rounded-full p-4"
          onClick={goToButton}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
