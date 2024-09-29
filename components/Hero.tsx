"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

// Correctly typed dynamic import
const TypewriterEffectSmooth = dynamic(
  () =>
    import("./ui/typewriter-effect").then((mod) => mod.TypewriterEffectSmooth),
  { ssr: false }
);

export function Hero() {
  const words = [
    {
      text: "Happiness",
      className: "text-[#13ADB7]",
    },
    {
      text: "comes",
    },
    {
      text: "from",
    },
    {
      text: "your",
    },
    {
      text: "Actions!",
      className: "text-[#13ADB7]",
    },
  ];

  return (
    <div
      suppressHydrationWarning={true}
      className="relative flex flex-col items-center justify-center h-lvh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/HomePage.png")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div className="z-10">
        <TypewriterEffectSmooth words={words} />
      </div>
      <p className="text-light-200 dark:text-neutral-200 text-xs sm:text-base z-10">
        Be a part of the Breakthrough and make dreams come true
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 z-10">
        <a
          href="/campaigns/create"
          className="w-auto h-auto rounded-full bg-mainGreen-200 border dark:border-white border-transparent text-white text-lg p-3 pr-5 pl-5 inline-block text-center"
        >
          Create A Campaign
        </a>

        <a href="https://your-link-here.com" rel="noopener noreferrer" >
          <button className="flex items-center w-auto h-auto rounded-full bg-transparent text-white border border-white text-lg p-3 pr-5 pl-5">
            Watch Demo Video
            <Image
              src="./icons/video.svg"
              alt="Play Video"
              className="ml-2"
              height={25}
              width={25}
            />
          </button>
        </a>
      </div>
    </div>
  );
}
