"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-2xl font-black tracking-tighter uppercase">
        Abdullah<span className="text-accent">.</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-white/50">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button className="px-8 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
        Hire Me
      </button>
    </motion.nav>
  );
}
