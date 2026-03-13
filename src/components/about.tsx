"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-8 tracking-tight italic">
            Behind the Systems
          </h2>
          <div className="space-y-6 text-lg text-muted-text leading-relaxed max-w-2xl">
            <p>
              I&apos;m an AI systems engineer focused on building autonomous agents, research platforms, and intelligence systems.
            </p>
            <p>
              My work spans multi-agent architectures, AI reasoning systems, and large-scale information pipelines. I specialize in bridging the gap between cutting-edge research and production-grade engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
