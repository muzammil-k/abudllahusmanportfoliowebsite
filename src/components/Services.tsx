"use client";

import { motion } from "framer-motion";
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

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">
            Cinematic <br /><span className="text-white/40">Editing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-10 rounded-[2rem] hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="text-white group-hover:text-accent transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/40 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
