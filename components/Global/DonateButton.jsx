"use client";
import React from "react";

const DonateButton = () => {
  const handleNavigateToDonate = () => {
    window.location.href = "https://givebutter.com/vHIBtO";
  };
  return (
    <button
      type="button"
      onClick={handleNavigateToDonate}
      className={`w-20 h-10 bg-primary text-white text-sm fixed right-12 lg:right-20 bottom-4 z-50 animate-bounce font-medium rounded-full`}
    >
      Donate
    </button>
  );
};

export default DonateButton;
