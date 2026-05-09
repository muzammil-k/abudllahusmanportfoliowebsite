"use client";

import { motion } from "framer-motion";
import FloatingLines from "./FloatingLines";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <FloatingLines 
        linesGradient={['#ff0000', '#ff4d4d', '#cc0000', '#990000', '#050505']}
        animationSpeed={0.5}
        interactive={true}
        parallax={true}
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[1]" />
      
      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-[2px] bg-accent mb-10 origin-left"
          />
          
          <h1 className="hero-heading mb-8">
            <span className="block text-white/40 overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Abdullah
              </motion.span>
            </span>
            <span className="block text-accent text-glow overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                Usman
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-xl text-lg md:text-2xl text-white/30 mb-14 tracking-wide font-medium leading-relaxed"
          >
            Video Editor & Visual Storyteller. <br />
            Crafting high-octane cinematic experiences for modern brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="btn-premium-fill flex items-center gap-3">
              Start Project <ArrowRight size={20} />
            </button>
            <button className="btn-premium-outline">
              View Showreel
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-12 hidden lg:flex items-center gap-8 z-10"
      >
        <div className="flex gap-4">
          {['IG', 'TW', 'BE'].map((social) => (
            <span key={social} className="text-[10px] font-bold tracking-widest text-white/20 hover:text-accent transition-colors cursor-pointer">
              {social}
            </span>
          ))}
        </div>
        <div className="h-px w-20 bg-white/10" />
        <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
          Based in Pakistan / Remote
        </span>
      </motion.div>
    </section>
  );
}
