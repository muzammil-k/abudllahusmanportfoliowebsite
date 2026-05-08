"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <div id="expertise">
        <Services />
      </div>
      <div id="works">
        <Projects />
      </div>
      <CTA />
    </main>
  );
}
