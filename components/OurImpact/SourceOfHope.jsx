"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const SourceOfHope = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`vertical-padding horizontal-padding text-center ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="section-heading">
        Financial Relief and Fresh Possibilities
      </h2>
      <p className="lg:w-[80%] mx-auto mt-4">
        With their electricity costs eliminated, Pervaiz and Nasreen can now
        afford the essentials they once sacrificed—food, medicine, even small
        treats for their children. Their eldest daughter now dreams of becoming
        a teacher, inspired by the uninterrupted hours she spends studying under
        their new solar lights. “Every time we turn on a light or a fan, I feel
        like I’m giving my children something better,” Nasreen said, her pride
        unmistakable. “They deserve this. They deserve a future without
        limitations.”
      </p>
    </section>
  );
};

export default SourceOfHope;
