"use client";
import React, { useContext, useRef } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      className={`w-full py-12 xl:py-10 2xl:py-32 flex justify-center gap-6 horizontal-padding overflow-hidden ${
        theme ? "bg-dark text-white" : "bg-yellow-50 text-black"
      }`}
      ref={ref}
    >
      {/* <div
        className="col-span-1 lg:col-span-1 2xl:pr-28 flex flex-col items-start justify-start gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      ></div> */}

      <div
        className="flex flex-col items-center gap-6 2xl:gap-8"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/palmcare-logo-2.webp"
            alt="   "
            className="block w-24 rounded-2xl"
          />
        </Link>
        <h3 className="text-xl 2xl:text-2xl font-bold">Quick Links</h3>
        <div className="flex items-center gap-6">
          <Link href="/" className="font-medium text-[16px] ">
            Home
          </Link>
          {/* <Link href="/" className="font-medium text-[16px] ">
            About Us
          </Link> */}
          <Link href="/team" className="font-medium text-[16px] ">
            Team
          </Link>
          <Link href="/our-impact" className="font-medium text-[16px] ">
            Our Impact
          </Link>
          <Link href="/contact-us" className="font-medium text-[16px] ">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="">
            <TiSocialFacebook className="w-full h-full text-2xl" />
          </Link>
          <Link href="/" className="">
            <FaInstagram className="w-full h-full text-lg" />
          </Link>
          <Link href="/" className="">
            <TiSocialTwitter className="w-full h-full text-2xl" />
          </Link>
          <Link href="/" className="">
            <TiSocialLinkedin className="w-full h-full text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// bg-red-800 - left side div
// bg-red-900 - right side div
