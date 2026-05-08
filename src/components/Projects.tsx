"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#121212]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.5em] text-accent font-bold">Showcase</span>
            <h2 className="text-5xl md:text-8xl font-black mt-8 tracking-tighter leading-none">
              Featured <span className="script-text">Work</span>
            </h2>
          </div>
          <button className="flex items-center gap-4 text-accent font-black text-xl group">
            View All Projects 
            <span className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <ArrowUpRight size={24} />
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={index % 2 === 0 ? "flex flex-col lg:flex-row gap-16" : "flex flex-col lg:flex-row-reverse gap-16"}
            >
              <div className="flex-[1.5] relative aspect-[16/10] overflow-hidden rounded-[3rem] group cursor-pointer shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center transition-all duration-700">
                  <div className="w-24 h-24 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <Play size={40} className="fill-white text-white ml-2" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-sm font-bold text-accent uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">{project.title}</h3>
                <p className="text-xl md:text-2xl text-white/40 mb-12 leading-relaxed">
                  {project.description}
                </p>
                <button className="btn-secondary w-fit flex items-center gap-4 px-12 group">
                  Case Study
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
