import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

export function Helped() {
  const words = ["Disasters", "Shortages", "Health Issues", "Famines"];

  return (
    <div suppressHydrationWarning={true} className="h-[40rem] flex flex-col px-4 mt-20 lg:ml-48 bg-white">
      {/* Heading */}
      <div suppressHydrationWarning={true} className="text-4xl font-semibold text-neutral-600 dark:text-neutral-400 ">
        Help People affected by
        <FlipWords words={words} /> <br />
        using <span className="text-mainGreen-200">HopeSol</span>
      </div>

      {/* List and Image Container Below Typography */}
      <div suppressHydrationWarning={true} className="flex flex-col sm:flex-row mt-10 items-center sm:items-start gap-12 sm:gap-20 lg:gap-52">
        {/* Unordered List */}
        <ul className="list-disc pl-6 text-lg text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-0 sm:w-3/5 lg:w-2/5 space-y-4">
          <li>Provide rapid disaster relief, delivering essential supplies during emergencies.</li>
          <li>Address critical food shortages, ensuring communities have access to nutritious meals.</li>
          <li>Improve healthcare access, bringing medical support to underserved regions.</li>
          <li>Combat famines through sustainable agricultural solutions and food distribution programs.</li>
        </ul>

        {/* Circular Image */}
        <div className="sm:ml-10 hidden sm:block">
          <Image
            src="/images/Helping.png" // Replace with the path to your image
            alt="HopeSol Image"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
