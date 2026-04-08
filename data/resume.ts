export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Resume = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  links: ProjectLink[];
  summary: string;
  experiences: Experience[];
  skills: {
    frontend: string[];
    styling: string[];
    cmsBackend: string[];
    tools: string[];
    performance: string[];
  };
  keyProjects: string[];
  ourProjects: ProjectLink[];
};

export const resume: Resume = {
  name: "Mahmoud Eid",
  role: "Team Lead Front-end",
  location: "Egypt, Ismailia",
  email: "mahmoudelsaiedabelsalam89@gmail.com",
  phone: "+201094107302",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mahmoudeidabdelsalam/" },
    { label: "GitHub", url: "https://github.com/mahmoudeidabdelsalam" }
  ],
  summary:
    "Creative Front-End with 14+ years of experience in building scalable, high-performance web applications. Expert in React.js, Vue.js, and WordPress with proven success in leading teams, optimizing performance, and delivering engaging user experiences. Specialized in SaaS platforms, headless e-commerce, and performance optimization.",
  experiences: [
    {
      title: "Team Lead – Front-End",
      company: "Global Direction",
      location: "Remote KSA",
      period: "2023–2025",
      bullets: [
        "Managed a cross-functional team delivering scalable Vue.js and React.js apps",
        "Improved UI consistency and introduced reusable component libraries",
        "Aligned development with business goals, reducing delivery time by 25%"
      ]
    },
    {
      title: "Front-End Developer (Vue.js)",
      company: "IT Direction",
      location: "Ismailia, Egypt",
      period: "2022–2023",
      bullets: [
        "Built responsive Vue.js apps with strong API integrations",
        "Enhanced accessibility and performance across devices",
        "Optimized load time to under 2s on key projects"
      ]
    },
    {
      title: "WordPress Developer & Digital Marketing Support",
      company: "eCubes Digital",
      location: "Remote Kuwait",
      period: "2020–2021",
      bullets: [
        "Developed custom WordPress websites and plugins",
        "Implemented SEO improvements and supported marketing campaigns",
        "Collaborated with remote GitHub-based teams"
      ]
    },
    {
      title: "Team Lead – Front-End & WordPress Developer",
      company: "Premast",
      location: "Ismailia, Egypt",
      period: "2019–2020",
      bullets: [
        "Led front-end team in building interactive web tools and platforms",
        "Built custom WordPress themes and plugins",
        "Ensured quality and consistency in code across multiple projects"
      ]
    },
    {
      title: "Front-End & WordPress Developer",
      company: "Coded5",
      location: "Ismailia, Egypt",
      period: "2013–2019 & 2021–2022",
      bullets: [
        "Built and maintained client websites using WordPress and front-end technologies",
        "Designed responsive interfaces and improved website performance",
        "Contributed to various client projects in Egypt and the Gulf region"
      ]
    }
  ],
  skills: {
    frontend: ["React.js", "Vue.js", "Next.js", "Nuxt.js", "JavaScript", "TypeScript"],
    styling: ["CSS", "SASS", "Tailwind", "Bootstrap", "Animations"],
    cmsBackend: ["WordPress", "WooCommerce", "REST API"],
    tools: ["Git", "Figma", "Adobe XD", "Mac OS", "VS Code", "Antigravity"],
    performance: ["Lighthouse", "Lazy Loading", "Code Splitting"]
  },
  keyProjects: [
    "Headless E‑Commerce Platform (Vue.js + WordPress): Reduced load time from 5s to 1.2s",
    "Integrated Stripe/PayPal for SaaS dashboard (React + TypeScript) with real-time analytics",
    "Animated portfolio website using Vue.js increasing engagement by 60%"
  ],
  ourProjects: [
    { label: "secondopinion.sa", url: "https://secondopinion.sa" },
    { label: "fivectech.com", url: "https://fivectech.com" },
    { label: "pinospizzeriaa.com", url: "https://pinospizzeriaa.com/" },
    { label: "qirtas-store.com", url: "https://qirtas-store.com" },
    { label: "restohub.net", url: "https://restohub.net"},
    { label: "sermnt.sa", url: "https://sermnt.sa/"},
    { label: "aidaandhabibs.com", url: "https://aidaandhabibs.com/"},
    { label: "locationarch.com", url: "https://locationarch.com"},
    { label: "woodlymart.com", url: "https://woodlymart.com"}
  ]
};
