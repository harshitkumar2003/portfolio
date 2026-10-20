export type ExternalLink = { label: string; href: string };

export interface WorkflowStep { id: string; label: string; }

export interface CaseStudySection { heading: string; body: string[]; }

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  /** Verified role text only. Unverified entries say "To verify". */
  contribution: string;
  stack: string[];
  highlights: string[];
  workflow?: WorkflowStep[];
  /** Key into image-manifest.json. Absent => concept visualization (never a fake screenshot). */
  image?: { name: string; alt: string };
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  /** true => in-site case-study dialog is the CTA */
  caseStudy?: { cta: string; sections: CaseStudySection[]; caveats: string[] };
  conceptLabel?: string;
}
