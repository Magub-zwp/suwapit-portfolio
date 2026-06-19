export type Lang = "th" | "en";

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
};

export type Dictionary = {
  nav: {
    links: {
      about: string;
      skills: string;
      experience: string;
      projects: string;
      contact: string;
    };
    status: string;
  };
  hero: {
    nameLine1: string;
    nameLine2: string;
    role: string;
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: {
    label: string;
    heading: string;
    categories: { frontend: string; backend: string; tools: string };
  };
  experience: {
    label: string;
    heading: string;
    items: ExperienceItem[];
  };
  projects: {
    label: string;
    heading: string;
    live: string;
    github: string;
    items: ProjectItem[];
  };
  contact: {
    label: string;
    heading: string;
    blurb: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendingText: string;
    sendText: string;
    errorText: string;
    sentText: string;
  };
  footer: {
    builtWith: string;
  };
};
