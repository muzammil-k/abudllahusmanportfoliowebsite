"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Play, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Urban Pulse",
    category: "Short Film / Music Video",
    image: "/assets/project_1.png",
    description: "A fast-paced rhythmic edit exploring the energy of Tokyo's nightlife.",
  },
  {
    title: "The Silent Peak",
    category: "Documentary / Nature",
    image: "/assets/project_2.png",
    description: "Cinematic color grading and storytelling for an alpine expedition.",
  },
];

function ProjectItem({ project, index }: { project: any; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={containerRef} className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
      <motion.div 
        style={{ y: imageY }}
        className="flex-[1.5] relative aspect-[16/10] w-full overflow-hidden rounded-[3rem] shadow-2xl group cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center transition-all duration-700">
          <div className="w-24 h-24 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
            <Play size={40} className="fill-white text-white ml-2" />
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ y: textY }}
        className="flex-1 flex flex-col"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-sm font-black text-accent uppercase tracking-[0.3em]">{project.category}</span>
        </div>
        <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">{project.title}</h3>
        <p className="text-xl md:text-2xl text-white/40 mb-12 leading-relaxed">
          {project.description}
        </p>
        <button className="btn-secondary w-fit flex items-center gap-4 px-12 group border-white/5">
          Case Study
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#121212] relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-xs uppercase tracking-[0.6em] text-accent font-bold">Showcase</span>
          <h2 className="text-6xl md:text-9xl font-black mt-8 tracking-tighter leading-[0.85]">
            Featured <br />
            <span className="text-white/20 italic">Work.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-60">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
