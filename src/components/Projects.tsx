"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lumina Archive",
    category: "Architecture / Editorial",
    image: "/assets/project_1.png",
    description: "A deep dive into minimalist structural design and light study.",
  },
  {
    title: "Chronos Vision",
    category: "Product / Digital",
    image: "/assets/project_2.png",
    description: "Next-generation timekeeping interface for the spatial web.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Projects</span>
            <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">
              Featured <br /><span className="text-white/40">Work.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={index % 2 === 0 ? "flex flex-col lg:flex-row gap-12" : "flex flex-col lg:flex-row-reverse gap-12"}
            >
              <div className="flex-1 relative aspect-[16/10] overflow-hidden rounded-[2.5rem] group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-sm font-medium text-white/40 mb-4">{project.category}</span>
                <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">{project.title}</h3>
                <p className="text-xl text-white/50 mb-8 max-w-lg leading-relaxed">
                  {project.description}
                </p>
                <button className="w-fit flex items-center gap-3 text-lg font-bold group">
                  View Project 
                  <span className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
