"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import type { Resume } from "@/data/resume";

export function Contact({ resume }: { resume: Resume }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with form data
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
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "LinkedIn")?.url ?? "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mahmoudeidabdelsalam",
      href: resume.links.find((l) => l.label === "GitHub")?.url ?? "#",
    },
  ];

  return (
    <Section id="contact">
      <SectionLabel>Contact</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let&apos;s <span className="text-violet-400">Work Together</span>
      </h2>
      <p className="text-white/50 mb-12 max-w-lg">
        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Social links */}
        <div className="flex flex-col gap-4">
          {socials.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <Icon size={18} className="text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">{label}</p>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.07] text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.07] text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
          />
          <textarea
            placeholder="Your message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.07] text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
          />
          <Button variant="primary" className="self-start">
            <Send size={15} />
            {sent ? "Message Sent!" : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
