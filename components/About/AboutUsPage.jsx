"use client";
import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Global/Button";
import ThemeContext from "@/context/ThemeContext";

const para1 =
  "Our mission is to empower struggling families in Pakistan by providing free solar panels that bring lasting financial relief and a pathway to a brighter future. Extreme heat waves and soaring electricity bills have left many households with difficult choices, often forcing families to sacrifice basic necessities just to keep the lights on. Your donations bring reliable, cost-free energy to these homes, enabling children to study and sleep comfortably, even in the heat, while parents can use their hard-earned money to cover essentials like food, medicine, and household needs. By installing solar panels, we’re not only reducing electricity expenses but also providing a sustainable solution to power shortages, helping families live with dignity and security. Together, we’re building a foundation for healthier, more resilient communities.";

const goal =
  "Our goal is to bring solar energy to 100 families by the end of 2025, providing them with sustainable, cost-free power to improve their quality of life. Through these 100 installations, we aim to create a ripple effect of positive change, helping families live with greater security and dignity and paving the way for brighter futures.";

const whySolarPanels =
  "In Islamic tradition, Sadaqah Jariyah is a form of ongoing charity, a gift that continues to benefit others even after one’s lifetime, thereby providing endless rewards to the giver. Installing solar panels for families in need is a powerful act of Sadaqah Jariyah—it not only alleviates the financial burdens of electricity but continuously impacts families by offering them sustainable energy, security, and comfort, especially during times of need. With each panel installed, we create lasting change in people’s lives. Children have the light to study, homes stay cool during intense heat, and parents can afford essentials that were once out of reach. This form of giving aligns with the essence of Sadaqah Jariyah, as it’s a gift that keeps giving, benefiting not only today’s families but also the next generation and beyond.";

export const AboutUsPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme ? "bg-black text-white" : "bg-white text-black"}`}
      id="about-us"
    >
      <TextParallaxContent
        imgUrl="/assets/image-1.jpeg"
        subheading=""
        heading="About Us"
      >
        <ExampleContent heading={"About Us"} paragraph1={para1} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/assets/image-2.jpeg"
        subheading=""
        heading="Our Goal"
      >
        <ExampleContent heading={"Our Goal"} paragraph1={goal} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/assets/image-6.jpeg"
        subheading=""
        heading="Why Solar Panels"
      >
        <ExampleContent
          heading={"Why Solar Panels"}
          paragraph1={whySolarPanels}
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      id="about-us"
    >
      <div className="relative min-h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const handleNavigateToDonate = () => {
  window.location.href = "https://givebutter.com/vHIBtO";
};

const ExampleContent = ({ heading, paragraph1, paragraph2 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`mx-auto w-full lg:w-[90%] horizontal-padding ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center py-12">
        <p className="mb-4 text-[16px] leading-6">{paragraph1}</p>
        <p className="mb-8 text-[16px] leading-6">{paragraph2}</p>
        <Button onclick={handleNavigateToDonate} />
      </div>
    </div>
  );
};
