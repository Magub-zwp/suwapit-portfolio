import type { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    links: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    status: "Open to work",
  },
  hero: {
    nameLine1: "Suwapit",
    nameLine2: "Ponkul",
    role: "Junior Developer",
    bio: "A 4th-year Computer Science student with real-world IT experience, who genuinely enjoys turning code into working web applications.",
    ctaProjects: "View Projects",
    ctaContact: "Contact",
    scroll: "Scroll",
  },
  about: {
    label: "About",
    headingLine1: "A developer who builds",
    headingLine2: "for the real world.",
    paragraphs: [
      "I started in IT supporting the day-to-day operations of a subdistrict hospital - managing patient data systems, MySQL databases, and FreeBSD servers. That ground-level experience taught me to build things that actually work under pressure.",
      "While working, I picked up web development on the side - first PHP, then JavaScript, then the modern React and Next.js ecosystem. My thesis project, GaragePlus, is a full PWA with Firebase and real-time sync. My Queue Management System runs live in a hospital environment.",
      "Still studying and still learning - but the projects are real, the code is shipped, and I am ready to grow as a junior developer on a team that builds things that matter.",
    ],
    facts: [
      { label: "Current Role", value: "IT Officer, BaanTonpao Subdistrict Hospital" },
      {
        label: "Education",
        value: "2022-Present\nB.Sc. Computer Science\nRajabhat University\nGPA 3.22 | Weekend Program",
      },
      { label: "Focus", value: "Junior Web Developer" },
      { label: "Based in", value: "Chiang Mai, Thailand" },
    ],
  },
  skills: {
    label: "Skills",
    heading: "What I work with.",
    categories: { frontend: "Frontend", backend: "Backend", tools: "Tools" },
  },
  experience: {
    label: "Experience",
    heading: "Where I have worked.",
    items: [
      {
        id: "hospital-it",
        role: "IT Officer",
        company: "BaanTonpao Subdistrict Hospital",
        period: "2021 - Present",
        description:
          "Maintain and support hospital IT infrastructure including JHCIS patient data system, servers, and network.",
        highlights: [
          "Administer JHCIS and MySQL database for patient records",
          "Manage FreeBSD-based server environment",
          "Support clinical staff with day-to-day IT operations",
          "Built internal Queue Management System with Next.js and Prisma",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    heading: "Things I have built.",
    live: "Live",
    github: "GitHub",
    items: [
      {
        id: "queue-system",
        title: "Queue Management System",
        description:
          "Patient queue management system for a subdistrict hospital. Supports OPD registration, multi-room calling (doctor/nurse), escalation, and a real-time TV display board.",
        tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/Queue-System",
        featured: true,
      },
      {
        id: "garage-plus",
        title: "GaragePlus",
        description:
          "Garage management PWA built as a thesis project. Handles job orders, customer records, and technician workflow with real-time sync via Firebase.",
        tags: ["Next.js", "JavaScript", "Firebase", "Firestore", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/garage-plus",
        featured: true,
      },
      {
        id: "firstproject",
        title: "Task Management System",
        description:
          "First full project built in second year — a task/work management system with PHP backend. Currently being deployed.",
        tags: ["PHP", "MySQL", "HTML", "CSS"],
        url: "https://tasklist.infinityfree.me/index.php",
        github: "https://github.com/Magub-zwp/firstproject",
        featured: false,
      },
      {
        id: "jorddeepeekhum",
        title: "Jorddeepeekhum Parking App",
        description:
          "Mobile parking app built with Flutter as a class mini project. Handles parking slot booking and status tracking.",
        tags: ["Flutter", "Dart"],
        github: "https://github.com/Magub-zwp/Jorddeepeekhum_app",
        featured: false,
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Say hello.",
    blurb: "Open to junior developer roles and freelance projects. Feel free to reach out.",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendingText: "Sending...",
    sendText: "Send",
    errorText: "Something went wrong. Try again.",
    sentText: "Message sent.",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind CSS",
  },
};
