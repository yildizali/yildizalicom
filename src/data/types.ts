export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface AboutMe {
  summary: string;
  biography: string;
}

export interface Role {
  title: string;
  description: string;
}

export interface Education {
  startYear: number;
  endYear: number;
  degree: string;
  field: string;
  institution: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
  techStack: string[];
}
