export const site = {
  name: 'Harshit Kumar',
  url: 'https://portfolio-2003.vercel.app/',
  roles: ['Associate AI Fullstack Engineer', 'Datoway Technology', 'Full-Stack & AI-Assisted Products'],
  heroIntro: 'I build thoughtful digital experiences and AI-assisted operational interfaces, connecting full-stack engineering with clear design and practical product workflows.',
  resumeHref: '/documents/Harshit_Kumar_Resume.pdf',
  email: 'harshitkumar2k03@gmail.com',
  phone: '+91 6397123561',
  /** Existing Formspree endpoint carried over from index.js (public form ID, not a secret). */
  formEndpoint: 'https://formspree.io/f/mqadgvgd',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/in/harshit-kumarr',
  github: 'https://www.github.com/harshitkumar2003',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Career' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const;

export const about = {
  heading: 'Full-stack development meets considered design',
  paragraphs: [
    'I am an Associate AI Fullstack Engineer at Datoway Technology, working on user interfaces and AI-assisted operational workflows. I enjoy translating complex processes into intuitive, dependable experiences.',
    'My work and learning span React, TypeScript, Python, FastAPI, Node.js, databases, responsive interfaces and visual experimentation. I contribute to teams building logistics and industrial operations products while continuing to grow as an engineer.',
  ],
};

export const skills = [
  { category: 'Core languages', items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'] },
  { category: 'Frontend craft', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Databases', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'SQLite'] },
  { category: 'Development tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Anaconda', 'Docker'] },
  { category: 'Backend craft', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'SQLAlchemy'] },
  { category: 'Design tools', items: ['Figma', 'Canva'] },
] as const;

export const education = [
  { name: 'Master of Computer Application', institution: 'Dr. A.P.J. Abdul Kalam Technical University', duration: 'August 2024 – July 2026', image: 'miet' },
  { name: 'Bachelor of Science in Computer Science', institution: 'Chaudhary Charan Singh University', duration: 'August 2021 – July 2024', image: 'ccsu' },
] as const;

/** Source order preserved from original index.html. Names map to public/images/gallery-NN-*. */
export const gallery = [
  { image: 'gallery-07', alt: 'Gallery photo 1' },
  { image: 'gallery-08', alt: 'Gallery photo 2' },
  { image: 'gallery-03', alt: 'Gallery photo 3' },
  { image: 'gallery-09', alt: 'Gallery photo 4' },
  { image: 'gallery-02', alt: 'Gallery photo 5' },
  { image: 'gallery-04', alt: 'Gallery photo 6' },
  { image: 'gallery-01', alt: 'Gallery photo 7' },
  { image: 'gallery-05', alt: 'Gallery photo 8' },
  { image: 'gallery-06', alt: 'Gallery photo 9' },
  { image: 'gallery-10', alt: 'Gallery photo 10' },
] as const;
