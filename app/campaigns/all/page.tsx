"use client"; // Ensures the component runs on the client side

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Importing Button component
import { campaigns } from '@/constants/campaigns'; // Import dummy data
import searchIcon from '@/public/icons/search.svg'; // Search icon path
import Link from 'next/link';

const AllCampaigns: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-white lg:pl-24 lg:pr-24">
      {/* Search Bar */}
      <div className="relative mb-8 lg:pl-48 lg:mr-48">
        <Input
          type="text"
          placeholder="Search campaigns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-full pr-10" // Rounded input box
        />
        <Image
          src={searchIcon}
          alt="Search"
          width={20}
          height={20}
          className="absolute right-4 top-2"
        />
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCampaigns.map((campaign) => (
          <Card key={campaign.id} className="bg-white border border-[#13ADB7] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Image
              src="/images/hungry-girl.jpg"
              alt={campaign.title}
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <CardContent className="p-4">
              <CardHeader className='p-2'>
                <CardTitle className="text-lg font-bold text-[#13ADB7]">{campaign.title}</CardTitle>
              </CardHeader>
              <p className="text-gray-700 mt-2 h-8">{campaign.story}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-900 font-semibold text-sm">
                  Raised: {campaign.fundsRaised} <span className="text-gray-600">of {campaign.target}</span>
                </div>
                <Link href={`/campaigns/${campaign.id}/show`}><Button className="bg-[#13ADB7] text-white py-1 px-4 rounded-lg">Donate</Button></Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCampaigns;
