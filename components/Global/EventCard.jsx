import React from "react";
import { SlCalender } from "react-icons/sl";
import { LuClock } from "react-icons/lu";

const EventCard = () => {
  return (
    <div className="w-full h-full relative group overflow-hidden">
      <div
        className="w-full h-full inset-0 absolute z-0 group-hover:scale-110 transition-all duration-700"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1509163245925-f4255dea7727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full h-full absolute inset-0 z-10 text-white px-4 py-6 flex flex-col items-start justify-end gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <SlCalender className="text-base primary-text" />
            <span className="text-sm font-medium primary-text">
              May 6, 2025
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LuClock className="text-base primary-text" />
            <span className="text-sm font-medium primary-text">08:00 AM</span>
          </div>
        </div>
        <h2 className="font-bold text-lg lg:text-2xl">
          Transforming Lives Charity Golf Tournaments Charity Networking Event
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          nesciunt.
        </p>
      </div>
    </div>
  );
};

export default EventCard;
