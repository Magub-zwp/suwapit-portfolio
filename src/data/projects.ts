export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
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
];
