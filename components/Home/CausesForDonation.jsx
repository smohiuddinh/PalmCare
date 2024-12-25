"use client";
import React, { useContext, useRef } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonationCauseCard from "../Global/DonationCauseCard";
import ThemeContext from "@/context/ThemeContext";
// import CausesSwiper from "./CausesSwiper";
import { useInView } from "framer-motion";

const CausesForDonation = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full vertical-padding horizontal-padding ${
        theme && "bg-dark text-white"
      }`}
    >
      <div
        className="w-full flex flex-col items-center gap-3 overflow-hidden"
        ref={ref}
      >
        <div
          className="flex items-center gap-2"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <FaHandHoldingHeart className="text-lg primary-text" />
          <span className="text-[18px] font-bold primary-text quicksand-fonts">
            Popular Causes
          </span>
        </div>
        <h2
          className="section-heading text-center"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
          }}
        >
          Give Donations For <br /> Latest Causes
        </h2>
      </div>

      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <DonationCauseCard />
        <DonationCauseCard />
      </div>
      {/* <div className="w-full relative"> */}
      {/* <CausesSwiper /> */}
      {/* </div> */}
    </section>
  );
};

export default CausesForDonation;
