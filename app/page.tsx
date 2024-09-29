// import { Button } from "./components/ui/button";
"use client";

import { Hero } from '@/components/Hero';
import AllCampaigns from '@/components/OpenDonations';
import { Helped } from '@/components/HelpedPeople';
import { Sponsors } from '@/components/sponsor';
import Footer from '@/components/Footer';
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
      <section className='hidden sm:block'>
        <Sponsors />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
