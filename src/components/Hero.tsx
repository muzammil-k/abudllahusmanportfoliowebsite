"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingLines from "./FloatingLines";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Lines Effect - LAVA THEME */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FloatingLines 
          linesGradient={['#ff0000', '#ff4500', '#330000', '#121212']}
          animationSpeed={1.2}
          interactive={true}
          bendStrength={0.8}
          bendRadius={3.0}
        />
      </div>

      {/* Background Lava Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none z-0"
      >
        <Image
          src="/assets/hero_orb.png"
          alt="Lava Glow"
          fill
          className="object-contain blur-[120px] invert hue-rotate-[320deg]"
          priority
        />
      </motion.div>

      <div className="container-custom relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-accent mb-8 font-bold">
            Master Video Editor
          </span>
          
          <h1 className="heading-xl text-gradient mb-8">
            Abdullah <span className="script-text">Usman</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/40 mb-14 leading-relaxed font-medium">
            Transforming raw footage into cinematic masterpieces with a focus on high-impact visual storytelling.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="btn-primary">
              Book a Session
            </button>
            <button className="btn-secondary">
              Latest Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 glass rounded-2xl rotate-12 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 blur-lg" />
        </div>
      </motion.div>
    </section>
  );
}
