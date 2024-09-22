"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/LogoBlack.png';
import logoW from "@/public/images/Logo.png";
import { usePathname } from 'next/navigation';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import AppWalletProvider from '@/components/AppWalletProvider';
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // Determine if we're on the home page or create campaign page
  const isHomePage = pathname === '/' || '/campaigns/create';
  
  // Conditionally set text color based on the current page
  const linkColorClass = isHomePage ? 'text-white' : 'text-black';

  // Conditionally set the logo based on whether we are on the home page
  const logoToUse = isHomePage ? logoW : logo;

  return (
    <AppWalletProvider>
      <nav className="w-full py-4 bg-transparent absolute top-0 left-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center" style={{ overflowY: 'hidden' }}>
          {/* Conditionally render the logo based on the page */}
          <Link href="/">
            <Image src={logoToUse} alt="Logo" width={160} height={50} className="cursor-pointer" />
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center ml-24 text-xl">
            <Link href="/" className={`${linkColorClass} hover:text-[#13ADB7]`}>
              Home
            </Link>
            <Link href="/campaigns/all" className={`${linkColorClass} hover:text-[#13ADB7]`}>
              Open Campaigns
            </Link>
            <Link href="/AboutUs" className={`${linkColorClass} hover:text-[#13ADB7]`}>
              About Us
            </Link>
          </div>

          {/* Wallet Button */}
          <div className="flex-shrink-0">
            <WalletMultiButton className="bg-[#13ADB7] text-white hover:bg-[#0D98A6] transition-colors duration-300 rounded-lg px-4 py-2 font-semibold shadow-md" />
          </div>
        </div>
      </nav>
    </AppWalletProvider>
  );
};

export default Navbar;
