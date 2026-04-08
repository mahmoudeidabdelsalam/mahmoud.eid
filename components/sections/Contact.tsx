"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, GitFork, ExternalLink, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import type { Resume } from "@/data/resume";

export function Contact({ resume }: { resume: Resume }) {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi ${resume.name.split(" ")[0]}, I'm ${form.name}.\n\n${form.message}`
    );
    window.open(`https://wa.me/${resume.phone.replace(/\D/g, "")}?text=${text}`, "_blank");
  };

  const whatsappDirect = `https://wa.me/${resume.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${resume.name.split(" ")[0]}, I'd like to discuss a project with you.`
  )}`;

  const socials = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: resume.phone,
      href: whatsappDirect,
      color: "hover:border-green-500/40 hover:bg-green-500/5",
      iconColor: "group-hover:text-green-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: resume.email,
      href: `mailto:${resume.email}`,
      color: "hover:border-blue-500/40 hover:bg-blue-500/5",
      iconColor: "group-hover:text-blue-400",
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "LinkedIn")?.url ?? "#",
      color: "hover:border-blue-500/40 hover:bg-blue-500/5",
      iconColor: "group-hover:text-blue-400",
    },
    {
      icon: GitFork,
      label: "GitHub",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "GitHub")?.url ?? "#",
      color: "hover:border-white/25 hover:bg-white/5",
      iconColor: "group-hover:text-white",
    },
  ];

  const inputCls =
    "w-full px-4 py-3 rounded-xs bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-green-500/50 focus:bg-green-500/5 transition-all duration-200";

  return (
    <Section id="contact">
      <SectionLabel>Contact</SectionLabel>

      <div className="max-w-xl mb-14">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="text-white/45 text-sm leading-relaxed">
          Have a project in mind? Send me a WhatsApp message and I&apos;ll get back to you fast.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — socials */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {socials.map(({ icon: Icon, label, value, href, color, iconColor }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-center gap-4 p-4 rounded-xs bg-bg-card border border-white/6 transition-all duration-200 group ${color}`}
            >
              <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/8 flex items-center justify-center shrink-0 transition-colors">
                <Icon size={16} className={`text-white/50 transition-colors ${iconColor}`} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-0.5">{label}</p>
                <p className="text-sm text-white/65 group-hover:text-white transition-colors truncate">{value}</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-white/20 group-hover:text-white/60 transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>

        {/* Right — WhatsApp form */}
        <motion.form
          onSubmit={handleWhatsApp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
          />
          <textarea
            placeholder="Tell me about your project..."
            required
            rows={10}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputCls} resize-none`}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/25">Opens WhatsApp with your message pre-filled.</p>
            <Button variant="primary" size="md">
              <Send size={14} />
              Send via WhatsApp
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
