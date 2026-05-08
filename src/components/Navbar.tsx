"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 backdrop-blur-md bg-black/20"
    >
      <Link href="/" className="text-2xl font-black tracking-tighter text-white">
        AURA<span className="text-accent">.</span>
      </Link>

      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform duration-300"
      >
        Get Started
      </Link>
    </motion.nav>
  );
}
