"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Film, 
  Scissors, 
  Layers, 
  Wind, 
  Tv, 
  Zap 
} from "lucide-react";

const services = [
  {
    title: "Cinematic Editing",
    description: "High-end storytelling for films, documentaries, and commercials.",
    icon: Film,
  },
  {
    title: "Post-Production",
    description: "Precision cutting and assembly for seamless visual flow.",
    icon: Scissors,
  },
  {
    title: "Color Grading",
    description: "Professional color correction to set the perfect mood and tone.",
    icon: Layers,
  },
  {
    title: "Motion Graphics",
    description: "Dynamic titles and 2D/3D elements that elevate your video.",
    icon: Zap,
  },
  {
    title: "Sound Design",
    description: "Immersive audio soundscapes and crystal clear mixing.",
    icon: Wind,
  },
  {
    title: "Social Media Ads",
    description: "Fast-paced, engaging edits designed for high conversion.",
    icon: Tv,
  },
];

function TiltCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      animate={{ rotateX, rotateY }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative h-[450px] w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full glass p-12 rounded-[2.5rem] flex flex-col items-center text-center justify-center border-white/5 group-hover:border-accent/40 transition-colors duration-500"
      >
        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl">
          <service.icon size={36} />
        </div>
        
        <div>
          <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-accent transition-colors tracking-tighter">
            {service.title}
          </h3>
          <p className="text-white/40 text-lg leading-relaxed max-w-[280px] mx-auto">
            {service.description}
          </p>
        </div>

        <div className="absolute top-8 right-8 text-white/5 font-black text-6xl group-hover:text-accent/10 transition-colors">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} id="services" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Text Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-40 left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase z-0"
      >
        Capabilities
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.8em] text-accent font-bold"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mt-8 tracking-tighter leading-[0.8] uppercase"
          >
            Creative <br />
            <span className="text-white/20">Solutions.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <TiltCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
