"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-primary-text mb-8 tracking-tight italic">
            Research & Experiments
          </h2>
          <div className="p-8 border-l-2 border-accent bg-secondary/30 backdrop-blur-sm rounded-r-2xl">
            <p className="text-lg text-muted-text leading-relaxed italic">
              &quot;Explorations in autonomous agents, AI reasoning systems, and intelligence analysis platforms. My current focus is on multi-agent collaboration protocols and chain-of-thought verification.&quot;
            </p>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-xl border border-secondary">
              <h4 className="text-primary-text font-bold mb-2">Agentic Reasoning</h4>
              <p className="text-sm text-muted-text">Investigating how small models can outperform larger ones through iterative reasoning loops.</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-secondary">
              <h4 className="text-primary-text font-bold mb-2">Information Pipelines</h4>
              <p className="text-sm text-muted-text">Optimizing high-throughput data ingestion for RAG systems using asynchronous scraping agents.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
