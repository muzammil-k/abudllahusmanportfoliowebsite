"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Share2 } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="section-spacing relative overflow-hidden bg-background">
      {/* Lava Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-max relative z-10">
        <div className="glass-card p-16 md:p-32 flex flex-col items-center text-center overflow-hidden relative">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.6em] text-xs uppercase mb-12"
          >
            Available for worldwide projects
          </motion.span>
          
          <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.85] uppercase">
            Let&apos;s build <br />
            <span className="text-white/20">The Future.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <button className="btn-premium-fill text-2xl px-16 py-8 flex items-center gap-4">
              Get In Touch <ArrowRight size={32} />
            </button>
            
            <div className="flex gap-8">
              {[Mail, MessageCircle, Share2].map((Icon, i) => (
                <div key={i} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer">
                  <Icon size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="container-max pt-32 pb-12 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 mt-32">
        <div className="text-2xl font-black tracking-tighter uppercase">
          Abdullah<span className="text-accent">.</span>
        </div>
        <div className="flex gap-12 text-[10px] font-bold tracking-widest text-white/20 uppercase">
          <span>&copy; 2026 Abdullah Usman</span>
          <span>Crafted for Excellence</span>
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
}
