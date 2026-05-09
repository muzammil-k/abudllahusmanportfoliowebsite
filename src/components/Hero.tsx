"use client";

import { motion } from "framer-motion";
import FloatingLines from "./FloatingLines";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[120vh] md:h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-background pt-32 pb-10">
      <FloatingLines 
        linesGradient={['#ff0000', '#ff4d4d', '#cc0000', '#990000', '#050505']}
        animationSpeed={0.5}
        interactive={true}
        parallax={true}
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[1]" />
      
      {/* Center Content: Profile Card & Intro */}
      <div className="relative z-10 flex flex-col items-center flex-1 justify-center w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 10, 
            rotateX: -10, 
            boxShadow: "0 0 50px rgba(255, 0, 0, 0.4)" 
          }}
          className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-[2.5rem] glass-card overflow-hidden border border-white/20 flex items-center justify-center group cursor-pointer mb-10"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          {/* Inner hover glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
          
          <Image
            src="/profile.jpeg"
            alt="Abdullah Usman Profile"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xl text-center text-lg md:text-xl text-white/40 tracking-wide font-medium leading-relaxed mb-8"
        >
          Video Editor & Visual Storyteller. <br />
          Crafting high-octane cinematic experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="btn-premium-fill flex items-center justify-center gap-3">
            Start Project <ArrowRight size={20} />
          </button>
          <button className="btn-premium-outline flex items-center justify-center">
            View Showreel
          </button>
        </motion.div>
      </div>

      {/* Bottom Content: Name */}
      <div className="relative z-10 w-full flex justify-center pb-4 md:pb-12 mt-12 md:mt-0">
        <h1 className="hero-heading text-center flex flex-row items-center gap-4 md:gap-8">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30"
            >
              Abdullah
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-accent text-glow"
            >
              Usman
            </motion.span>
          </span>
        </h1>
      </div>
    </section>
  );
}
