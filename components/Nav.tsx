"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/Logo.png'; // Replace with your logo path
import {
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import AppWalletProvider from '@/components/AppWalletProvider';
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar: React.FC = () => {
  return (
    <AppWalletProvider>
      <nav className="w-full py-4 bg-transparent absolute top-0 left-0 z-20"> {/* Make it transparent and absolute */}
        <div className="container mx-auto px-4 flex justify-between items-center"
          style={{ overflowY: 'hidden' }}>
          {/* Logo on the left */}
          <Link href="/">
            <Image src={logo} alt="Logo" width={40} height={40} className="cursor-pointer" />
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#13ADB7]">
              Home
            </Link>
            <Link href="/campaigns/all" className="text-white hover:text-[#13ADB7]">
              Open Campaigns
            </Link>
            <Link href="/about" className="text-white hover:text-[#13ADB7]">
              About Us
            </Link>
          </div>


          <div className="flex-shrink-0">
            {/* <Link href="/campaigns/create"> */}
            <WalletMultiButton className="bg-[#13ADB7] text-white hover:bg-[#0D98A6] transition-colors duration-300 rounded-lg px-4 py-2 font-semibold shadow-md" />
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </AppWalletProvider>
  );
};

export default Navbar;
