"use client";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import type { Resume } from "@/data/resume";

const featuredProjects = [
  {
    title: "Headless E-Commerce Platform",
    description:
      "High-performance storefront built with Vue.js and WordPress as a headless CMS. Reduced load time from 5s to 1.2s through aggressive code splitting and lazy loading.",
    tech: ["Vue.js", "WordPress", "REST API", "WooCommerce"],
    highlight: "5s → 1.2s load time",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with Stripe/PayPal integration, built with React and TypeScript. Features live data visualization and subscription management.",
    tech: ["React", "TypeScript", "Stripe", "PayPal"],
    highlight: "Real-time analytics",
  },
  {
    title: "Animated Portfolio Platform",
    description:
      "Interactive portfolio website with advanced Vue.js animations and micro-interactions. Increased user engagement by 60% through immersive UI experiences.",
    tech: ["Vue.js", "GSAP", "CSS Animations"],
    highlight: "+60% engagement",
  },
];

export function Projects({ resume }: { resume: Resume }) {
  return (
    <Section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Featured <span className="text-violet-400">Work</span>
      </h2>

      {/* Featured projects */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {featuredProjects.map((p) => (
          <Card key={p.title} hover className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                {p.highlight}
              </span>
              <ArrowUpRight size={16} className="text-white/30" />
            </div>
            <div>
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Live projects */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
          Live Projects
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {resume.ourProjects.map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 group"
            >
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                {p.label}
              </span>
              <ExternalLink size={14} className="text-white/30 group-hover:text-violet-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
