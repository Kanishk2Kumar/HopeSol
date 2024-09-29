import React from "react";
import Image from "next/image"; // Using Next.js Image for optimized images
import { footerLinks, socialMedia } from "@/constants/index";
import Logo from '@/public/images/Logo.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer suppressHydrationWarning={true} className="bg-black py-12 px-6">
      <div
        suppressHydrationWarning={true}
        className="max-w-7xl mx-auto flex flex-row justify-between items-start gap-12 lg:gap-20"
      >
        {/* Logo and description */}
        <div
          suppressHydrationWarning={true}
          className="flex flex-col items-start mt-6 lg:w-1/3 w-full"
        >
          <a href="/">
            <Image
              suppressHydrationWarning={true}
              src={Logo}
              width={150}
              height={50}
              alt="Footer Logo"
            />
          </a>
          <p
            suppressHydrationWarning={true}
            className="mt-6 text-sm leading-6 text-gray-300 sm:max-w-sm"
          >
            Discover new ways to make a positive impact on society with our platform. Explore the latest campaigns and contribute to causes that matter.
          </p>
          <div
            suppressHydrationWarning={true}
            className="flex items-center gap-4 mt-6"
          >
            {socialMedia.map((icon) => (
              <a
                suppressHydrationWarning={true}
                key={icon.alt}
                href={icon.link}
                className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full"
              >
                <Image
                  suppressHydrationWarning={true}
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

        {/* Links section */}
        <div
          suppressHydrationWarning={true}
          className="flex flex-wrap justify-between lg:w-1/3 w-full mr-40 mt-6"
        >
          {footerLinks.map((section) => (
            <div
              suppressHydrationWarning={true}
              key={section.title}
              className="w-full sm:w-auto mb-8"
            >
              <h4
                suppressHydrationWarning={true}
                className="text-xl font-semibold text-light-600 mb-6"
              >
                {section.title}
              </h4>
              <ul suppressHydrationWarning={true}>
                {section.links.map((link) => (
                  <li
                    suppressHydrationWarning={true}
                    key={link.name}
                    className="mt-4 text-sm text-gray-300 hover:text-gray-800"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bottom section */}
      <div
        suppressHydrationWarning={true}
        className="max-w-7xl mx-auto flex justify-between items-center text-gray-500 mt-12 flex-wrap"
      >
        <div suppressHydrationWarning={true} className="flex items-center gap-2 text-sm cursor-pointer">
          <p suppressHydrationWarning={true}>© 2024 All rights reserved.</p>
        </div>
        <p suppressHydrationWarning={true} className="text-sm cursor-pointer">
          Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
