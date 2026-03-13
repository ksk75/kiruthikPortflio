"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { techStack } from "@/data/projects";

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="p-4 bg-background rounded-xl border border-secondary text-center hover:border-accent/30 transition-all"
            >
              <p className="text-primary-text font-medium">{tech.name}</p>
              <p className="text-[10px] text-muted-text uppercase tracking-widest mt-1">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
