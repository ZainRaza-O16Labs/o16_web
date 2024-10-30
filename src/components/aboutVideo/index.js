import Image from "next/image";
import WrapperContainer from "../wrapperContainer";
import gsap from "gsap";

import React, { useState, useEffect, useRef } from "react";
import { DashboardImages } from "@/constants/home.banner.constants";
import { useInView } from "react-intersection-observer";

const AboutVideo = ({ isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const images = DashboardImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const mainDeivRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainDeivRef.current,
      {
        // y: -40,
        scale: 1.5,
        z: 600,
        y: 0,
        opacity: 0,
      },
      {
        // y: 50,
        scale: 0.97,
        z: 0,
        y: 30,
        x: -10,
        opacity: 1,
        duration: 0.8,
        yoyo: true,
        scrollTrigger: {
          trigger: mainDeivRef.current,
          y: 1000,
        },
      }
    );
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Set up the auto-slide interval
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <WrapperContainer>
      <div
        ref={ref}
        className="bg-c_000000 rounded-3xl overflow-hidden mb-16 mx-auto  "
      >
        <div
          className="slider__slider   mx-auto   rounded-3xl"
          ref={mainDeivRef}
        >
          <ul className="items__slider  rounded-3xl relative">
            {images.map((src, index) => (
              <li
                key={index}
                className={`item__slider rounded-3xl ${
                  index === currentIndex ? "current__slider" : ""
                } `}
                style={{ borderRadius: 30 }}
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  objectFit="cover"
                  loading="lazy"
                  className=""
                  style={{ borderRadius: 30 }}
                />
              </li>
            ))}
          </ul>
          {/* <ul className="items__slider  h-[600px] rounded-3xl">
            {images.map((src, index) => (
              <li
                key={index}
                className={`item__slider  rounded-3xl ${
                  index === currentIndex ? "current__slider !h-full" : ""
                } `}
                style={{ borderRadius: 30 }}
              >
                <Image
                  src={src}
                  alt={`Slide ${index} `}
                  objectFit="cover"
                  // className="!h-full w-full  rounded-3xl  "
                  style={{ borderRadius: 30 }}
                />
              </li>
            ))}
          </ul> */}
          {/* <div className="buttons__slider">
          <button
            type="button__slider"
            className="button__slider prev__slider"
            onClick={() => handleButtonClick("prev")}
          ></button>
          <button
            type="button__slider"
            className="button__slider next__slider"
            onClick={() => handleButtonClick("next")}
          ></button>
        </div> */}
          {/* <div className="dots__slider">
          {images.map((_, index) => (
            <button
              key={index}
              type="button__slider"
              className={`dot__slider ${
                index === currentIndex ? "current__slider" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div> */}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default AboutVideo;
