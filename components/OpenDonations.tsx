"use client"; // Ensures the component runs on the client side

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import searchIcon from '../public/icons/search.svg'; // Search icon path
import { campaigns } from '@/constants/campaigns'; // Import dummy data
import Link from 'next/link';
import axios from 'axios';

const AllCampaigns: React.FC = () => {
  const [search, setSearch] = useState('');
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/campaigns/all');
        setCampaigns(response.data); // Set campaigns from the API response
      } catch (err) {
        console.error(err);
      }
    };

    fetchCampaigns();
  }, []);


  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div suppressHydrationWarning={true} className="p-8 bg-white lg:pl-48 lg:pr-48">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 mt-8">
        Open <span className='text-[#13ADB7]'>Donations</span>
      </h2>

      {/* Search Bar */}
      <div suppressHydrationWarning={true} className="relative mb-8 lg:pl-48 lg:mr-48 mt-10">
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

      <div suppressHydrationWarning={true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {filteredCampaigns.map((campaign) => (
          <Card key={campaign._id} className="bg-white border border-[#13ADB7] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="w-full h-[180px]">
              <Image
                src={campaign.coverImg}
                alt={campaign.title}
                width={400}
                height={250}
                className="rounded-t-lg object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <CardHeader className='p-2'>
                <CardTitle className="text-lg font-bold text-[#13ADB7]">{campaign.title}</CardTitle>
              </CardHeader>
              <p className="text-gray-700 mt-2 h-7 line-clamp-1 overflow-hidden text-ellipsis">{campaign.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-900 font-semibold text-sm">
                  Raised: {campaign.currentAmount} <span className="text-gray-600">of {campaign.targetAmount}</span>
                </div>
                <Link href={`/campaigns/${campaign._id}/show`}>
                  <Button className="bg-[#13ADB7] text-white py-1 px-4 rounded-lg">Donate</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Campaigns Link */}
      <div className="mt-8 text-right">
        <a href="/campaigns/all" className="text-[#13ADB7] hover:text-[#0D98A6]">
          View All Campaigns
        </a>
      </div>
    </div>
  );
};

export default AllCampaigns;

