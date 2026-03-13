"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-text max-w-xl">
            Selected engineering work focused on AI infrastructure and reasoning.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover="hover"
              initial="initial"
              variants={cardHover}
              className="p-8 bg-secondary/50 rounded-2xl border border-secondary group hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-text mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-text mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background text-muted-text text-xs font-mono rounded-md border border-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-muted-text hover:text-primary-text transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="text-muted-text hover:text-primary-text transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
