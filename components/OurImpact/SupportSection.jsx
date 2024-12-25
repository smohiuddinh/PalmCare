"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const SupportSection = () => {
  const { theme } = useContext(ThemeContext);
  const handleNavigateToDonate = () => {
    window.location.href = "https://givebutter.com/vHIBtO";
  };

  return (
    <section
      className={`vertical-padding horizontal-padding ${theme && "bg-black"}`}
    >
      <div
        className={`w-full text-center vertical-padding rounded-3xl px-6 ${
          theme ? "bg-[#1c1c1c] text-white" : "bg-yellow-200 text-black"
        }`}
      >
        <h2 className="section-heading">
          Be the Spark That Lights Up a Family’s Life
        </h2>
        <p className="mt-4 text-lg lg:w-[80%] mx-auto">
          Your support can break the cycle of darkness for families like Pervaiz
          and Nasreen’s. Help us bring the power of solar energy to those who
          need it most—together, we can create lasting change and ignite
          brighter future.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleNavigateToDonate}
            className="relative overflow-hidden bg-black text-white font-medium py-2 px-4 rounded-full w-28 md:w-40 h-12"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text1">
              Join Us
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text2">
              Join the Cause
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
