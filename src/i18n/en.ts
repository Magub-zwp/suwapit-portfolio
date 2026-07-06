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
    nameLine1: "Zuwapit",
    nameLine2: "Ponkul",
    role: "Junior Developer",
    bio: "Started in hospital IT support, found my passion — now a 4th-year Computer Science student who enjoys building websites and applications, and wants to grow into a developer worth having on your team.",
    ctaProjects: "View Projects",
    ctaContact: "Contact",
    scroll: "Scroll",
  },
  about: {
    label: "About",
    headingLine1: "A tree thrives",
    headingLine2: "when planted in the right pot.",
    paragraphs: [
      "I started out in IT Support at a subdistrict health promoting hospital — managing patient information systems, MySQL databases, and Linux servers. That experience taught me how to troubleshoot under pressure and solve real problems on the spot.",
      "While working, I taught myself web development — starting with PHP, then JavaScript, and eventually React and Next.js. My graduation project, GaragePlus, is a full-featured PWA built with Firebase and real-time sync. I also built a Queue Management System that is currently running in production at the hospital.",
      "I'm currently in my 4th year of Computer Science (expected to graduate in 2027) and ready to grow as a junior developer who genuinely contributes to the team.",
    ],
    facts: [
      { label: "Current Role", value: "IT Officer, BaanTonpao Subdistrict Hospital" },
      {
        label: "Education",
        value: "2022-Present\nB.Sc. Computer Science\nChiang Mai Rajabhat University\nGPA 3.22 | Weekend Program\n (expected to graduate in 2027)",
      },
      { label: "Focus", value: "Junior Developer" },
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
          "Manage Local Linux server environment",
          "Support staff with day-to-day IT operations",
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
          "Garage management PWA built as a thesis project. Handles customer queue bookings and technician workflow, with LINE Notify alerts and real-time sync via Firebase.",
        tags: ["Next.js", "JavaScript", "Firebase", "Firestore", "Tailwind CSS"],
        github: "https://github.com/Magub-zwp/garage-plus",
        featured: true,
      },
      {
        id: "firstproject",
        title: "Task Management System",
        description:
          "First full project built in second year — a task/work management system with PHP backend.",
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
    heading: "Let's connect.",
    blurb: "I'm currently looking for new opportunities. Whether you have a position available, a project in mind, or just want to chat, I'd love to hear from you.",
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
