import AboutUsHero from "@/components/About/AboutUsHero";
import Navbar from "@/components/Global/Navbar";
import TeamGrid from "@/components/Team/TeamGrid";
import React from "react";

export const metadata = {
  title: "Palmcare - Team",
  description: "Palmcare Charity Team Members",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="team-hero h-[40vh] lg:h-[80vh] w-full relative">
        <Navbar />
        <div className="w-full pt-20 lg:pt-24 2xl:pt-60 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
          <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight">
            Our Team
          </h1>
        </div>
      </main>
      <TeamGrid />
    </div>
  );
};

export default page;
