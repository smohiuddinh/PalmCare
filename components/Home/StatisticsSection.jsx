"use client";
import React, { useContext, useRef } from "react";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer-motion";

const StatisticsSection = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full py-12 lg:py-20 ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full flex flex-col items-center gap-4 mb-10 horizontal-padding ">
        <h2 className="section-heading">How We Bring Light to Rural Homes</h2>
        <p className="lg:w-2/3 text-center">
          We bring lasting light to villages in Pakistan with our premium solar
          systems. Each installation includes a 25-year warranty on the panels
          and a one-year warranty on the inverter and battery, ensuring
          reliable, long-term power for families in need. This is more than just
          an installation — it’s a commitment to brighter, more sustainable
          futures for communities that have faced darkness for too long.
        </p>
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 bg-dark text-white py-12 lg:py-20 horizontal-padding "
        ref={ref}
      >
        <div
          className={`flex flex-col items-center gap-3 px-4 text-center`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src="/assets/solar-plates.png"
            alt="solar-plates"
            className="w-60 2xl:w-80"
          />
          <span className="quicksand-fonts font-bold text-[16px] text-[#fff] transition-all duration-300">
            Premium 580-watts x2 solar panels
          </span>
        </div>

        <div
          className={`flex flex-col items-center gap-3 px-4 text-center`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src="/assets/car-battery.png"
            alt="battery"
            className="w-60 2xl:w-80"
          />
          <span className="quicksand-fonts font-bold text-[16px] text-[#fff] transition-all duration-300">
            21-plate battery for storing power
          </span>
        </div>

        <div
          className={`flex flex-col items-center gap-4 px-4 text-center`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src="/assets/inverter.png"
            alt="inverter"
            className="w-32 2xl:w-44"
          />
          <span className="quicksand-fonts font-bold text-[16px] text-[#fff] transition-all duration-300">
            Inverter for converting power
          </span>
        </div>

        <div
          className={`flex flex-col items-center gap-3 px-4 text-center`}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src="/assets/power-breaker.png"
            alt="power-breaker"
            className="w-40 2xl:w-52"
          />
          <span className="quicksand-fonts font-bold text-[16px] text-[#fff] transition-all duration-300">
            Premium Breaker and wiring installed for a safe
          </span>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
