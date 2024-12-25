"use client";
import React, { useContext, useRef } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import EventCard from "../Global/EventCard";
import { EVENTS_PROGRAMS } from "@/constants/Events";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";
import Link from "next/link";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer-motion";

const EventsAndPrograms = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={`w-full vertical-padding horizontal-padding overflow-hidden ${
        theme ? "bg-dark text-white" : "text-black bg-white"
      }`}
      ref={ref}
    >
      <div className="w-full flex flex-col items-center gap-3 overflow-hidden">
        <div
          className="flex items-center gap-2"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <FaHandHoldingHeart className="text-lg primary-text" />
          <span className="text-[18px] font-bold primary-text quicksand-fonts">
            Events & Programs
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
          Latest Events & Programs
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.59s",
          }}
        >
          <EventCard />
        </div>
        <div className="flex flex-col items-start gap-5 overflow-hidden">
          {EVENTS_PROGRAMS.map((news, index) => {
            return (
              <div
                className="w-full flex flex-col md:flex-row items-start gap-4"
                key={index}
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition:
                    "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.59s",
                }}
              >
                <div className="w-full md:w-[40%] h-[150px] overflow-hidden relative">
                  <div className="bg-primary absolute top-0 px-2 pb-1 right-0 z-10 rounded-bl-xl">
                    <span className="text-[13px] text-white font-medium">
                      {news.tag}
                    </span>
                  </div>
                  <img
                    src={news.image}
                    alt=""
                    className="w-full object-cover h-[150px] hover:scale-110 transition-all duration-700 brightness-75"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3 pt-2.5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <SlCalender className="text-base primary-text" />
                      <span className="text-sm font-medium primary-text">
                        May 6, 2025
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuClock className="text-base primary-text" />
                      <span className="text-sm font-medium primary-text">
                        08:00 AM
                      </span>
                    </div>
                  </div>
                  <h2 className="font-bold text-xl">{news.title}</h2>
                  <Link
                    href={"/"}
                    className={`text-[15px] font-medium underline ${
                      theme ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Event Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsAndPrograms;
