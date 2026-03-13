"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Github, Star } from "lucide-react";
import { GithubRepo } from "@/lib/github";

export default function OpenSource({ repos }: { repos: GithubRepo[] }) {
  return (
    <section id="opensource" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-text mb-4 tracking-tight">
            Open Source
          </h2>
          <p className="text-muted-text max-w-xl">
            Active contributions and public research repositories.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="p-6 bg-secondary/20 rounded-xl border border-secondary hover:border-accent/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <Github size={20} className="text-muted-text group-hover:text-accent transition-colors" />
                <div className="flex items-center gap-1 text-sm text-muted-text">
                  <Star size={14} />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2 truncate">
                {repo.name}
              </h3>
              <p className="text-sm text-muted-text mb-4 line-clamp-2">
                {repo.description || "No description provided."}
              </p>
              {repo.language && (
                <span className="text-[10px] font-mono px-2 py-1 bg-background rounded border border-secondary text-muted-text">
                  {repo.language}
                </span>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
