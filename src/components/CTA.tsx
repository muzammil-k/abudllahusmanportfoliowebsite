"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black mb-12 tracking-tighter"
        >
          Let&apos;s build something <br /><span className="text-white/30">exceptional.</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:scale-105 transition-all duration-300">
            Book a Call
          </button>
          <button className="px-12 py-5 rounded-full glass text-white font-black text-xl hover:bg-white/5 transition-all duration-300">
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
}
