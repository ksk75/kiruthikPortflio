"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-4"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">
            AI Systems Engineer
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold tracking-tight text-primary-text mb-6 leading-tight"
        >
          Kiruthik Kumar
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl md:text-2xl text-muted-text max-w-2xl mb-10 leading-relaxed"
        >
          Building autonomous AI agents, intelligence platforms, and research systems.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-text text-background rounded-full font-medium hover:bg-accent transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-secondary text-primary-text rounded-full font-medium hover:border-accent transition-colors duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
