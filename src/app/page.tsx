import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CTA />
      
      <footer className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-2xl font-black tracking-tighter">AURA.</span>
            <p className="text-white/30 text-sm mt-4">&copy; 2026 Aura Design. All rights reserved.</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/40">Socials</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition-colors">TW</a>
                <a href="#" className="hover:text-accent transition-colors">IG</a>
                <a href="#" className="hover:text-accent transition-colors">BE</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/40">Say Hello</span>
              <a href="mailto:hello@aura.design" className="text-lg font-medium hover:text-accent transition-colors">hello@aura.design</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
