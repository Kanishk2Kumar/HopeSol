// import { Button } from "./components/ui/button";
"use client";

import Navbar from '@/components/Nav';
import { Hero } from '@/components/Hero';
import AllCampaigns from '@/components/OpenDonations';
import { Helped } from '@/components/HelpedPeople';
import { Sponsors } from '@/components/sponsor';
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  return (
    <main className='relative bg-white'>
      {/* <Navbar /> */}
    <section>
      <Hero />
    </section>
    <section>
      <AllCampaigns />
    </section>
    <section>
      <Helped />
    </section>
    <section>
      <Sponsors />
    </section>
    </main>
  );
}
