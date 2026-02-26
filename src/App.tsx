import React from 'react'
import './App.css'

// ─── Types ─────────────────────────────────────────────────

interface Position {
  role: string
  period: string
  description?: string
  bullets?: React.ReactNode[]
}

interface Experience {
  company: string
  description?: string
  positions: Position[]
}

interface SkillGroup {
  label: string
  items: string[]
}

interface Profile {
  name: string
  alt: string
  title: string
  email: string
  github: string
  website: string
  location: string
}

// ─── Data ──────────────────────────────────────────────────

const CV_DATA = {
  profile: {
    name: 'Aleksei (Alex Novak) Dmitriev',
    alt: 'Aleksei Dmitriev',
    title: 'Staff Software Engineer',
    email: 'heyalexnovak@gmail.com',
    github: 'github.com/opcode0x',
    website: 'opcode0x.com',
    location: 'Porto, Portugal',
  } satisfies Profile,

  summary:
    "Staff Software Engineer focused on building decentralized infrastructure, open-source developer tools, and scalable web applications. Expert in bridging complex technical requirements with maintainable, high-performance engineering standards.",
  experience: [
    {
      company: 'MIDL',
      description: 'Execution environment that brings EVM-compatible smart contracts to the Bitcoin network, enabling developers to build and run native decentralized applications (dApps) without bridges or third parties.',
      positions: [
        {
          role: 'Staff Software Engineer',
          period: 'May 2024 – Present',
          bullets: [
            <><strong>Architected and launched the official TypeScript SDK <a className="cv-repo-link" href="https://github.com/midl-xyz/midl-js" target="_blank" rel="noreferrer"><GitHubIcon />midl-xyz/midl-js</a>:</strong> Designed the public-facing API and comprehensive documentation for the primary open-source gateway to the MIDL protocol, which includes native Bitcoin Core utilities. Driven to over 3,000 monthly downloads and utilized as the core development tool for global events, including a Hong Kong hackathon where I served as an on-site technical mentor.</>,
            <><strong>Established engineering and quality standards:</strong> Defined mandatory testing rules and CI thresholds for the engineering team. Mentored developers on effective testing practices for cryptography, emphasizing actual logic coverage over mocking to ensure protocol security.</>,
            <><strong>Built robust CI/CD and E2E testing pipelines:</strong> Engineered end-to-end protocol validation testing using Playwright and Testcontainers, significantly accelerating development cycles and increasing trust in production releases.</>,
            <><strong>Led infrastructure migration to ARM architecture:</strong> Overhauled the build system and aligned the core codebase to support native ARM execution. Transitioned the AWS Kubernetes (k8s) infrastructure using a GitOps approach with Helm and Karpenter for automated node scaling, reducing total cloud costs by ~15%.</>,
            <><strong>Collaborated on core node development and audit preparation:</strong> Partnered with the engineering team to align the MIDL node (Golang) codebase with validator requirements ahead of security audits. Also contributed to building reference dApps using Next.js and Vite to support ecosystem developers.</>,
          ],
        },
      ],
    },
    {
      company: 'Prometeus Labs Ventures (PROM)',
      description: "A scalable, Polygon CDK-based network focused on NFTs, DeFi, privacy, and ZK-powered dApps.",
      positions: [
        {
          role: 'Staff Software Engineer',
          period: 'Feb 2023 – May 2024',
          bullets: [
            <><strong>Led ecosystem migration</strong> of the company’s suite of dApps to a new Polygon CDK-based networking,directly reducing transaction costs for the business and users.</>,
            <><strong>Bridge Architecture:</strong> Designed and engineered a secure cross-chain token bridge to safely handle user asset transfers between networks.</>,
            <><strong>Frontend Standardization:</strong> Introduced and enforced Feature-Sliced Design (FSD) across all frontend repositories, reducing technical debt and cutting onboarding time for new hires.</>,
          ],
        },
        {
          role: 'Senior Software Engineer',
          period: 'Jan 2022 – Feb 2023',
          bullets: [
            <><strong>Developed the frontend for multiple EVM-compatible dApps,</strong> including an NFT marketplace, a rental solution, and DeFi tools, using React, Next.js, and TypeScript.</>,
            <><strong>Set up real-time blockchain data indexing</strong> using The Graph (Subgraph) and Squid, adding custom data handlers and caching.</>,
            <><strong>Implemented server-side rendering (SSR)</strong> for the marketplace and landing pages to improve SEO and performance.</>,
            <><strong>Maintained and improved CI pipelines and test coverage</strong> to make deployments more reliable.</>,
          ],
        },
      ],
    },
    {
      company: 'FARFETCH',
      description: "Farfetch is a leading global marketplace for the luxury fashion industry.",
      positions: [
        {
          role: 'Senior Frontend Software Engineer',
          period: 'Jul 2020 – Dec 2022',
          description: "Design System & Accessibility (a11y): Engineered the Farfetch Design System, delivering reusable, 100% accessible React and TypeScript components, theming architecture, and frontend development tooling.",
          bullets: [
            <><strong>Cross-Team Architecture:</strong> Actively collaborated in architectural and design discussions with cross-functional teams to ensure the component library met the distinct needs of various internal engineering groups and drove organization-wide adoption.</>,
            <><strong>Internal Tooling:</strong> Developed and maintained internal developer tools and documentation portals to support the frontend organization using Node.js, Nest.js, and Strapi CMS.</>,
            <><strong>Monorepo & Testing Standards:</strong> Managed the internal tooling codebase as a monorepo using Yarn Workspaces and enforced high test coverage across all components using Jest.</>,
            <><strong>Mentorship:</strong> Mentored junior engineers on frontend best practices, component architecture, and seamless design system integration.</>,
          ],
        },
      ],
    },
    {
      company: 'Research Institute',
      positions: [
        {
          role: 'Senior JavaScript Developer',
          period: 'May 2018 – Nov 2019',
          description: 'Launched an SSR blockchain explorer for the ERGO Platform, led frontend architecture and design system development using React, TypeScript, Node.js, and Web3.js.',
        },
      ],
    },
    {
      company: 'ClauseMatch',
      positions: [
        {
          role: 'JavaScript Developer',
          period: 'Jan 2017 – Apr 2018',
          description: 'Built a real-time collaborative editing framework using WebSockets and led a zero-downtime migration from AngularJS to Angular using Webpack and Gulp.',
        },
      ],
    },
    {
      company: 'izi.TRAVEL',
      positions: [
        {
          role: 'Frontend Developer',
          period: 'Oct 2014 – Dec 2016',
          description: 'Developed the core CMS and high-traffic landing pages, improving search functionality and site performance using Ember.js, Ruby on Rails, Python, and Elasticsearch.',
        },
      ],
    },
  ] satisfies Experience[],

  skills: [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Golang'] },
    { label: 'Frontend', items: ['React', 'Next.js', 'FSD', 'Design Systems', 'A11y', 'Tailwind', 'PandaCSS', 'SSR/SSG'] },
    { label: 'Web3', items: ['EVM / dApps', 'Bitcoin Core', 'Solidity', 'Ethers.js', 'Viem', 'Wagmi'] },
    { label: 'Infra', items: ['AWS', 'Kubernetes', 'Helm', 'Docker', 'Terraform', 'Karpenter', 'GitOps'] },
    { label: 'Tooling', items: ['PNPM', 'Playwright', 'Testcontainers', 'Jest', 'Vitest'] },
  ] satisfies SkillGroup[],

}

// ─── Sub-components ────────────────────────────────────────

interface SectionProps {
  label: string
  delay: number
  children: React.ReactNode
}

function Section({ label, delay, children }: SectionProps) {
  return (
    <section
      className="cv-section"
      style={{ '--delay': `${delay}s` } as React.CSSProperties}
    >
      <h2 className="cv-section__label">{label}</h2>
      {children}
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function PositionItem({ role, period, description, bullets }: Position) {
  return (
    <div className="cv-position">
      <div className="cv-position__header">
        <span className="cv-position__role">{role}</span>
        <span className="cv-position__period">{period}</span>
      </div>
      {description && <p className="cv-position__desc">{description}</p>}
      {bullets && (
        <ul className="cv-exp-item__bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceItem({ company, description, positions }: Experience) {
  const overallPeriod = positions.length > 1
    ? `${positions[positions.length - 1].period.split('–')[0].trim()} – ${positions[0].period.split('–')[1].trim()}`
    : positions[0].period

  return (
    <div className="cv-exp-item">
      <div className="cv-exp-item__header">
        <span className="cv-exp-item__company">{company}</span>
        <span className="cv-exp-item__period">{overallPeriod}</span>
      </div>
      {description && <p className="cv-exp-item__desc">{description}</p>}
      <div className="cv-exp-item__positions">
        {positions.map((pos) => (
          <PositionItem key={pos.role} {...pos} />
        ))}
      </div>
    </div>
  )
}

function SkillsBlock({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="cv-skills">
      {groups.map(({ label, items }) => (
        <div className="cv-skills__group" key={label}>
          <dt>{label}</dt>
          <dd>{items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  )
}

// ─── App ───────────────────────────────────────────────────

function App() {
  const { profile, summary, experience, skills } = CV_DATA
  React.useEffect(() => {
    document.title = `${profile.name} - ${profile.title}`
  }, [profile.name, profile.title])

  return (
    <main className="cv">
      <header className="cv-header">
        <h1 className="cv-header__name">{profile.name}</h1>
        <p className="cv-header__title">{profile.title}</p>
        <nav className="cv-contact" aria-label="Contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="cv-contact__sep" aria-hidden="true">·</span>
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">{profile.github}</a>
          <span className="cv-contact__sep" aria-hidden="true">·</span>
          <a href={`https://${profile.website}`} target="_blank" rel="noreferrer">{profile.website}</a>
          <span className="cv-contact__sep" aria-hidden="true">·</span>
          <span>{profile.location}</span>
        </nav>
      </header>

      <Section label="Summary" delay={0.2}>
        <div className="cv-summary">
          <p>{summary}</p>
        </div>
      </Section>

      <Section label="Experience" delay={0.4}>
        <div className="cv-exp-list">
          {experience.map((job) => (
            <ExperienceItem key={job.company} {...job} />
          ))}
        </div>
      </Section>

      <Section label="Skills" delay={0.6}>
        <SkillsBlock groups={skills} />
      </Section>
    </main>
  )
}

export default App
