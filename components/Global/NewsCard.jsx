import ThemeContext from "@/context/ThemeContext";
import { useInView } from "framer";
import Link from "next/link";
import React, { useContext, useRef } from "react";

const NewsCard = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        className={`flex flex-col relative group ${
          theme ? "bg-dark" : "bg-white custom-shadow"
        }`}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        <div className="w-full h-[240px] overflow-hidden 2xl:h-[280px] relative">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoYXJpdHklMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="w-full p-5 flex flex-col items-start gap-4 relative pt-12">
          <span className="bg-primary text-sm font-medium text-white px-4 py-2 rounded-br-lg absolute top-0 left-0">
            Childcare
          </span>
          <Link
            href={"/"}
            className="font-bold quicksand-fonts text-base lg:text-xl 2xl:text-2xl hover:underline transition-all duration-500"
          >
            10 Ways To Give To Charity Without Your Budget.
          </Link>
          <p
            className={`${
              theme ? "text-gray-400" : "text-[#3f3f3f]"
            } text-[14px] lg:text-base`}
          >
            Despite facing significant financial constraints, this organization
            continues
          </p>
          <Link
            href={"/"}
            className={`${
              theme ? "text-gray-500" : "text-[#3f3f3f]"
            } text-[15px] font-semibold underline`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
