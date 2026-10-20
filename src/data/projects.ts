import type { Project } from './types';

/**
 * TOMS and Kinetix content comes ONLY from the implementation brief. No code, screenshots,
 * links or contribution details were supplied for them, so those fields are "To verify" or omitted.
 */
export const projects: Project[] = [
  {
    id: 'toms',
    title: 'TOMS — Terminal Operation Management System',
    subtitle: 'Datoway Unified Logistics Intelligence Platform',
    category: 'Logistics & Supply Chain / Terminal Operations / AI-Powered Operational Intelligence',
    summary:
      'An intelligent terminal-operations platform concept designed to turn operational signals into contextual decisions, governed actions, and measurable outcomes across terminal workflows.',
    contribution: 'Contributed to the TOMS prototype UI and terminal operational workflow experience; individual module ownership should be verified before more specific claims.',
    stack: [],
    highlights: [
      'Warehouse exceptions, container and cold-chain monitoring',
      'Event detection and decision support',
      'Action approvals, orchestration and audit visibility',
    ],
    featured: true,
    conceptLabel: 'Concept visualization — not an application screenshot',
    caseStudy: {
      cta: 'Explore TOMS Case Study',
      sections: [
        { heading: 'Product overview', body: [
          'The wider Datoway Unified Logistics Intelligence Platform vision spans WarehouseIQ, ContainerIQ, PortIQ, FleetIQ and GreenIQ. This describes the vision, not five fully implemented modules, and no production integrations are claimed.',
        ] },
        { heading: 'Phase 1 prototype scope', body: [
          'The Phase 1 prototype focus is WarehouseIQ and ContainerIQ. Neighbouring modules are mocked or planned. Details such as the deterministic model stub, synthetic demo data, governed human approvals, shared operational state and PostgreSQL are listed only once verified against the TOMS code.',
        ] },
        { heading: 'Challenge', body: ['To verify — approved problem statement not yet supplied.'] },
        { heading: 'Architecture', body: ['To verify — pending the TOMS code or architecture material.'] },
        { heading: 'My contribution', body: ['Contributed to prototype user experience and operational flow design; exact module ownership is not claimed.'] },
      ],
      caveats: [
        'Visuals in this section are illustrative concept visualizations, not screenshots of a working digital twin.',
        'UI and demo simulations are distinguished from live external integrations.',
        'No public repository or demo link has been verified, so none is shown.',
      ],
    },
  },
  {
    id: 'kinetix-methanewatch',
    title: 'Kinetix — MethaneWatch AI',
    subtitle: 'MethaneWatch AI module work / contribution',
    category: 'Oil & Gas / AI-Assisted Methane Monitoring / Operational Decision Support',
    summary:
      'Contributed to the MethaneWatch AI workflow within the Kinetix Oil & Gas platform, connecting methane monitoring and anomaly investigation with recommended remediation, approval, work-order execution, and outcome verification.',
    contribution:
      'Contributed to the MethaneWatch AI module UI and guided investigation-to-remediation workflow within the wider Kinetix platform.',
    stack: [],
    highlights: [
      'Human-in-the-loop approval step before work-order dispatch',
      'Simulated completion and post-repair outcome check (illustrative demo data)',
    ],
    workflow: [
      { id: 'monitoring', label: 'Monitoring' },
      { id: 'anomaly', label: 'Anomaly' },
      { id: 'evidence', label: 'Evidence' },
      { id: 'localization', label: 'Source Localization' },
      { id: 'whatif', label: 'What-If Valve Isolation' },
      { id: 'recommendation', label: 'Remediation Recommendation' },
      { id: 'approval', label: 'Human Approval' },
      { id: 'workorder', label: 'Work Order / Dispatch' },
      { id: 'completion', label: 'Simulated Completion' },
      { id: 'outcome', label: 'Post-Repair Baseline / Outcome' },
    ],
    featured: true,
    conceptLabel: 'Concept visualization — not a running detection system',
    caseStudy: {
      cta: 'Explore MethaneWatch Case Study',
      sections: [
        { heading: 'Platform context', body: [
          'Kinetix is an Oil & Gas platform. This case study covers the MethaneWatch AI module only, not the whole platform, the production AI model, the detection algorithm, or live industrial hardware integration.',
        ] },
        { heading: 'My work', body: ['Contributed to the MethaneWatch AI module user experience and workflow; ownership of platform-level AI models or hardware systems is not claimed.'] },
        { heading: 'Kinetix platform (not my work)', body: ['Other modules and organization-level capabilities belong to the wider Kinetix team.'] },
        { heading: 'Workflow walkthrough', body: ['The MVP workflow runs in the order shown. Steps may be combined in compact views but the chronology is kept. Completion and outcome steps are simulated.'] },
      ],
      caveats: [
        'Simulated steps and demo data are labelled as such. No work-order ID is shown because none has been validated against code.',
        'No public repository, demo URL, customer name or performance figure is shown.',
      ],
    },
  },
  {
    id: 'moto-s',
    title: 'Moto-s',
    subtitle: 'Responsive frontend web project',
    category: 'Front-end / E-commerce showcase',
    summary:
      'Moto-S is a responsive frontend web project designed to showcase premium motorbike collections. The platform seamlessly redirects users to official company websites.',
    contribution: 'Independently developed the responsive front-end (per résumé).',
    stack: ['HTML5/CSS3', 'JavaScript/JQuery', 'UI Components', 'VS Code', 'Git/GitHub', 'AI'],
    highlights: [],
    featured: false,
    image: { name: 'moto-s', alt: 'Moto-S website screenshot: "Find your perfect ride" motorbike hero' },
    repoUrl: 'https://github.com/harshitkumar2003/moto-s',
    demoUrl: 'https://moto-s.vercel.app/',
  },
  {
    id: 'between',
    title: 'BETWEEN',
    subtitle: 'E-commerce web project',
    category: 'Front-end / E-commerce',
    summary:
      'BETWEEN is an e-commerce web project dedicated to exclusive t-shirt designs and modern apparel. It provides a sleek, responsive interface.',
    contribution: 'Designed and implemented the responsive front-end (per résumé).',
    stack: ['HTML5/CSS3', 'JavaScript', 'UI Components', 'VS Code', 'Git/GitHub'],
    highlights: [],
    featured: false,
    image: { name: 'between', alt: 'BETWEEN website screenshot: "Welcome to BETWEEN" t-shirt storefront' },
    repoUrl: 'https://github.com/harshitkumar2003/between',
    demoUrl: 'https://betweenhk.vercel.app/',
  },
];
