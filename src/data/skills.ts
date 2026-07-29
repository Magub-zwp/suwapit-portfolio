export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools";
};

export const skills: Skill[] = [
  { name: "HTML",         category: "frontend" },
  { name: "CSS",          category: "frontend" },
  { name: "Next.js",      category: "frontend" },
  { name: "React",        category: "frontend" },
  { name: "TypeScript",   category: "frontend" },
  { name: "JavaScript",   category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Flutter",      category: "frontend" },
  { name: "C",            category: "backend"  },
  { name: "Python",       category: "backend"  },
  { name: "PHP",          category: "backend"  },
  { name: "Node.js",      category: "backend"  },
  { name: "MySQL",        category: "backend"  },
  { name: "Prisma",       category: "backend"  },
  { name: "Firebase",     category: "backend"  },
  { name: "Git",          category: "tools"    },
  { name: "FreeBSD",      category: "tools"    },
  { name: "Linux",        category: "tools"    },
  { name: "VS Code",      category: "tools"    },
  { name: "Figma",        category: "tools"    },
  { name: "Docker",       category: "tools"    },
  { name: "Claude AI",    category: "tools"    },
];
