"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Smartphone, 
  Layout, 
  Globe, 
  Package, 
  Play 
} from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    description: "Crafting memorable visual stories for modern brands.",
    icon: Palette,
  },
  {
    title: "Product Design",
    description: "Solving complex problems with elegant solutions.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces that engage and convert.",
    icon: Layout,
  },
  {
    title: "Web Development",
    description: "High-performance websites built with modern stacks.",
    icon: Globe,
  },
  {
    title: "Packaging Design",
    description: "Premium physical experiences for your products.",
    icon: Package,
  },
  {
    title: "Motion Design",
    description: "Bringing your brand to life with fluid movement.",
    icon: Play,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Services</span>
          <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">
            Premium <br /><span className="text-white/40">Solutions.</span>
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
              className="glass p-10 rounded-[2rem] hover:border-white/20 transition-all duration-300 group"
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
