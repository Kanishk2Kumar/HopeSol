"use client"; // Ensures the component runs on the client side

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Input } from '@/components/ui/input'; // Importing Input for the Fund Card

const CampaignDetails: React.FC = () => {
  // Fake data for the campaign
  const campaign = {
    image: '/hungry-girl.jpg', // Update with your image path
    daysLeft: 10,
    fundsRaised: '2.5 SOL',
    target: '5 SOL',
    creatorName: 'Kanishk Kumar',
    story: 'This is a story about a campaign that aims to achieve something extraordinary. Join us in our journey and make a difference!',
    donators: [
      { name: 'Alice Smith', amount: '0.5 SOL' },
      { name: 'Bob Johnson', amount: '1.0 SOL' },
      { name: 'Charlie Brown', amount: '1.0 SOL' },
    ],
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <Card className="relative w-full max-w-4xl border-2 rounded-lg bg-white p-6 mx-auto" style={{ width: '90%' }}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Campaign Image */}
          <div className="flex-1">
            <Image src={campaign.image} alt="Campaign Image" width={600} height={400} className="rounded-lg" />
          </div>

          {/* Details Cards */}
          <div className="flex-none lg:w-[175px] flex flex-col gap-8">
            {/* Fund Raised Card */}
            <Card className="bg-white border border-[#13ADB7] p-2 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg">Funds Raised</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-lg font-bold text-[#13ADB7]">
                {campaign.fundsRaised} of {campaign.target}
              </CardContent>
            </Card>

            {/* Days Left Card */}
            <Card className="bg-white border border-[#13ADB7] p-2 rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-lg">Days Left</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-lg text-gray-700">
                {campaign.daysLeft}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Details Below the Image */}
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          {/* Details */}
          <div className="flex-1">
            {/* Creator Name */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900">Creator: {campaign.creatorName}</h4>
            </div>

            {/* Story */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Story</h4>
              <p className="text-gray-800">{campaign.story}</p>
            </div>

            {/* Donators */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Donators</h4>
              <ul className="list-disc pl-5 mt-2">
                {campaign.donators.length > 0 ? (
                  campaign.donators.map((donator, index) => (
                    <li key={index} className="text-gray-700">
                      {donator.name} donated {donator.amount}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-700">No donators yet. Be the first one!</p>
                )}
              </ul>
            </div>
          </div>

          {/* Fund Campaign Card */}
          <div className="flex-none lg:w-[350px]">
            <Card className="bg-white border border-[#13ADB7] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-center text-lg">Fund This Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-lg font-semibold mb-2">Enter Amount</h2>
                <Input
                  type="number"
                  placeholder="0.1 SOL"
                  step="0.01"
                  className="mb-4"
                />
                <div className="flex justify-center">
                  <Button className="bg-[#13ADB7] text-white px-6 py-3">Fund Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CampaignDetails;
