export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "hospital-it",
    role: "IT Officer",
    company: "Subdistrict Hospital",
    period: "Present",
    description:
      "Maintain and support hospital IT infrastructure including JHCIS (patient data system), servers, and network.",
    highlights: [
      "Administer JHCIS and MySQL database for patient records",
      "Manage FreeBSD-based server environment",
      "Support clinical staff with day-to-day IT operations",
    ],
  },
];
