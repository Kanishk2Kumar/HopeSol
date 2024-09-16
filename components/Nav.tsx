"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '../public/logo.png'; // Replace with your logo path

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="cursor-pointer" />
        </Link>

        {/* Center Navigation Links with glassmorphism effect */}
        <div className="hidden md:flex space-x-8 backdrop-blur-lg bg-white/30 border border-white/40 rounded-lg py-2 px-4 shadow-lg">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/campaigns" className="text-gray-800 hover:text-gray-600">
            Open Campaigns
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About Us
          </Link>
        </div>

        {/* Create Campaign button on the right with mainGreen-200 */}
        <div>
          <Link href="/campaigns/create">
            <Button className="bg-green-500 text-white hover:bg-green-600">
              Create a Campaign
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
