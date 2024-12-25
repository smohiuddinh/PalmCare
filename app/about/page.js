import { AboutUsPage } from "@/components/About/AboutUsPage";
import Navbar2 from "@/components/Global/Navbar2";
import React from "react";

export const metadata = {
  title: "Palmcare - About",
  description: "Palmcare Charity About Us Page",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar2 />
      <AboutUsPage />
    </div>
  );
};

export default page;
