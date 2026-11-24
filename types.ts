export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  linkLabel?: string;
  aiDemoLink?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  featured?: boolean;
  features?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  logo?: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'Mobile' | 'Design' | 'Other';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  image?: string;
  link?: string;
}

export interface GraphicDesign {
  id: string;
  title: string;
  image: string;
  category: string;
}
