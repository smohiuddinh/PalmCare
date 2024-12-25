"use client";
import React, { useContext, useRef } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import NewsCard from "../Global/NewsCard";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";

const NewsAndArticles = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full pt-12 pb-24 horizontal-padding relative overflow-hidden ${
        theme
          ? "bg-dark text-white news-and-articles-dark"
          : "bg-white text-black news-and-articles"
      }`}
      ref={ref}
    >
      <div
        className="w-full flex flex-col items-center gap-3 overflow-hidden"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg primary-text" />
          <span className="text-[18px] font-bold primary-text quicksand-fonts">
            Articles News & Blog
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
          Latest News & Blog
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 overflow-hidden">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default NewsAndArticles;
