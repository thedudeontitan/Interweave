"use client";
import Hero from "@/components/Hero";
import React from "react";

declare global {
  interface Window {
    arweaveWallet: {
      connect: (foo: string[]) => void;
      disconnect: () => void;
      getActiveAddress: () => void;
    };
  }
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
