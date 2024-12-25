"use client";
import React, { useContext, useRef } from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { FaWheelchair } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { useInView } from "framer-motion";
import ThemeContext from "@/context/ThemeContext";

const FeaturesSection = () => {
  const { theme } = useContext(ThemeContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full py-16 horizontal-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${
        theme ? "bg-black text-white" : "bg-white text-black"
      } gap-6 overflow-hidden`}
      ref={ref}
    >
      <div
        className="flex flex-col items-center gap-3 border-2 border-[#F2C75C] p-10"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
        }}
      >
        <h2 className="text-2xl 2xl:text-3xl font-extrabold">14+</h2>
        <p className="text-center text-sm 2xl:text-lg">Hours load shedding</p>
      </div>
      <div
        className="flex flex-col items-center gap-3 border-2 border-[#F2C75C] p-10"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
        }}
      >
        <h2 className="text-2xl 2xl:text-3xl font-extrabold">155%</h2>
        <p className="text-center text-sm 2xl:text-lg">
          Increase in electricity bills since 2021
        </p>
      </div>
      <div
        className="flex flex-col items-center gap-3 border-2 border-[#F2C75C] p-10"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
        }}
      >
        <h2 className="text-2xl 2xl:text-3xl font-extrabold">20,000+</h2>
        <p className="text-center text-sm 2xl:text-lg">
          Fire-related deaths annually
        </p>
      </div>
      <div
        className="flex flex-col items-center gap-3 border-2 border-[#F2C75C] p-10"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
        }}
      >
        <h2 className="text-2xl 2xl:text-3xl font-extrabold">217+</h2>
        <p className="text-center text-sm 2xl:text-lg">
          Suicides due to high bills in 2024
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
