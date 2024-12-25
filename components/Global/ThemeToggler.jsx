"use client";
import ThemeContext from "@/context/ThemeContext";
import React, { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiLightbulbLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoBulbOutline } from "react-icons/io5";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`w-7 h-7 lg:w-9 lg:h-9 2xl:w-9 2xl:h-9 rounded-full z-50 ${
        theme ? "bg-[#ffff] p-2 2xl:p-2" : "bg-[#1c1c1c] p-1.5 2xl:p-2"
      } flex items-center justify-center transition-all duration-500 outline-none`}
    >
      {theme ? (
        <BsLightbulbFill
          className={`text-black w-full h-full ${
            theme ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        />
      ) : (
        <BsLightbulb
          className={`text-gray-100/20 w-full h-full ${
            theme ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </button>
    // <label class="inline-flex items-center cursor-pointer">
    //   <input type="checkbox" value="" class="sr-only peer" />
    //   <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d2d2d] after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
    // </label>
  );
};

export default ThemeToggler;
