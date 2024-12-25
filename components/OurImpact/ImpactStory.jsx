"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";

const ImpactStory = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`vertical-padding horizontal-padding ${
        theme ? "bg-black text-white" : "bg-gray-100"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="section-heading mb-4">
            From Darkness to Light: How Solar Power Transformed Pervaiz &
            Nasreen Family's Future
          </h2>
          <p className="text-lg mb-4">
            Pervaiz and Nasreen, both in their early 40s, work tirelessly as
            house cleaners to support their family of nine. Their combined
            monthly income, around $200, is stretched thin across countless
            necessities. Yet nearly $50—a quarter of this income—went to
            electricity bills, granting them just 3 to 4 hours of power each
            day. This forced them into impossible choices between food,
            medicine, and electricity, leaving them in darkness more often than
            not. It was this struggle, the pressing need for a reliable and
            affordable energy source, that led us to provide them with a solar
            panel installation.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/assets/our-impact-01.jpeg"
            alt="Family benefiting from solar power"
            className="rounded-lg shadow-lg lg:h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;
