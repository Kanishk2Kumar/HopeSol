"use client"; // Ensures the component runs on the client side

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { campaigns } from '@/constants/campaigns'; // Import the campaigns
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import AppWalletProvider from '@/components/AppWalletProvider';

interface SuccessCardProps {
  transactionSignature: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ transactionSignature }) => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="rounded-lg bg-gray-50 px-16 py-14">
      {/* Success card content */}
    </div>
  </div>
);

const CampaignDetails: React.FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const router = useRouter();
  const [campaign, setCampaign] = useState<any>(null);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionSignature, setTransactionSignature] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch campaign id from URL params
  useEffect(() => {
    const currentPath = window.location.pathname;
    const campaignId = parseInt(currentPath.split("/")[2]); // Extracts the campaign id from the URL
    const selectedCampaign = campaigns.find(c => c.id === campaignId);
    if (selectedCampaign) {
      setCampaign(selectedCampaign);
    } else {
      setErrorMessage("Campaign not found");
    }
  }, []);

  // Solana transaction logic
  async function sendSol() {
    if (!wallet.publicKey) {
      setErrorMessage("Invalid amount");
      return;
    }

    const to = "FFHcpYtpmPbv8exWeNLBVYSSV2Rv4BA6dhi5NU3ZyB2G";
    const amountElement = document.getElementById("amount") as HTMLInputElement;

    if (amountElement && amountElement.value) {
      const amount = parseFloat(amountElement.value);

      if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount.");
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
        const signature = await wallet.sendTransaction(transaction, connection);
        setTransactionSignature(signature);
        setTransactionSuccess(true);
      } catch (error) {
        console.error("Transaction failed:", error);
        setErrorMessage("Transaction failed. Make sure you have sufficient funds.");
      }
    } else {
      setErrorMessage("Amount input not found or invalid.");
    }
  }

  if (!campaign) {
    return <div>Loading campaign details...</div>;
  }

  return (
    <AppWalletProvider>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {transactionSuccess ? (
        <SuccessCard transactionSignature={transactionSignature} />
      ) : (
        <div className="mt-10 min-h-screen bg-white p-8">
          <Card className="relative w-full max-w-4xl border-2 rounded-lg bg-white p-6 mx-auto" style={{ width: '90%' }}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Campaign Image */}
              <div className="flex-1">
                <Image src={campaign.image} alt={campaign.title} width={600} height={400} className="rounded-lg" />
              </div>

              {/* Fund Raised & Days Left Cards */}
              <div className="flex-none lg:w-[175px] flex flex-col gap-8">
                {/* Funds Raised Card */}
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
                  <CardContent className="text-center text-lg">
                    {campaign.daysLeft}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="mt-8 flex flex-col lg:flex-row gap-8">
              {/* Creator & Story */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold">Creator: {campaign.creatorName}</h4>
                <p className="text-lg mt-4">{campaign.story}</p>

                {/* Donators */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold">Donators</h4>
                  <ul className="list-disc pl-5 mt-2">
                  
                  </ul>
                </div>
              </div>

              {/* Fund Campaign Card */}
              <div className="flex-none lg:w-[350px]">
                <Card className="bg-white border border-[#13ADB7] p-4 rounded-lg shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center text-lg">Fund This Campaign</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-lg font-semibold mb-2">Enter Amount</h2>
                    <Input type="number" placeholder="0.1 SOL" step="0.01" id="amount" className="mb-4" />
                    <Button onClick={sendSol} className="bg-[#13ADB7] text-white px-6 py-3 w-full">Fund Now</Button>
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
