"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const High = `High Throughput: Solana processes over 65,000 transactions per second, ensuring quick and smooth donations and transactions on HopeSol.
`;
const Low = `Low Costs: With fees under $0.01 per transaction, Solana makes frequent microtransactions economical, maximizing donations on our platform.`;
const Decentralize = `Decentralization & Security: Solana’s decentralized blockchain ensures the security and integrity of HopeSol’s financial transactions and funds.`;
const Scalability = `Scalability: Solana’s scalability keeps HopeSol responsive and performant as it grows, even during high-traffic periods.`;
const Energy = `Energy Efficiency: Solana’s low energy consumption supports HopeSol’s commitment to sustainability and eco-friendly operations.`;
const Developer = `Developer Tools: Solana’s strong developer ecosystem supports seamless integration of wallet functions and smart contracts, keeping HopeSol future-proof.

`;
const sol = "Solana";

export function WhySol() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:m-20 lg:px-28 px-4">
      {/* Left Side (Text Content) */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-left text-3xl font-bold mb-8">
          Why <span className="text-[#2b247c]">{sol}</span> ?
        </h2>
        <TextGenerateEffect words={High} />
        <TextGenerateEffect words={Low} />
        <TextGenerateEffect words={Decentralize} />
        <TextGenerateEffect words={Scalability} />
        <TextGenerateEffect words={Developer} />
        <TextGenerateEffect words={Energy} />
      </div>

      {/* Right Side (Image) */}
      <div className="lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-16">
        <Image
          src="/images/Solana.jpg" // Replace with the actual path to your image
          alt="Why Solidity Image"
          width={500} // Adjust size accordingly
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
