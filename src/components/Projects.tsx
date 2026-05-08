"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Neon Frontier",
    category: "Futuristic Short Film",
    image: "/assets/project_1.png",
    color: "#ff0000",
  },
  {
    title: "Apex Athletics",
    category: "Brand Commercial",
    image: "/assets/project_2.png",
    color: "#990000",
  },
  {
    title: "Shadow Syndicate",
    category: "Music Video",
    image: "/assets/hero_orb.png",
    color: "#ff4d4d",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden">
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-full h-[80vh] container-max overflow-hidden rounded-[3rem] group"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        
        {/* Project Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 md:p-24 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-6 block">
                {project.category}
              </span>
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                {project.title}
              </h3>
              <button className="btn-premium-outline w-fit flex items-center gap-3">
                View Case Study <ArrowUpRight size={20} />
              </button>
            </div>
            
            <div className="text-[12rem] font-black text-white/5 leading-none hidden lg:block">
              0{index + 1}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-background relative">
      <div className="container-max pt-32 pb-12">
        <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">Selected</span>
        <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter leading-none">
          Works.
        </h2>
      </div>
      
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
