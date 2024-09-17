"use client"; // Ensures the component runs on the client side

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Input } from '@/components/ui/input'; // Importing Input for the Fund Card
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

import { useRouter } from 'next/navigation'
import AppWalletProvider from '@/components/AppWalletProvider';
import {

  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

interface SuccessCardProps {
  transactionSignature: string;
}
// Success card component
const SuccessCard: React.FC<SuccessCardProps> = ({ transactionSignature }) => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="rounded-lg bg-gray-50 px-16 py-14">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-200 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
        Congratulations!!!
      </h3>
      <p className="w-[230px] text-center font-normal text-gray-600">
        Your transaction has been successfully processed.
      </p>


      <div className="mt-10 flex flex-col gap-4 items-center">
        {/*  */}
        <a
          href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
        >
          Track Transaction
        </a>


        <button
          className="block rounded-xl border-4 border-transparent bg-blue-500 px-6 py-3 text-center text-base font-medium text-white outline-8 hover:outline hover:duration-300"
          onClick={() => window.location.href = "/campaigns/all"}
        >
          Back to Campaigns
        </button>
      </div>
    </div>
  </div>
);

// import WalletConnection from '@/components/WalletConnection';

const CampaignDetails: React.FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const router = useRouter();
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSignature, setTransactionSignature] = useState('');
  // Fake data for the campaign
  const campaign = {
    image: '/images/hungry-girl.jpg',
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

  async function sendSol() {
    if (!wallet.publicKey) {
      console.error("Wallet not connected");
      return;
    }

    let to = "FFHcpYtpmPbv8exWeNLBVYSSV2Rv4BA6dhi5NU3ZyB2G";
    let amountElement = document.getElementById("amount") as HTMLInputElement;

    // Ensure that amountElement is found and amount is converted to a number
    if (amountElement && amountElement.value) {
      let amount = parseFloat(amountElement.value);

      if (isNaN(amount)) {
        console.error("Invalid amount");
        return;
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(to),
          lamports: amount * LAMPORTS_PER_SOL, // Convert SOL to lamports
        })
      );

      try {
        let signature = await wallet.sendTransaction(transaction, connection);
        console.log("Transaction signature:", signature);
        setTransactionSignature(signature);
        setTransactionSuccess(true);
        // router.push('/campaigns/all');
      } catch (error) {
        console.error("Transaction failed:", error);
      }
    } else {
      console.error("Amount input not found or invalid");
    }
  }


  return (
    <AppWalletProvider>
      <div>
        <WalletMultiButton className="bg-blue-500 hover:bg-blue-600 text-white font-medium  px-4 rounded" />
        <WalletDisconnectButton className="bg-red-500 hover:bg-red-600 text-white font-medium  px-4 rounded" />
      </div>
      {transactionSuccess ? (
        <SuccessCard transactionSignature={transactionSignature} /> // Render the success card when transaction is successful
      ) : (
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
                      id="amount"
                    />
                    <div className="flex justify-center">
                      <Button onClick={sendSol} className="bg-[#13ADB7] text-white px-6 py-3">Fund Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      )}
    </AppWalletProvider>
  );
};

export default CampaignDetails;
