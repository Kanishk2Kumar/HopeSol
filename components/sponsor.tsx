"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Sponsors() {

  const images = [
    { src: "/images/NGO/UNICEF.jpg", alt: "NGO 1" },
    { src: "/images/NGO/HelpAge.png", alt: "NGO 2" },
    { src: "/images/NGO/Uday.jpg", alt: "NGO 3" },
    { src: "/images/NGO/SmileFoundation.jpg", alt: "NGO 4" },
    { src: "/images/NGO/CRY.png", alt: "NGO 5" },
    { src: "/images/NGO/Give.jpg", alt: "NGO 6" },
    { src: "/images/NGO/Sankara.png", alt: "NGO 7" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold text-neutral-600 dark:text-neutral-400 pb-20 ml-48">Our <span className='text-[#13ADB7]'>Trusted Partners</span> and NGO’s</h1>
      <div className="h-[26rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
        <InfiniteMovingCards
          items={images}
          direction="right"
          speed="normal"
        />
      </div>
    </div>

  );
}
