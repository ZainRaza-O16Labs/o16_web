import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import Button from "../button";
import { Arrow, BlueArrow } from "../../../public/images";
import Image from "next/image";
import { strings } from "@/locales";

const MagneticButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [containerRect, setContainerRect] = useState({});
  const [buttonRect, setButtonRect] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  const loadTawkToScript = () => {
    // console.log(
    //   window.Tawk_API.toggle,
    //   window.Tawk_API.getWindowType(),
    //   window.Tawk_API.onBeforeLoaded,
    //   "tawkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    // );
    if (window.Tawk_API) {
      // If Tawk_API is available, just toggle the chat window
      if (typeof window.Tawk_API.toggle === "function") {
        try {
          window.Tawk_API?.toggle();
        } catch (err) {
          console.error("Error");
        }
      }
      return;
    }

    // Load the script if Tawk_API is not available
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/6674311feaf3bd8d4d12af90/1i0qtvp7p";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.head.appendChild(s1);

    // Optional: Set up a listener to handle chat widget visibility when it loads
    s1.onload = () => {
      if (typeof window.Tawk_API.toggle === "function") {
        window.Tawk_API.toggle(); // Optionally open the chat widget
      }
    };
  };

  // Update container and button dimensions on initial render and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && buttonRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
        setButtonRect(buttonRef.current.getBoundingClientRect());
      }
    };

    updateDimensions(); // Initial call

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRect || !buttonRect || !buttonRef.current) return;

      setIsMoving(true); // Set moving state to true

      const { left, top } = containerRect;
      const mousePosX = e.clientX - left;
      const mousePosY = e.clientY - top;

      // Calculate button position within the container
      const halfWidth = buttonRect.width / 2;
      const halfHeight = buttonRect.height / 2;
      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;

      const constrainedX = Math.max(0, Math.min(mousePosX - halfWidth, maxX));
      const constrainedY = Math.max(0, Math.min(mousePosY - halfHeight, maxY));

      // Request animation frame for smoother movement
      requestAnimationFrame(() => {
        gsap.to(buttonRef.current, {
          x: constrainedX * 0.2, // Adjust multiplier for tighter or looser tracking
          y: constrainedY * 0.2, // Adjust multiplier for tighter or looser tracking
          duration: 0.4, // Shorter duration for more responsive tracking
          ease: "power3.out",
          scale: 0.8,
        });
      });
    },
    [containerRect, buttonRect]
  );

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsMoving(false); // Set moving state to false

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      scale: 1,
      ease: "elastic.out(1,0.3)",
    });
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-[200px] w-[200px] flex-1  relative overflow-hidden   hidden lg:flex items-center justify-center `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={loadTawkToScript}
    >
      <div
        ref={buttonRef}
        className={`absolute top-1/2 left-1/2 transform   xl:h-[160px] xl:w-[160px]
          h-[120px] w-[120px]
          overflow-hidden !rounded-full -translate-x-1/2 flex items-center justify-center -translate-y-1/2 ${
            isMoving
              ? "scale-90 bg-white magnet_button_shadow"
              : "scale-110 transition-all duration-500 bg-primary text-white"
          }`}
      >
        <Button
          image={false}
          title={
            <span className="relative z-10 flex flex-col justify-center items-center gap-2">
              <Image
                src={isMoving ? BlueArrow : Arrow}
                alt="Arrow"
                title="Arrow"
                width={20}
                loading="lazy"
                height={20}
                className={`lg:w-10 lg:h-10 !h-8 !w-8 md:w-3 md:h-3 ${
                  isMoving ? "text-white" : "text-blue-500"
                }`}
              />
              <p
                className={`text-sm ${
                  isMoving ? "text-c_000000" : "text-c_FFFFFF"
                } xl:text-sm text-xs`}
              >
                {strings.letsDiscussYourProject}
              </p>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default MagneticButton;
