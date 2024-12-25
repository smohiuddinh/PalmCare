"use client";
import React, { useContext } from "react";
// import EventCard from "../Global/EventCard";
import EventCard from "./EventCard";
import ThemeContext from "@/context/ThemeContext";

const EventGrid = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full vertical-padding horizontal-padding flex flex-col gap-y-12 gap-x-6 ${
        theme && "bg-dark text-white"
      }`}
    >
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventGrid;
