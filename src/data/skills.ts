export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
};

export const skills: Skill[] = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Flutter", category: "frontend" },
  { name: "PHP", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "FreeBSD", category: "tools" },
  { name: "JHCIS", category: "tools" },
];
