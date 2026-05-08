"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import FloatingLines from "./FloatingLines";
import { useEffect } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement springs
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms for different layers
  const textX = useTransform(smoothX, [0, 500], [0, 20]);
  const textY = useTransform(smoothY, [0, 500], [0, 20]);
  
  const cardX = useTransform(smoothX, [0, 500], [0, -40]);
  const cardY = useTransform(smoothY, [0, 500], [0, -40]);

  const bgX = useTransform(smoothX, [0, 500], [0, 10]);
  const bgY = useTransform(smoothY, [0, 500], [0, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to range [-innerWidth/2, innerWidth/2]
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Lines Effect */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0 opacity-30"
      >
        <FloatingLines 
          linesGradient={['#ff4d4d', '#ff0000', '#333333']}
          animationSpeed={0.8}
          parallaxStrength={0.2}
          bendStrength={0.3}
        />
      </motion.div>

      {/* Background Orb */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0"
      >
        <Image
          src="/assets/hero_orb.png"
          alt="Orb"
          fill
          className="object-contain blur-3xl opacity-20 invert"
          priority
        />
      </motion.div>

      <motion.div 
        style={{ x: textX, y: textY }}
        className="container relative z-10 text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-xs uppercase tracking-[0.4em] text-accent mb-6"
        >
          Creative Video Editor
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="heading-xl text-gradient mb-8"
        >
          Abdullah <br /> Usman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed"
        >
          Crafting cinematic stories and high-impact visual experiences through precision editing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-base hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
            Book a Free Call
          </button>
          <button className="px-10 py-4 rounded-full glass text-white font-bold text-base hover:bg-white/10 transition-all duration-300">
            See Projects
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Glass Cards */}
      <motion.div
        style={{ x: cardX, y: cardY }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] hidden xl:block w-64 h-40 glass rounded-3xl p-6"
      >
        <div className="w-10 h-10 rounded-full bg-accent/20 mb-4" />
        <div className="w-full h-2 bg-white/10 rounded mb-2" />
        <div className="w-2/3 h-2 bg-white/10 rounded" />
      </motion.div>
    </section>
  );
}
