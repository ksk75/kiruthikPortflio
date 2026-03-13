"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "Email", icon: <Mail size={24} />, href: "mailto:kiruthik@example.com" },
  { name: "GitHub", icon: <Github size={24} />, href: "https://github.com/kiruthik-kumar" },
  { name: "LinkedIn", icon: <Linkedin size={24} />, href: "https://linkedin.com/in/kiruthik-kumar" },
  { name: "Twitter", icon: <Twitter size={24} />, href: "https://twitter.com/kiruthik" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-primary-text mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-text mb-12 max-w-2xl mx-auto">
            Open for collaborations on autonomous systems, research projects, and intelligence platforms.
          </p>
          
          <div className="flex justify-center gap-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-text hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
