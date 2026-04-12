import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type ServiceKey =
  | 'all'
  | 'seo'
  | 'uiux'
  | 'social'
  | 'sem'
  | 'whatsapp-marketing'
  | 'whatsapp-integration';

type ProjectTone = 'pink' | 'orange' | 'lime' | 'purple';

type ProjectCard = {
  name: string;
  category: string;
  description: string;
  service: Exclude<ServiceKey, 'all'>;
  label: string;
  tone: ProjectTone;
  wide?: boolean;
  art: 'phones' | 'dashboard' | 'seo' | 'chat';
};

const serviceTabs: { key: ServiceKey; title: string }[] = [
  { key: 'all', title: 'All Projects' },
  { key: 'seo', title: 'SEO' },
  { key: 'uiux', title: 'UI/UX Design' },
  { key: 'social', title: 'Social Media' },
  { key: 'sem', title: 'SEM' },
  { key: 'whatsapp-marketing', title: 'WhatsApp Marketing' },
  { key: 'whatsapp-integration', title: 'WhatsApp Integration' },
];

const allProjects: ProjectCard[] = [
  {
    name: 'Xanfi AI',
    category: 'Social media',
    description: 'Full social media marketing strategy and execution',
    service: 'social',
    label: 'Social Media',
    tone: 'pink',
    art: 'phones',
  },
  {
    name: 'Nah Petcare',
    category: 'E-Commerce',
    description: 'Pet care e-commerce website from brand concept to launch',
    service: 'uiux',
    label: 'UI/UX Design',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
  },
  {
    name: 'Zeenath',
    category: 'SEO',
    description: 'Climbed from the 5th page to the 1st page on Google',
    service: 'seo',
    label: 'SEO',
    tone: 'orange',
    art: 'seo',
  },
  {
    name: 'Blossom Care',
    category: 'Meta Ads',
    description: 'High-converting Meta ads campaign built for growth',
    service: 'sem',
    label: 'SEM',
    tone: 'pink',
    art: 'phones',
  },
  {
    name: 'Petiva',
    category: 'Brand & E-commerce',
    description: 'Full brand and e-commerce redesign from the ground up',
    service: 'uiux',
    label: 'UI/UX Design',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
  },
  {
    name: 'Al Shifa',
    category: 'Local SEO',
    description: 'Local rank boost that now dominates nearby search results',
    service: 'seo',
    label: 'SEO',
    tone: 'orange',
    art: 'seo',
  },
  {
    name: 'Botiva',
    category: 'Social Design',
    description: 'Social media design system with a sharper brand presence',
    service: 'social',
    label: 'Social Media',
    tone: 'purple',
    art: 'phones',
  },
  {
    name: 'Nestluxe',
    category: 'Premium Web',
    description: 'Premium website experience for a luxury real estate brand',
    service: 'uiux',
    label: 'UI/UX Design',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
  },
  {
    name: 'Marhaba',
    category: 'Organic Growth',
    description: 'SEO-led organic growth with major traffic gains in 3 months',
    service: 'seo',
    label: 'SEO',
    tone: 'orange',
    art: 'seo',
  },
  {
    name: 'Direct Chat',
    category: 'WhatsApp',
    description: 'WhatsApp funnel automation from click to close',
    service: 'whatsapp-marketing',
    label: 'WhatsApp',
    tone: 'pink',
    art: 'chat',
  },
  {
    name: 'Reply Bot',
    category: 'API Integration',
    description: 'CRM API integration with smart WhatsApp bot automation',
    service: 'whatsapp-integration',
    label: 'WhatsApp',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We audit your brand, market position, and growth gaps.',
    accent: 'border-[#f5e642] text-[#f5e642]',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Custom roadmaps built around your KPIs, market, and budget.',
    accent: 'border-[#ff6b2b] text-[#ff6b2b]',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'We ship fast, test harder, and refine what performs best.',
    accent: 'border-[#ff3fa4] text-[#ff3fa4]',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'We amplify winners, cut drag, and compound your growth.',
    accent: 'border-[#c8ff00] text-[#c8ff00]',
  },
];

const toneMap: Record<ProjectTone, {
  thumb: string;
  body: string;
  tag: string;
}> = {
  pink: {
    thumb: 'bg-[linear-gradient(135deg,#e91e8c,#ff6b9d)]',
    body: 'bg-[#3d2a8a]',
    tag: 'border border-[#ff3fa459] bg-[#ff3fa433] text-[#ff9bd2]',
  },
  orange: {
    thumb: 'bg-[linear-gradient(135deg,#ff6b2b,#ff9f00)]',
    body: 'bg-[#3d2a8a]',
    tag: 'border border-[#ff6b2b59] bg-[#ff6b2b33] text-[#ffb185]',
  },
  lime: {
    thumb: 'bg-[linear-gradient(135deg,#b5cc00,#e2ff00)]',
    body: 'bg-[#3d2a8a]',
    tag: 'border border-[#c8ff0050] bg-[#c8ff0026] text-[#edff87]',
  },
  purple: {
    thumb: 'bg-[linear-gradient(135deg,#7b2fff,#c44dff)]',
    body: 'bg-[#3d2a8a]',
    tag: 'border border-[#a050ff59] bg-[#a050ff33] text-[#d8b5ff]',
  },
};

const PhoneArt = ({ mirrored = false }: { mirrored?: boolean }) => (
  <div className={`relative h-40 w-36 ${mirrored ? 'scale-x-[-1]' : ''}`}>
    <div className="absolute left-3 top-8 flex h-[88px] w-[52px] flex-col items-center gap-[5px] rounded-[10px] bg-white pt-[10px] shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
      <div className="h-[3px] w-4 rounded-full bg-black/15" />
      <div className="mt-2 h-6 w-6 rounded-[5px] bg-black/10" />
    </div>
    <div className="absolute right-3 top-5 h-[60px] w-20 rotate-[5deg] rounded-[8px] bg-[linear-gradient(135deg,#ff3d9a,#ff8cc8)] shadow-[0_12px_24px_rgba(0,0,0,0.18)]" />
    <div className="absolute bottom-5 left-8 h-7 w-7 rounded-full bg-[#5c6bc0]" />
    <div className="absolute bottom-7 left-16 h-5 w-5 rounded-full bg-[#9c27b0]" />
  </div>
);

const DashboardArt = () => (
  <div className="relative h-40 w-52">
    <div className="absolute left-3 top-5 h-20 w-28 rotate-[-5deg] rounded-[14px] bg-[linear-gradient(135deg,#ff6b2b,#ffb347)] shadow-[0_16px_32px_rgba(0,0,0,0.18)]" />
    <div className="absolute right-8 bottom-6 h-9 w-9 rounded-full bg-[#5c6bc0]" />
    <div className="absolute right-16 bottom-4 h-6 w-6 rounded-full bg-[#9c27b0]" />
  </div>
);

const SeoArt = () => (
  <div className="relative h-40 w-36">
    <div className="absolute left-4 top-5 h-16 w-[90px] rotate-[3deg] rounded-[10px] bg-[linear-gradient(135deg,#ff6b2b,#ffb347)] shadow-[0_12px_24px_rgba(0,0,0,0.18)]" />
    <div className="absolute bottom-8 left-6 h-5 w-14 rounded-[5px] bg-[#ffe57b80]" />
    <div className="absolute bottom-11 left-6 h-[2px] w-[72px] bg-black/20" />
  </div>
);

const ChatArt = () => (
  <div className="relative h-40 w-36">
    <div className="absolute left-4 top-7 flex h-[88px] w-[52px] flex-col items-center gap-[5px] rounded-[10px] bg-white pt-[10px] shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
      <div className="h-[3px] w-4 rounded-full bg-black/15" />
      <div className="mt-2 h-6 w-6 rounded-[5px] bg-black/10" />
    </div>
    <div className="absolute right-5 top-10 rounded-[16px] bg-white/20 px-4 py-3 backdrop-blur-sm">
      <div className="h-2 w-10 rounded-full bg-white/70" />
      <div className="mt-2 h-2 w-7 rounded-full bg-white/50" />
    </div>
    <div className="absolute bottom-5 right-4 h-7 w-7 rounded-full bg-[#5c6bc0]" />
    <div className="absolute bottom-7 right-11 h-5 w-5 rounded-full bg-[#9c27b0]" />
  </div>
);

const renderProjectArt = (project: ProjectCard) => {
  switch (project.art) {
    case 'dashboard':
      return <DashboardArt />;
    case 'seo':
      return <SeoArt />;
    case 'chat':
      return <ChatArt />;
    case 'phones':
    default:
      return <PhoneArt mirrored={project.tone === 'purple'} />;
  }
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<ServiceKey>('all');

  const filteredProjects = useMemo(
    () => (activeTab === 'all' ? allProjects : allProjects.filter((project) => project.service === activeTab)),
    [activeTab],
  );

  return (
    <div className="relative overflow-hidden bg-[#1a0f42] text-white">
      <section className="relative px-6 pb-10 pt-28 md:px-10 md:pb-12 md:pt-36 lg:px-16 lg:pt-44">
        <div className="pointer-events-none absolute right-[-140px] top-[-110px] h-[360px] w-[360px] rounded-full bg-[#3d2a8a]/45 blur-[2px] md:h-[420px] md:w-[420px]" />
        <div className="pointer-events-none absolute bottom-[-90px] left-8 h-[220px] w-[220px] rounded-full bg-[#3d0068]/40 blur-[2px] md:left-16 md:h-[260px] md:w-[260px]" />

        <div className="relative mx-auto max-w-[1530px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#f5e642]" />
            <span className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-bold uppercase tracking-[0.25em] text-[#f5e642]">
              Our work speaks for itself
            </span>
          </div>

          <div className="max-w-[760px]">
            <h1 className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(58px,11vw,130px)] leading-[0.9] uppercase tracking-[0.04em]">
              <span className="block text-white">Our</span>
              <span className="block text-[#f5e642]">Projects</span>
              <span className="block text-transparent [-webkit-text-stroke:2px_#ff6b2b]">Portfolio</span>
            </h1>
            <p className="mt-5 max-w-[520px] [font-family:'Bricolage_Grotesque',Helvetica] text-[15px] leading-7 text-white/55">
              From SEO domination to high-converting social campaigns, here&apos;s the work we&apos;ve built,
              scaled, and shipped for brands that want serious growth.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">11+</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Projects live
              </div>
            </div>
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">6</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Service types
              </div>
            </div>
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">100%</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Client focus
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[60] px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1530px] flex-wrap gap-3">
          {serviceTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full border px-5 py-2.5 [font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-extrabold uppercase tracking-[0.18em] transition-all md:text-xs ${
                activeTab === tab.key
                  ? 'border-[#ff6b2b] bg-[#ff6b2b] text-white'
                  : 'border-white/20 bg-transparent text-white/55 hover:border-white/50 hover:text-white'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </section>

      <section className="relative z-[60] px-6 pb-8 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1530px] items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-bold uppercase tracking-[0.28em] text-white/30">
            {filteredProjects.length} projects
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto grid max-w-[1530px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => {
            const tone = toneMap[project.tone];

            return (
              <article
                key={project.name}
                className={`group overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1.5 ${
                  project.wide ? 'xl:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative flex h-[220px] items-center justify-center overflow-hidden ${tone.thumb} ${
                    project.wide ? 'xl:h-[220px]' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.15),transparent_30%)]" />
                  {renderProjectArt(project)}
                </div>

                <div className={`${tone.body} px-5 py-5`}>
                  <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/65">
                    {project.category}
                  </div>
                  <h2 className="[font-family:'Black_Han_Sans',Helvetica] mt-2 text-[30px] leading-none tracking-[0.04em] text-white uppercase">
                    {project.name}
                  </h2>
                  <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-2 max-w-[36ch] text-sm leading-6 text-white/55">
                    {project.description}
                  </p>
                  <span
                    className={`mt-4 inline-block rounded-full px-3 py-1.5 [font-family:'Bricolage_Grotesque',Helvetica] text-[10px] font-extrabold uppercase tracking-[0.16em] ${tone.tag}`}
                  >
                    {project.label}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#3d2a8a] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1530px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#f5e642]">
                How we work
              </div>
              <h2 className="[font-family:'Black_Han_Sans',Helvetica] mt-3 text-[clamp(48px,7vw,80px)] leading-[0.95] uppercase tracking-[0.04em] text-white">
                Strategy to <span className="text-[#ff6b2b]">scale</span>
              </h2>
            </div>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] max-w-[360px] text-sm leading-7 text-white/50">
              Every project follows a proven four-step process designed for measurable results and sharp execution.
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-[2px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_8px,transparent_8px,transparent_16px)] xl:block" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[#3d2a8a] [font-family:'Black_Han_Sans',Helvetica] text-2xl ${step.accent}`}
                >
                  {step.number}
                </div>
                <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] mt-4 text-[15px] font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-2 text-sm leading-6 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="relative mx-auto flex max-w-[1530px] flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-[#ff6b2b] px-7 py-10 md:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
          <div className="absolute right-[-60px] top-[-60px] h-[280px] w-[280px] rounded-full bg-white/10" />
          <div className="absolute bottom-[-90px] left-[30%] h-[190px] w-[190px] rounded-full bg-black/10" />

          <div className="relative z-10">
            <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/70">
              Ready to be our next case study?
            </div>
            <h2 className="[font-family:'Black_Han_Sans',Helvetica] mt-3 text-[clamp(46px,7vw,86px)] leading-[0.92] uppercase tracking-[0.04em] text-white">
              Let&apos;s build
              <br />
              something big.
            </h2>
          </div>

          <div className="relative z-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 [font-family:'Bricolage_Grotesque',Helvetica] text-sm font-black text-[#ff6b2b] transition hover:opacity-90"
            >
              Start a project →
            </Link>
            <Link
              to="/services/seo"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-8 py-3.5 [font-family:'Bricolage_Grotesque',Helvetica] text-sm font-bold text-white transition hover:bg-white/10"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
