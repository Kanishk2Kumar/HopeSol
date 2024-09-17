// import { Button } from "./components/ui/button";
"use client";

import Navbar from "./components/Nav";
import {

  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />

      <div >
        <WalletMultiButton className="bg-blue-500 hover:bg-blue-600 text-white font-medium  px-4 rounded" />
        <WalletDisconnectButton className="bg-red-500 hover:bg-red-600 text-white font-medium  px-4 rounded" />
      </div>

    </main>
  );
}
