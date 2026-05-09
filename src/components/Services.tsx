"use client";

import { motion } from "framer-motion";
import { 
  Film, 
  Scissors, 
  Layers, 
  Wind, 
  Zap,
  Activity
} from "lucide-react";
import GlareHover from "./GlareHover";

const services = [
  {
    title: "Cinematic Editing",
    description: "High-end storytelling for films, documentaries, and commercials.",
    icon: Film,
    size: "col-span-2 row-span-1",
  },
  {
    title: "Post-Production",
    description: "Precision cutting and visual flow.",
    icon: Scissors,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Color Grading",
    description: "Professional mood and tone setting.",
    icon: Layers,
    size: "col-span-1 row-span-1",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic titles and 2D/3D elements.",
    icon: Zap,
    size: "col-span-2 row-span-1",
  },
  {
    title: "Sound Design",
    description: "Immersive audio soundscapes.",
    icon: Wind,
    size: "col-span-1 row-span-1",
  },
  {
    title: "VFX & Effects",
    description: "High-impact visual enhancements.",
    icon: Activity,
    size: "col-span-1 row-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="section-spacing bg-background">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-[0.4em] text-xs uppercase"
            >
              Expertise
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-black mt-6 tracking-tighter leading-none">
              Creative <br />
              <span className="text-white/10">Edge.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/30 text-lg leading-relaxed">
            Specializing in high-octane post-production that pushes the boundaries of visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${service.size}`}
            >
              <GlareHover
                borderRadius="2.5rem"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="#ff0000"
                glareOpacity={0.2}
                className="glass-card p-10 flex flex-col justify-between group hover:border-accent/30 transition-all duration-500 cursor-default h-full w-full"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <service.icon size={28} />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/30 text-base leading-relaxed group-hover:text-white/50 transition-colors">
                    {service.description}
                  </p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
