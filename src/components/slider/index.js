import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({
  renderItem,
  responsive,
  sliderClass,
  items,
  containerClass,
  autoPlay,
  arrows,
  customLeftArrow,
  customRightArrow,
  centerMode,
  transitionSpeed,
  rtl,
  shouldResetAutoplay,
  transitionDuration,
  infinite,
  itemClass,
  slidesToSlide,
  swipeable,
  showDots,
  draggable,
  partialVisible,
  afterChange,
  autoPlaySpeed,
  renderButtonGroupOutside,
  sliderRef,
}) => {
  return (
    <Carousel
      ref={sliderRef}
      afterChange={afterChange}
      additionalTransfrom={0}
      arrows={arrows}
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      centerMode={centerMode}
      className=""
      containerClass={containerClass}
      customLeftArrow={customLeftArrow}
      customRightArrow={customRightArrow}
      customTransition={`all ${transitionSpeed || "3.5s"} linear`}
      dotListClass=""
      focusOnSelect={false}
      sliderClass={`gap-5 ${sliderClass}`}
      infinite={infinite}
      itemClass={itemClass}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover={false}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={renderButtonGroupOutside}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={rtl}
      shouldResetAutoplay={shouldResetAutoplay}
      showDots={showDots}
      slidesToSlide={slidesToSlide || 1}
      swipeable={swipeable}
      transitionDuration={transitionDuration || 1000}
      draggable={draggable}
      partialVisible={partialVisible}
    >
      {items?.length &&
        items?.map((value, index) => {
          return renderItem(value, index);
        })}
    </Carousel>
  );
};

export default Slider;
