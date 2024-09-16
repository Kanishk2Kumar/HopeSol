"use client"; // Ensures the component runs on the client side

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Importing Button component

const AllCampaigns: React.FC = () => {
  const [search, setSearch] = useState('');

  // Dummy data for campaigns
  const campaigns = [
    {
      id: 1,
      title: 'Campaign One',
      story: 'This is a story about Campaign One.',
      fundsRaised: '1.0 SOL',
      target: '3.0 SOL',
      creatorAddress: '5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS'
    },
    {
      id: 2,
      title: 'Campaign Two',
      story: 'This is a story about Campaign Two.',
      fundsRaised: '0.5 SOL',
      target: '2.0 SOL',
      creatorAddress: '5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS'
    },
    {
      id: 3,
      title: 'Campaign Three',
      story: 'This is a story about Campaign Three.',
      fundsRaised: '1.5 SOL',
      target: '4.0 SOL',
      creatorAddress: '5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS'
    },
    {
      id: 4,
      title: 'Campaign Four',
      story: 'This is a story about Campaign Four.',
      fundsRaised: '2.0 SOL',
      target: '5.0 SOL',
      creatorAddress: '5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS'
    },
    {
      id: 5,
      title: 'Campaign Five',
      story: 'This is a story about Campaign Five.',
      fundsRaised: '0.8 SOL',
      target: '3.5 SOL',
      creatorAddress: '5Mp1uPbhgV8ux1FvJqsLrSfpANkXLwH4xceEjBfWKuuS'
    }
  ];

  // Filter campaigns based on search
  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-white lg:pl-24 lg:pr-24">
      {/* Search Bar */}
      <div className="mb-8 lg:pl-24 lg:pr-24">
        <Input
          type="text"
          placeholder="Search campaigns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCampaigns.map((campaign) => (
          <Card key={campaign.id} className="bg-white border border-[#13ADB7] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Image
              src="/hungry-girl.jpg"
              alt={campaign.title}
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <CardContent className="p-4">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#13ADB7]">{campaign.title}</CardTitle>
              </CardHeader>
              <p className="text-gray-700 mt-2">{campaign.story}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-900 font-semibold">
                  Raised: {campaign.fundsRaised} <span className="text-gray-600">of {campaign.target}</span>
                </div>
                <Button className="bg-[#13ADB7] text-white py-1 px-4 rounded-lg">Donate</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCampaigns;
