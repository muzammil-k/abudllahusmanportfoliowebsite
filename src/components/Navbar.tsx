"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-10 bg-transparent pointer-events-none"
    >
      <div className="text-2xl font-black tracking-tighter uppercase pointer-events-auto">
        Abdullah<span className="text-accent">.</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 pointer-events-auto">
        {['Expertise', 'Works', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="pointer-events-auto">
        <button className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
          Enquire
        </button>
      </div>
    </motion.nav>
  );
}
