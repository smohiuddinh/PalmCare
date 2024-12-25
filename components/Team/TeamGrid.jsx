"use client";
import React, { useContext, useRef } from "react";
import {
  Coo_Founders,
  team_members,
  volunteers,
} from "@/constants/TeamMembers";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";

const TeamGrid = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`w-full horizontal-padding py-20 lg:py-20 ${
        theme && "bg-black text-white"
      }`}
    >
      <div className="w-full">
        {/* <h2 className="mb-10 lg:mb-10 section-heading">Co-Founders</h2> */}
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 ${
            theme && "bg-dark text-white"
          }`}
        >
          {Coo_Founders.map((member, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col items-start ${
                  theme ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                <div
                  className={`h-[300px] ${
                    theme ? "bg-[#1c1c1c]" : "bg-primary"
                  } w-full relative`}
                >
                  <img
                    src={member?.image_url}
                    alt=""
                    className="absolute bottom-0 h-[300px] lg:h-[300px] w-auto lg:w-[100%] object-contain left-0 right-0 mx-auto"
                  />
                </div>
                <div className="w-full p-3 text-center">
                  <h2 className="font-bold text-xl lg:text-2xl primary-text">
                    {member?.name}
                  </h2>
                  <h3 className="font-bold text-base lg:text-lg text-gray-500 my-1">
                    {member?.designation}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-10">
        {/* <h2 className="mb-7 lg:mb-7 section-heading">Team Members</h2> */}
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 ${
            theme && "bg-dark text-white"
          }`}
        >
          {team_members.map((member, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col items-start ${
                  theme ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                <div className={`h-[220px] lg:h-[270px] w-full relative`}>
                  <img
                    src={member?.image_url}
                    alt=""
                    className="h-[220px] lg:h-[270px] object-cover w-[70%] lg:w-[100%] rounded-full mx-auto"
                  />
                </div>
                <div className="w-full p-3 text-center">
                  <h2 className="font-bold text-xl lg:text-2xl primary-text">
                    {member?.name}
                  </h2>
                  <h3 className="font-bold text-base lg:text-lg text-gray-500 my-1">
                    {member?.designation}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full mt-10">
        {/* <h2 className="section-heading mb-10 lg:mb-3">Volunteers</h2> */}
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 ${
            theme && "bg-dark text-white"
          }`}
        >
          {volunteers.map((member, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col items-start px-1 ${
                  theme ? "bg-dark text-white" : "bg-white text-black"
                }`}
              >
                <div className={`h-auto w-full relative`}>
                  <img
                    src={member?.image_url}
                    alt=""
                    className="h-[200px] lg:h-[240px] w-auto lg:w-[90%] rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="w-full p-3 text-center">
                  <h2 className="font-bold text-xl lg:text-2xl primary-text">
                    {member?.name}
                  </h2>
                  <h3 className="font-bold text-sm lg:text-lg text-gray-500">
                    {member?.designation}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
