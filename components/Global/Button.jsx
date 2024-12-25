import React from "react";

const Button = () => {
  const handleNavigateToDonate = () => {
    window.location.href = "https://givebutter.com/vHIBtO";
  };
  return (
    <button
      type="button"
      onClick={handleNavigateToDonate}
      className="relative overflow-hidden bg-primary text-white font-medium py-2 px-4 rounded-full w-28 md:w-40 h-12"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text1">
        Join Us
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text2">
        Join the Cause
      </span>
    </button>
  );
};

export default Button;
