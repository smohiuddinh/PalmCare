"use client";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineHouseboat } from "react-icons/md";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer-motion";
import { FaHornbill } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";

const charity_reasons = [
  {
    title: "Give Right Place",
    text: "27 million individuals in Pakistan lack access to electricity, mostly in rural areas.",
    image: <TbReplace />,
  },
  {
    title: "Save Money & Helath",
    text: "Over 20,000 fire-related deaths occur each year due to unsafe lighting alternatives like candles and kerosene lamps.",
    image: <GiTakeMyMoney />,
  },
  {
    title: "Organisation & Programs",
    text: "Indoor air pollution from traditional fuels causes respiratory diseases in over 50,000 children annually.",
    image: <MdOutlineHouseboat />,
  },
  {
    title: "Organisation & Programs",
    text: "High electricity bills have led to tragic financial stress, with reports of individuals taking their lives due to unmanageable costs.",
    image: <FaHornbill />,
  },
  {
    title: "Organisation & Programs",
    text: "Pakistan, especially Punjab, experiences temperatures that can exceed 122°F (50°C) during summer. Prolonged heatwaves worsen this, causing heat-related illnesses and deaths, particularly among those who can’t afford cooling due to high electricity costs.",
    image: <LuWaves />,
  },
];

const WhyDonateUs = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={`w-full pt-12 ${theme && "bg-dark text-white"}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="flex items-center justify-center gap-10 lg:h-[90vh] 2xl:h-[75vh]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1564051741945-452df4e721bc?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[80%] w-[12%] border primary-border">
            {/* <h2 className="primary-text font-semibold text-3xl quicksand-fonts rotate-90">
              Best Charity foundation
            </h2> */}
          </div>
          <img
            src={
              // "https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
              "/assets/image-1.jpeg"
            }
            className="h-[80%] w-[50%] object-cover"
          />
        </div>

        <div
          className="flex flex-col items-start justify-center gap-4 lg:gap-6 2xl:gap-9 px-4 lg:pr-6 xl:pr-10 2xl:pr-40 overflow-hidden"
          ref={ref}
        >
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
              The Challenge
            </span>
          </div>
          <h2
            className="section-heading"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.55s",
            }}
          >
            Millions Still Live in Darkness
          </h2>

          <div className="flex flex-col items-start gap-5 2xl:gap-6 overflow-hidden">
            {charity_reasons.map((r, i) => {
              return (
                <div
                  className="flex gap-4 lg:gap-6"
                  key={i}
                  style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                >
                  <div className=" flex items-center">
                    <div className="w-14 h-14 bg-primary rounded-full p-2.5 col-span-1 flex items-center icon-container">
                      {r.image}
                    </div>
                  </div>
                  <div className="">
                    {/* <h3 className="font-bold text-lg 2xl:text-xl">{r.title}</h3> */}
                    <p
                      className={`text-[14px] font-normal ${
                        theme ? "text-gray-400" : "text-[#2d2d2d]"
                      }`}
                    >
                      {r.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <button className="btn mt-4">Donate</button> */}
        </div>
      </div>
    </section>
  );
};

export default WhyDonateUs;
