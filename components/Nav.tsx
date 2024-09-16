"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have ShadCN button installed and configured
import Image from 'next/image'; // For Next.js optimized images
import Logo from '../public/Logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={40} height={40} className="cursor-pointer" />
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/campaigns" className="text-gray-800 hover:text-gray-600">
            Open Campaigns
          </Link>
          <Link href="/campaigns" className="text-gray-800 hover:text-gray-600">
            Open Partners
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About Us
          </Link>
        </div>

        {/* Create Campaign button on the right */}
        <div>
          <Link href={"/campaigns/create"}><Button className="bg-green-500 text-white hover:bg-green-600">
            Create a Campaign
          </Button></Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
