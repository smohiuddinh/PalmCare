"use client";
import React, { useContext } from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import StatisticsSection from "./StatisticsSection";
import WhyDonateUs from "./WhyDonateUs";
import FeaturesSection from "./FeaturesSection";
import FatimaStory from "./FatimaStory";
import { AboutUsPage } from "../About/AboutUsPage";
import ThemeContext from "@/context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <StatisticsSection />
      <WhyDonateUs />
      <FeaturesSection />
      <FatimaStory />
    </div>
  );
};

export default HomePage;
