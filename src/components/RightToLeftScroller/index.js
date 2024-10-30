import React, { useEffect, useRef } from "react";
// import "./RightToLeftScroller.css"; // Ensure this imports your CSS

const RightToLeftScroller = ({
  items,
  speed = "slow",
  renderItem,
  direction = "left", // Default direction can be "right" or "left"
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerRef.current.querySelector(".scroller__inner");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollerInner);
    }

    function addAnimation(inner) {
      // Set data-animated attribute
      inner.parentElement.setAttribute("data-animated", true);

      // Clone each child and append it to the inner scroller
      const scrollerContent = Array.from(inner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        inner.appendChild(duplicatedItem);
      });
    }
  }, [items]);

  return (
    <div
      className="scroller"
      data-speed={speed}
      data-direction={direction} // Use the direction prop for scrolling
      ref={scrollerRef}
    >
      <ul className="tag-list scroller__inner">
        {items.map((item, index) => (
          <li key={index}>{renderItem(item, index)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RightToLeftScroller;
