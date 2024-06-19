import { addApiDetails } from "@/ao_utils";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  addApiDetails();
  return (
    <div>
      <Hero />
    </div>
  );
}
