"use client";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink, ArrowUpRight, TrendingUp } from "lucide-react";
import type { Resume } from "@/data/resume";

const featuredProjects = [
  {
    title: "Headless E-Commerce Platform",
    description:
      "High-performance storefront with Vue.js + WordPress headless CMS. Aggressive code splitting and lazy loading cut load time dramatically.",
    tech: ["Vue.js", "WordPress", "REST API", "WooCommerce"],
    highlight: "5s → 1.2s",
    highlightLabel: "Load time",
    gradient: "from-blue-600/20 via-transparent to-transparent",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics with Stripe/PayPal integration. Built with React + TypeScript featuring live data visualization and subscription management.",
    tech: ["React", "TypeScript", "Stripe", "PayPal"],
    highlight: "Real-time",
    highlightLabel: "Analytics",
    gradient: "from-blue-600/20 via-transparent to-transparent",
  },
  {
    title: "Animated Portfolio Platform",
    description:
      "Interactive portfolio with advanced Vue.js animations and micro-interactions. Immersive UI experiences drove a significant engagement boost.",
    tech: ["Vue.js", "GSAP", "CSS Animations"],
    highlight: "+60%",
    highlightLabel: "Engagement",
    gradient: "from-blue-600/20 via-transparent to-transparent",
  },
];

export function Projects({ resume }: { resume: Resume }) {
  return (
    <Section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
        Featured <span className="gradient-text">Work</span>
      </h2>
      <p className="text-white/40 text-sm mb-12">
        A selection of projects that showcase my technical range and impact.
      </p>

      {/* Featured cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-14">
        {featuredProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-bg-card border border-white/6 rounded-xs p-6 flex flex-col gap-4 hover:border-blue-500/35 hover:bg-bg-card-hover transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* Gradient bg */}
            <div className={`absolute inset-0 bg-linear-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

            {/* Metric badge */}
            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xs bg-emerald-500/10 border border-emerald-500/20">
                <TrendingUp size={12} className="text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">{p.highlight}</span>
                <span className="text-[10px] text-emerald-400/60">{p.highlightLabel}</span>
              </div>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-blue-400 transition-colors duration-200" />
            </div>

            <div className="relative">
              <h3 className="font-bold text-sm mb-2 group-hover:text-blue-200 transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed">{p.description}</p>
            </div>

            <div className="relative flex flex-wrap gap-1.5 mt-auto pt-1">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live projects */}
      <div>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-5">
          Live Projects
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {resume.ourProjects.map((p, i) => (
            <motion.a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="flex items-center justify-between px-4 py-3.5 rounded-xs bg-bg-card border border-white/6 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-xs bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  {p.label}
                </span>
              </div>
              <ExternalLink size={13} className="text-white/25 group-hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
