import React from "react";
import Navbar from "../Global/Navbar";

const AboutUsHero = ({ heading }) => {
  return (
    <main className="home-hero h-[40vh] lg:h-[80vh] w-full relative">
      <Navbar />
      <div className="w-full pt-20 lg:pt-24 2xl:pt-60 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
        <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight">
          {heading}
        </h1>
      </div>
    </main>
  );
};

export default AboutUsHero;
