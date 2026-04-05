"use client";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Resume } from "@/data/resume";

interface SkillGroup {
  label: string;
  skills: string[];
  color: string;
}

export function Skills({ resume }: { resume: Resume }) {
  const groups: SkillGroup[] = [
    { label: "Frontend", skills: resume.skills.frontend, color: "violet" },
    { label: "Styling & UI", skills: resume.skills.styling, color: "indigo" },
    { label: "CMS & Backend", skills: resume.skills.cmsBackend, color: "purple" },
    { label: "Tools", skills: resume.skills.tools, color: "fuchsia" },
    { label: "Performance", skills: resume.skills.performance, color: "pink" },
  ];

  return (
    <Section id="skills">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Technical <span className="text-violet-400">Expertise</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(({ label, skills }) => (
          <Card key={label} className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Card>
        ))}

        {/* Design skills card */}
        <Card className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40">
            Design
          </p>
          <div className="flex flex-wrap gap-2">
            {["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Design Systems", "Prototyping"].map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
