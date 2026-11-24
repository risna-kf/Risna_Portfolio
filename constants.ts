import { Project, Skill, Experience, Education, Certification, GraphicDesign } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'serendip-waves',
    title: 'Serendip Waves',
    category: 'Full-Stack Web Application',
    description: 'A modern, high-performance web platform featuring responsive client interfaces, modular RESTful backend services, and scalable database integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API'],
    image: '/images/serendip-waves.jpg',
    github: 'https://lnkd.in/gbPF4eq5',
    link: 'https://lnkd.in/p/gMcm79QP'
  },
  {
    id: 'mkb-smart',
    title: 'MKB-Smart',
    category: 'AI-Powered E-Commerce & Mobile Platform',
    description: 'A smart supermarket platform connecting AI-driven meal planning with grocery shopping. Features voice shopping, conversational recipe generation, fuzzy ingredient-to-inventory matching, Stripe checkout, and role-based management dashboards.',
    tech: ['React Native', 'Expo', 'React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Google Gemini', 'Stripe'],
    image: '/images/mkb-smart.jpg',
    link: 'https://lnkd.in/gpZVC3Dp',
    linkLabel: 'Full Project Demo',
    aiDemoLink: 'https://lnkd.in/g6PBiPRb'
  },
  {
    id: 'garagecore',
    title: 'GarageCore',
    category: 'Full-Stack Workshop & Billing SaaS',
    description: 'An end-to-end garage management SaaS system digitizing workshop operations. Features multi-vehicle tracking, service workflow tracking (Pending → In Progress → Completed), smart invoicing, inventory monitoring, and revenue analytics dashboards.',
    tech: ['React', 'Django', 'Python', 'MySQL', 'Tailwind CSS', 'Django REST Framework', 'Chart.js'],
    image: '/images/garagecore.jpg',
    github: 'https://lnkd.in/gCUFJ_D4',
    link: 'https://lnkd.in/p/gKc_z-Qa'
  },
  {
    id: 'playchrono',
    title: 'PlayChrono',
    category: 'Mobile App Development',
    description: 'A smart sports ground scheduling mobile application simplifying facility bookings for students, captains, and administrators. Features real-time calendar availability, slot booking, conflict prevention, and role-based permissions.',
    tech: ['React Native', 'Expo', 'NativeWind', 'Expo Router', 'Firebase', 'Firestore'],
    image: '/images/playchrono.jpg',
    link: 'https://lnkd.in/p/gxxeWanh'
  },
  {
    id: 'developer-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Interactive Web Platform & UI/UX',
    description: 'An interactive, responsive personal developer portfolio engineered with Next.js, React, and Tailwind CSS. Features modern glassmorphism, fluid motion animations, project showcases, and a refined theme system.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Lucide Icons'],
    image: '/images/portfolio-showcase.jpg',
    github: 'https://github.com/risna-kf',
    link: '#',
    linkLabel: 'Current Site'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'Code2', logo: 'https://cdn.simpleicons.org/react/61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: 'Cpu', logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', category: 'Frontend' },
  { name: 'TypeScript', icon: 'Code2', logo: 'https://cdn.simpleicons.org/typescript/3178C6', category: 'Frontend' },
  { name: 'JavaScript', icon: 'Code2', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E', category: 'Frontend' },
  { name: 'HTML', icon: 'Code2', logo: 'https://cdn.simpleicons.org/html5/E34F26', category: 'Frontend' },
  { name: 'CSS', icon: 'Code2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'Palette', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', icon: 'Code2', logo: 'https://cdn.simpleicons.org/bootstrap/7952B3', category: 'Frontend' },
  { name: 'React Native', icon: 'Smartphone', logo: 'https://cdn.simpleicons.org/react/61DAFB', category: 'Frontend' },
  { name: 'Node.js', icon: 'Server', logo: 'https://cdn.simpleicons.org/nodedotjs/339933', category: 'Backend' },
  { name: 'Express', icon: 'Zap', logo: 'https://cdn.simpleicons.org/express/FFFFFF', category: 'Backend' },
  { name: 'Django', icon: 'Server', logo: 'https://cdn.simpleicons.org/django/092E20', category: 'Backend' },
  { name: 'PHP', icon: 'Server', logo: 'https://cdn.simpleicons.org/php/777BB4', category: 'Backend' },
  { name: 'Firebase', icon: 'Server', logo: 'https://cdn.simpleicons.org/firebase/FFCA28', category: 'Backend' },
  { name: 'Python', icon: 'Terminal', logo: 'https://cdn.simpleicons.org/python/3776AB', category: 'Other' },
  { name: 'MongoDB', icon: 'Database', logo: 'https://cdn.simpleicons.org/mongodb/47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: 'Database', logo: 'https://cdn.simpleicons.org/postgresql/4169E1', category: 'Database' },
  { name: 'MySQL', icon: 'Database', logo: '/images/mysql.svg', category: 'Database' },
  { name: 'Firestore', icon: 'Database', logo: 'https://cdn.simpleicons.org/firebase/FFCA28', category: 'Database' },
  { name: 'PyTorch', icon: 'Brain', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C', category: 'AI/ML' },
  { name: 'TensorFlow', icon: 'Bot', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00', category: 'AI/ML' },
  { name: 'React Native', icon: 'Smartphone', logo: 'https://cdn.simpleicons.org/react/61DAFB', category: 'Mobile' },
  { name: 'Flutter', icon: 'Smartphone', logo: 'https://cdn.simpleicons.org/flutter/02569B', category: 'Mobile' },
  { name: 'Photoshop', icon: 'Image', logo: '/images/photoshop.webp', category: 'Design' },
  { name: 'Canva', icon: 'PenTool', logo: '/images/canva.webp', category: 'Design' },
  { name: 'Java', icon: 'Coffee', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Other' },
  { name: 'C', icon: 'Terminal', logo: 'https://cdn.simpleicons.org/c/00599C', category: 'Other' },
  { name: 'Android Studio', icon: 'Smartphone', logo: 'https://cdn.simpleicons.org/androidstudio/3DDC84', category: 'Other' },
  { name: 'Git', icon: 'GitBranch', logo: 'https://cdn.simpleicons.org/git/F05032', category: 'Other' },
  { name: 'GitHub', icon: 'Github', logo: 'https://cdn.simpleicons.org/github/FFFFFF', category: 'Other' },
  { name: 'VS Code', icon: 'Code2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Other' },
  { name: 'Postman', icon: 'Send', logo: 'https://cdn.simpleicons.org/postman/FF6C37', category: 'Other' },
  { name: 'Figma', icon: 'Layers', logo: 'https://cdn.simpleicons.org/figma/F24E1E', category: 'Other' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Freelance Graphic Designer',
    company: 'Fiverr',
    period: 'May 2023 - Present',
    description: [
      'Worked with clients to design posters, social media creatives, and branding materials.',
      'Focused on delivering visually engaging and marketing-oriented designs.',
      'Maintained a 4.8-star rating with over 20+ completed orders.'
    ]
  },
  {
    role: 'Active Member',
    company: 'Cyber Security Hub (CSH) – Uva Wellassa University',
    period: 'Apr 2024 - Present',
    description: [
      'Actively participating in information security awareness sessions, workshops, and knowledge-sharing initiatives.',
      'Collaborating with community peers on cyber defense fundamentals and secure computing practices.',
      'Engaging in university-level tech events to advocate for digital safety and modern security standards.'
    ]
  },
  {
    role: 'Editor in Chief',
    company: "UGSSA-Nintavur (Undergraduates' Social Service Association)",
    period: '2024 - Present',
    description: [
      'Directing editorial strategy and overseeing publication materials for community outreach initiatives.',
      'Managing content creation, creative design reviews, and official association communications.',
      'Leading student editorial teams to produce impactful publications and social service narratives.'
    ]
  },
  {
    role: 'Editor',
    company: 'FOSS Community UWU',
    period: 'Jul 2024 - Present',
    description: [
      'Edited technical and academic content for open-source community publications.',
      'Collaborated with student contributors on open-source awareness campaigns and workshop materials.',
      'Created and reviewed promotional graphics and posters for FOSS tech initiatives.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science (Honours) in Computer Science and Technology',
    institution: 'Uva Wellassa University of Sri Lanka',
    period: '2023 - Present',
    details: [
      'Department of Computer Science and Informatics',
      'Faculty of Applied Sciences',
      'Focusing on Full-Stack Software Engineering, Data Structures, and AI Applications.'
    ]
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'CCS Campus, Kalmunai',
    period: '2023',
    details: [
      'Comprehensive coursework in computer fundamentals, software development, and networking.',
      'Practical hands-on training in database management and programming methodologies.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'First Runner-Up – Cybersecurity Competition 2025',
    issuer: 'Cybersecurity Hub, UWU (Supported by Google.org)',
    date: '2025',
    icon: 'Trophy',
    image: '/images/cybersecurity-award-2025.jpg'
  },
  {
    title: 'AI Fundamentals',
    issuer: 'LEARN (Supported by Google.org & AVPN)',
    date: '2025',
    icon: 'Brain',
    image: '/images/cert-ai-fundamentals.jpg'
  },
  {
    title: 'Cloud Computing – Microsoft Azure',
    issuer: 'SysCare IT Solutions',
    date: 'Feb 2025',
    icon: 'Cloud',
    image: '/images/cert-cloud-computing.jpg'
  },
  {
    title: 'Cybersecurity & Ethical Hacking Essentials',
    issuer: 'SysCare IT Solutions',
    date: 'Feb 2025',
    icon: 'ShieldCheck',
    image: '/images/cert-cybersecurity-webinar.jpg'
  }
];

export const GRAPHIC_DESIGNS: GraphicDesign[] = [
  { id: '1', title: 'Cyberpunk Poster', category: 'Poster', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Minimalist Logo', category: 'Branding', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Social Media Kit', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Product UI Mockup', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Abstract Art', category: 'Art', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Brand Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800' }
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];
