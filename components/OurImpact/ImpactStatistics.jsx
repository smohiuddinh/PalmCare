"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const ImpactStatistics = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`vertical-padding horizontal-padding text-center ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="section-heading">A New Dawn with Solar Power</h2>
      <p className="lg:w-[80%] mx-auto mt-4">
        When we offered the solar installation, Pervaiz and Nasreen were
        hesitant; living with constant uncertainty made it hard to believe in
        solutions. But now, with 24/7 power, their lives have transformed. No
        longer burdened by surprise bills or power cuts, they can finally rely
        on consistent electricity. “It’s like a weight lifted off our
        shoulders,” Pervaiz shared, his usual composure giving way to emotion.
        “Now, our children can study without rushing to finish before the power
        goes out. We can even use a fan in the heat. It has changed everything
        for us.”
      </p>

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">200+</p>
          <p className="mt-2">Families Empowered</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">10,000+</p>
          <p className="mt-2">Hours of Light Provided</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-yellow-500">500+</p>
          <p className="mt-2">Children’s Dreams Supported</p>
        </div>
      </div> */}
    </section>
  );
};

export default ImpactStatistics;
