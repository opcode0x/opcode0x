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
    name: 'Aleksei Dmitriev',
    alt: '',
    title: 'Senior Frontend Software Engineer',
    email: 'heyalexnovak@gmail.com',
    github: 'github.com/opcode0x',
    website: 'opcode0x.com',
    location: 'Porto, Portugal',
  } satisfies Profile,

  summary: "Senior Frontend Engineer focused on building fast, user-friendly web applications. Experienced in delivering high-quality interfaces, improving performance, and collaborating closely with product teams to ship reliable features.",
  experience: [
    {
      company: 'MIDL',
      description: 'Execution environment that brings EVM-compatible smart contracts to the Bitcoin network, enabling developers to build and run native decentralized applications (dApps) without bridges or third parties.',
      positions: [
        {
          role: 'Senior Frontend Software Engineer',
          period: 'May 2024 – Present',
          bullets: [
            <>
              <strong>Built and launched a TypeScript SDK:</strong> Designed a developer-friendly API used to integrate web applications, focusing on usability and developer experience (3,000+ monthly downloads).
            </>,
            <>
              <strong>Developed web applications and developer tools:</strong> Built and maintained applications using Next.js, improving performance and user experience for developers.
            </>,
            <>
              <strong>Improved frontend quality and reliability:</strong> Introduced testing practices and end-to-end testing with Playwright, increasing confidence in releases.
            </>,
            <>
              Optimized performance and delivery: Improved development speed and release stability through better tooling and CI processes.
            </>],
        },
      ],
    },
    {
      company: 'Prometeus Labs Ventures (PROM)',
      description: "A scalable, Polygon CDK-based network focused on NFTs, DeFi, privacy, and ZK-powered dApps.",
      positions: [
        {
          role: 'Staff Frontend Software Engineer',
          period: 'Feb 2023 – May 2024',
          bullets: [
            <><strong>Led migration of multiple web applications</strong> to a new platform, improving performance and reducing transaction costs for users.</>,
            <><strong>Built and maintained key product features across several dApps,</strong> focusing on usability, responsiveness, and reliability.</>,
            <><strong>Standardized frontend architecture</strong> across projects using Feature-Sliced Design (FSD), reducing technical debt and improving developer onboarding speed</>,
            <>Designed and implemented a cross-chain asset transfer experience, ensuring secure and smooth user interactions</>,
          ],
        },
        {
          role: 'Senior Frontend Software Engineer',
          period: 'Jan 2022 – Feb 2023',
          bullets: [
            <>
              Developed user-facing applications including an NFT marketplace, rental platform, and DeFi tools using React, Next.js, and TypeScript.
            </>,
            <>
              Improved application performance and SEO by implementing server-side rendering (SSR) and optimizing data loading strategies.
            </>,
            <>
              Built real-time data-driven interfaces by integrating indexed data services, ensuring fast and responsive user experiences.
            </>,
            <>
              Improved reliability of releases by enhancing testing practices and CI pipelines.
            </>]
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
            <>Monorepo & Testing Standards: Managed the internal tooling codebase as a monorepo using Yarn Workspaces and enforced high test coverage across all components using Jest.</>,
            <>Mentorship: Mentored junior engineers on frontend best practices, component architecture, and seamless design system integration.</>,
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
    { label: 'Frontend', items: ['React', 'Next.js', 'FSD', 'Design Systems', 'Accessibility (A11y)', 'Tailwind', 'PandaCSS', 'SSR/SSG'] },
    { label: 'Tooling', items: ['PNPM', 'Playwright', 'Testcontainers', 'Jest', 'Vitest'] },
    { label: 'Infra', items: ['AWS', 'Kubernetes', 'Helm', 'Docker', 'Terraform', 'Karpenter', 'GitOps'] },
    { label: 'Web3', items: ['EVM / dApps', 'Bitcoin Core', 'Solidity', 'Ethers.js', 'Viem', 'Wagmi'] },
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
