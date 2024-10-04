"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { socialMediaAuth } from "@/constants";

export function Authors() {
  return (
    <div className="flex flex-col items-center py-12 dark:bg-zinc-800">

      <h2 className="text-3xl font-semibold text-center text-neutral-800 dark:text-neutral-200 mb-12">
        About <span className='text-[#13ADB7]'>Creators</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">

        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 max-w-xs mx-auto">
          <div className="relative w-full h-72">
            <Image
              src={`/images/Kanishk.jpg`}
              alt="Author 1"
              layout="fill"
              objectFit="cover"
              className="rounded-t-[22px]"
            />
          </div>
          <div className="p-4 sm:p-">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Kanishk Kumar
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              I am Kanishk a full-stack developer along with intrest in cybersecurity and blockchain.
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              {socialMediaAuth.map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.kanishk}
                  className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 max-w-xs mx-auto">
          <div className="relative w-full h-72">
            <Image
              src={`/images/Harshwardhan.png`}
              alt="Harshwardhan"
              layout="fill"
              objectFit="cover"
              className="rounded-t-[22px]"
            />
          </div>
          <div className="p-4 sm:p-">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Harshwardhan Saindane
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              I am Harshwardhan, Full Stack Dev, working in Web3 & ML
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              {socialMediaAuth.map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.harshwardhan}
                  className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
