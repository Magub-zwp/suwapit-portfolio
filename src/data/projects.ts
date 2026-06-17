export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [];
