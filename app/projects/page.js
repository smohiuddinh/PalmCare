import AboutUsHero from "@/components/About/AboutUsHero";
import React from "react";

export const metadata = {
  title: "Palmcare - Projects",
  description: "Palmcare Charity Projects",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutUsHero heading={"Projects"} />
      {/* <div className="w-full vertical-padding horizontal-padding flex justify-center">
        <h2 className="font-bold text-2xl">Upcoming</h2>
      </div> */}
    </div>
  );
};

export default page;
