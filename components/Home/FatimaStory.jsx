"use client";
import React, { useContext } from "react";
import Button2 from "../Global/Button2";
import ThemeContext from "@/context/ThemeContext";

const FatimaStory = () => {
  const { theme } = useContext(ThemeContext);

  const handleNavigateToImpact = () => {
    window.location.href = "/our-impact";
  };

  return (
    <section
      className={`w-full pb-20 horizontal-padding ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img
            src="/assets/fatima-family.jfif"
            alt="poor family sitting"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="section-heading">Fatima's Story</h2>
          <p className="my-4">
            For years, Fatima’s family lived without electricity, relying on
            hazardous candles that posed a constant fire risk. Since receiving a
            solar power system from Project Noor Foundation, their home is now
            safe, and Fatima can study at night. With your support, we can
            extend our reach to more families like Fatima’s.
          </p>
          <Button2
            text1={"Our Impact"}
            text2={"Join Us"}
            onclick={handleNavigateToImpact}
          />
        </div>
      </div>
    </section>
  );
};

export default FatimaStory;
