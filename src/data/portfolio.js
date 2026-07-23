import hedgenest from "../assets/image/hedgenest.png";
import agrobridge from "../assets/image/agrobridge.png";
import preltech from "../assets/image/preltech.png";
import preltechLogo from "../assets/image/preltech-logo.png";
import portfolioPreview from "../assets/image/portfolio-preview.png";


export const portfolio = {
  name: "Promise Elijah",

  role: "Frontend Software Engineer",

  headline: "Building Software That Solves Real Problems.",

  description:
    "I design and build modern, scalable web applications focused on exceptional user experience, performance, and real business impact.",

  location: "Lagos, Nigeria",

  available: true,

  email: "empero.lehnzy42@gmail.com",

  github: "https://github.com/Pr-ElTech",

  linkedin: "https://linkedin.com/in/elijah-promise-aa1727310",

  resume: "/resume.pdf",

  stats: [
    {
      number: "4+",
      title: "Production Projects",
    },
    {
      number: "13+",
      title: "Technologies",
    },
    {
      number: "10+",
      title: "Core Technologies",
    },
    {
      number: "∞",
      title: "Always Learning",
    },
  ],

  projects: [
    {
      id: 1,
      title: "HedgeNest",
      category: "FinTech Platform",
      description:
        "A modern fintech platform focused on intuitive investment experiences, responsive dashboards and scalable frontend architecture.",
      image: hedgenest,
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind",
        "Node.js",
        "MongoDB",
      ],
      live: "https://hedge-nest.vercel.app/",
      github: "https://github.com/Pr-ElTech",
    },

    {
      id: 2,
      title: "AgroBridge",
      category: "Agricultural Platform",
      description:
        "Connecting farmers, buyers and agricultural businesses through an accessible digital platform.",
      image: agrobridge,
      technologies: [
        "React",
        "JavaScript",
        "Tailwind",
      ],
      live: "https://agro-bridge-web-app.vercel.app/",
      github: "https://github.com/Pr-ElTech",
    },

    {
      id: 3,
      title: "PR-EL TECH",
      category: "Business Website",
      description:
        "Corporate website showcasing digital services, products and technology solutions with a modern responsive interface.",
      image: preltech,
      technologies: [
        "React",
        "Tailwind",
        "Framer Motion",
      ],
      live: "https://pr-eltech.vercel.app/",
      github: "https://github.com/Pr-ElTech",
    },
  ],

  trustedProducts: [
    {
      name: "PR-EL TECH",
      image: preltechLogo,
      link: "https://pr-eltech.vercel.app/",
    },
    {
      name: "HedgeNest",
      image: hedgenest,
      link: "https://hedge-nest.vercel.app/",
    },
    {
      name: "AgroBridge",
      image: agrobridge,
      link: "https://agro-bridge-web-app.vercel.app/",
    },
    {
      name: "Portfolio",
      image: portfolioPreview,
      link: "https://promise-elijah.vercel.app/",
    },
  ],
};