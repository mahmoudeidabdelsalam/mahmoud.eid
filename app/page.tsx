import { resume } from "@/data/resume";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: `${resume.name} — Senior Front-End Developer`,
  description: resume.summary,
};

export default function Page() {
  return (
    <>
      <Navbar name={resume.name} />
      <main>
        <Hero resume={resume} />
        <About resume={resume} />
        <Skills resume={resume} />
        <Experience resume={resume} />
        <Projects resume={resume} />
        <Tools />
        <Contact resume={resume} />
      </main>
      <Footer resume={resume} />
    </>
  );
}
