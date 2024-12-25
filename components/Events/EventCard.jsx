"use client";
import React, { useContext, useRef } from "react";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";
import Link from "next/link";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";

const EventCard = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Link href={"/events"} ref={ref}>
      <div
        className={`w-full h-auto lg:min-h-[55vh] 2xl:h-[45vh] relative group overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6 lg:p-10 rounded-xl ${
          theme ? "bg-black text-white" : "bg-yellow-50 text-black"
        }`}
      >
        <div
          className="col-span-2 flex items-start gap-6 flex-col lg:flex-row"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="lg:h-full w-full lg:w-[10%] border-r-2 primary-border flex flex-col items-center gap-0 lg:pr-5">
            <span className="text-lg font-normal">MON</span>
            <span className="text-2xl font-semibold">23</span>
          </div>
          <div className="w-full h-full lg:px-4 lg:py-6 flex flex-col items-start justify-start gap-4">
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
            <h2 className="font-bold text-xl lg:text-2xl 2xl:text-3xl">
              Transforming Lives Charity Golf Tournaments Charity Networking
              Event
            </h2>
            <p className="text-base 2xl:text-lg">
              Vineyard Venues 5396 North Resse Avenue, Fresno CA 93722, Fresno
              CA, <br /> United States
            </p>
            <p className="text-base 2xl:text-lg">
              Join us as we rally our community to support those in nedd and
              celebrate
            </p>
          </div>
        </div>

        <div
          className="w-full h-[30vh] lg:h-full inset-0 group-hover:scale-110 transition-all duration-700 col-span-1"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1509163245925-f4255dea7727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
      </div>
    </Link>
  );
};

export default EventCard;
