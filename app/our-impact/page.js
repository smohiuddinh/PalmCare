import Navbar from "@/components/Global/Navbar";
import ImpactStatistics from "@/components/OurImpact/ImpactStatistics";
import ImpactStory from "@/components/OurImpact/ImpactStory";
import ImpactTestimonials from "@/components/OurImpact/ImpactTestimonials";
import SourceOfHope from "@/components/OurImpact/SourceOfHope";
import SupportSection from "@/components/OurImpact/SupportSection";
import React from "react";

export const metadata = {
  title: "Palmcare - Our Impact",
  description: "Palmcare Charity Upcoming Events",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="events-hero h-[40vh] lg:h-[80vh] w-full relative">
        <Navbar />
        <div className="w-full pt-20 lg:pt-24 2xl:pt-60 flex flex-col items-center justify-center gap-5 horizontal-padding text-white">
          <h1 className="text-3xl md:text-4xl lg:text-8xl 2xl:text-8xl font-bold tracking-tight">
            Our Imapct
          </h1>
        </div>
      </main>
      {/* <EventGrid /> */}
      <ImpactStory />
      <ImpactStatistics />
      <ImpactTestimonials />
      <SourceOfHope />
      <SupportSection />
    </div>
  );
};

export default page;
