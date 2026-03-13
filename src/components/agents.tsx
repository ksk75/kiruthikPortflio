"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { agents } from "@/data/projects";
import { Bot } from "lucide-react";

export default function Agents() {
  return (
    <section id="agents" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">
            AI Agents
          </h2>
          <p className="text-muted-text max-w-xl">
            Autonomous systems designed for specific research and operational tasks.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={fadeInUp}
              className="p-8 bg-background rounded-2xl border border-secondary relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Bot size={80} />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-text mb-3">
                {agent.name}
              </h3>
              <p className="text-muted-text mb-6">
                {agent.description}
              </p>
              
              <div className="p-4 bg-secondary/50 rounded-lg border border-secondary/50">
                <p className="text-xs font-mono text-accent uppercase mb-2 tracking-wider">
                  Architecture
                </p>
                <p className="text-sm text-muted-text italic">
                  {agent.architectureDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
