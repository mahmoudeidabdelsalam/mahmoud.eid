"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, GitFork, ExternalLink, Send, ArrowUpRight } from "lucide-react";
import type { Resume } from "@/data/resume";

export function Contact({ resume }: { resume: Resume }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: resume.email,
      href: `mailto:${resume.email}`,
      color: "hover:border-violet-500/40 hover:bg-violet-500/5",
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "LinkedIn")?.url ?? "#",
      color: "hover:border-blue-500/40 hover:bg-blue-500/5",
    },
    {
      icon: GitFork,
      label: "GitHub",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "GitHub")?.url ?? "#",
      color: "hover:border-white/25 hover:bg-white/5",
    },
  ];

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200";

  return (
    <Section id="contact">
      <SectionLabel>Contact</SectionLabel>

      {/* Header */}
      <div className="max-w-xl mb-14">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="text-white/45 text-sm leading-relaxed">
          Have a project in mind or want to discuss opportunities? Drop me a message and I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — socials + CTA */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {socials.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-2xl bg-bg-card border border-white/[0.06] transition-all duration-200 group ${color}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-violet-500/30 transition-colors">
                <Icon size={16} className="text-white/50 group-hover:text-violet-400 transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-0.5">{label}</p>
                <p className="text-sm text-white/65 group-hover:text-white transition-colors truncate">{value}</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-white/20 group-hover:text-violet-400 transition-colors shrink-0" />
            </motion.a>
          ))}

          {/* Availability card */}
          <div className="mt-2 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-bold text-emerald-400">Available Now</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Open to freelance projects, full-time roles, and consulting opportunities.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputCls}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputCls}
            />
          </div>
          <textarea
            placeholder="Tell me about your project..."
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputCls} resize-none`}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/25">I typically reply within 24 hours.</p>
            <Button variant="primary" size="md">
              <Send size={14} />
              {sent ? "Sent ✓" : "Send Message"}
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
