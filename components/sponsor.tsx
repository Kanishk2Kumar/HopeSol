"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; // Assuming InfiniteMovingCards is in ./ui/infinite-moving-cards

export function Sponsors() {
  // Array of image objects
  const images = [
    { src: "/images/UNICEF.jpg", alt: "NGO 1" },
    { src: "/images/HelpAge.png", alt: "NGO 2" },
    { src: "/images/Uday.jpg", alt: "NGO 3" },
    { src: "/images/SmileFoundation.jpg", alt: "NGO 4" },
    { src: "/images/CRY.png", alt: "NGO 5" },
    { src: "/images/Give.jpg", alt: "NGO 6" },
    { src: "/images/Sankara.png", alt: "NGO 7" },
    // Add more images as needed
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold text-neutral-600 dark:text-neutral-400 pb-20 ml-48">Our <span className='text-[#13ADB7]'>Trusted Partners</span> and NGO’s</h1>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
        <InfiniteMovingCards
          items={images} // Pass the images to InfiniteMovingCards
          direction="right" // Specify direction
          speed="normal" // Adjust speed to fast, normal, or slow
        />
      </div>
    </div>
    
  );
}
