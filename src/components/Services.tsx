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
    <section id="services" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.5em] text-accent font-bold">Capabilities</span>
          <h2 className="text-5xl md:text-8xl font-black mt-8 tracking-tighter leading-none">
            Creative <br />
            <span className="text-white/20">Solutions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-12 rounded-[2.5rem] group hover:border-accent/40 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                <service.icon className="text-white/60 group-hover:text-accent transition-colors" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-white/40 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
