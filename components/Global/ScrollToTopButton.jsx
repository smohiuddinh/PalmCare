"use client";
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        type="button"
        onClick={scrollToTop}
        className="w-9 h-9 rounded-full border-[2px] primary-border p-1.5 fixed bottom-6 right-2 lg:right-6 z-50"
      >
        <MdOutlineKeyboardArrowUp className="w-full h-full primary-text" />
      </button>
    )
  );
};

export default ScrollToTopButton;
