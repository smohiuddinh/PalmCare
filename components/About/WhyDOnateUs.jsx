"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineHouseboat } from "react-icons/md";
import ThemeContext from "@/context/ThemeContext";

const charity_reasons = [
  {
    title: "Give Right Place",
    text: "The opportunities around you to shape you, sharpen your gifts, and prepare you to do.",
    image: <TbReplace />,
  },
  {
    title: "Save Money & Helath",
    text: "Giving up unhealthy habits such as smoking, drinking sugary soft drinks, or drinking alcohol.",
    image: <GiTakeMyMoney />,
  },
  {
    title: "Organisation & Programs",
    text: "A collection of organizational resources that are geared to accomplish a goals.",
    image: <MdOutlineHouseboat />,
  },
];

const WhyDonateUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`w-full pt-12 ${theme && "bg-dark text-white"}`}>
      <div className="w-full flex items-center">
        <div
          className="flex items-center justify-center gap-10 lg:h-[110vh] 2xl:h-[75vh] w-full lg:w-[30%] 2xl:w-[40%]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1564051741945-452df4e721bc?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[80%] w-[12%] border primary-border">
            {/* <h2 className="accent font-semibold text-3xl quicksand-fonts rotate-90">
              Best Charity foundation
            </h2> */}
          </div>
          <img
            src={
              "https://themepanthers.com/wp/risehand/el/wp-content/uploads/2024/01/home-2-about-1-1.jpeg"
            }
            className="h-[80%] w-[50%] object-cover"
          />
        </div>

        <div
          className={`flex flex-col items-start justify-center gap-6 px-4 lg:pr-6 xl:pr-10 2xl:pr-40 w-full lg:w-[70%] 2xl:w-[60%] ${
            theme ? "bg-[#1c1c1c] text-white" : "bg-[#212327] text-white"
          } lg:h-[110vh] 2xl:h-[75vh] py-6 lg:pl-6 2xl:pl-10`}
        >
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="text-lg primary-text" />
            <span className="text-[18px] font-bold primary-text quicksand-fonts">
              Why donate us
            </span>
          </div>
          <h2 className="section-heading">
            We're So Much Trusted Charity Foundations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {charity_reasons.map((r, i) => {
              return (
                <div
                  className="flex flex-col items-start text-start gap-4 border lg:border-[#2ECC71] py-6 px-4"
                  key={i}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#2ECC71] rounded-full p-2.5 col-span-1 flex items-center icon-container">
                      {r.image}
                    </div>
                  </div>
                  <div className="">
                    <h3 className="font-bold text-lg lg:text-2xl mb-2">
                      {r.title}
                    </h3>
                    <span className="text-[16px] font-normal text-[#dcdcdc]">
                      {r.text}
                    </span>
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
