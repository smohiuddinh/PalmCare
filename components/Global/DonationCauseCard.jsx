import ThemeContext from "@/context/ThemeContext";
import React, { useContext, useRef } from "react";
import Button from "./Button";
import { useInView } from "framer-motion";

const DonationCauseCard = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="" ref={ref}>
      <div
        className={`w-full flex flex-col shadow-lg ${
          theme ? "bg-light-dark text-white" : "bg-white text-black"
        }`}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
        }}
      >
        <div className="w-full">
          <img
            src="https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
            alt=""
            className="w-full h-[240px] lg:h-[300px] object-cover"
          />
        </div>
        <div className="w-full relative px-5 pt-20 lg:pt-14 pb-5">
          <div className="w-full absolute bg-transparent -top-8 left-0">
            <div
              className={`mx-auto rounded-md shadow-md pt-5 pb-4 px-6 w-[90%] ${
                theme ? "bg-[#2d2d2d]" : "bg-white"
              }`}
            >
              <div class="w-full bg-gray-200 rounded-full h-1.5 mb-2.5">
                <div class="bg-primary h-1.5 rounded-full w-[80%]"></div>
              </div>
              <p className="quicksand-fonts text-sm md:text-lg font-semibold">
                $556.00 Donated of $6000.00 Goals
              </p>
            </div>
          </div>
          <h2 className="text-base lg:text-xl font-bold mb-3">
            Help Differently Abled Person to Feel Confident
          </h2>
          <div className="w-full border-t grid grid-cols-3 lg:grid-cols-5 gap-2 py-3">
            <div className="flex flex-col gap-1">
              <span className="quicksand-fonts font-bold text-[18px]">
                Goal
              </span>
              <span className="quicksand-fonts font-bold primary-text text-[18px]">
                $1000
              </span>
            </div>
            <div className="w-[1.5px] h-[45px] bg-gray-100 hidden lg:block"></div>
            <div className="flex flex-col gap-1">
              <span className="quicksand-fonts font-bold text-[18px]">
                Raised
              </span>
              <span className="quicksand-fonts font-bold primary-text text-[18px]">
                $1000
              </span>
            </div>
            <div className="w-[1.5px] h-[45px] bg-gray-100 hidden lg:block"></div>
            <div className="flex flex-col gap-1">
              <span className="quicksand-fonts font-bold text-[18px]">
                To Go
              </span>
              <span className="quicksand-fonts font-bold primary-text text-[18px]">
                $1000
              </span>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default DonationCauseCard;
