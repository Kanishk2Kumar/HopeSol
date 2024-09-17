"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/Logo.png'; // Replace with your logo path
import {
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-transparent overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="cursor-pointer" />
        </Link>

        {/* Center Navigation Links with glassmorphism effect */}
        <div className="hidden md:flex space-x-8 backdrop-blur-lg bg-white/30 border border-white/40 rounded-lg py-2 px-4 shadow-lg">
          <Link href="/" className="text-[#13ADB7] hover:text-[#0D98A6]">
            Home
          </Link>
          <Link href="/campaigns" className="text-[#13ADB7] hover:text-[#0D98A6]">
            Open Campaigns
          </Link>
          <Link href="/about" className="text-[#13ADB7] hover:text-[#0D98A6]">
            About Us
          </Link>
        </div>

        {/* Create Campaign button */}
        <div className="flex-shrink-0"> {/* Prevent button from expanding */}
          <Link href="/campaigns/create">
            <WalletMultiButton className="bg-[#13ADB7] text-white hover:bg-[#0D98A6] transition-colors duration-300 rounded-lg px-4 py-2 font-semibold shadow-md" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
