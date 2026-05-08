"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      {/* Lava Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.5em] text-accent font-bold mb-10 block">Get in Touch</span>
          <h2 className="heading-xl text-gradient mb-16">
            Let&apos;s ignite <br />
            <span className="text-white/20">your story.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button className="btn-primary px-16 py-6 text-2xl">
              Start a Project
            </button>
            <a href="mailto:hello@abdullah.design" className="text-2xl font-black border-b-2 border-white/10 hover:border-accent transition-colors py-2 px-4">
              hello@abdullah.design
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
