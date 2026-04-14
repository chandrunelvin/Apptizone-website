import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import TextReveal from '../ui/TextReveal';
import intergulfProjectImage from '../../assets/project/intergulf-project-image.png';
import nahpetProjectImage from '../../assets/project/nahpet-project-image.png';
import aquascbeProjectImage from '../../assets/project/aquascbe-project-image.png';
import eliitaProjectImage from '../../assets/project/eliita-project-image.png';
import droptaxiproProjectImage from '../../assets/project/droptaxipro-image.png';
import mavuraProjectImage from '../../assets/project/mavura-project-image.png';
import propgeniusProjectImage from '../../assets/project/propgenius-project-image.png';
import skillwiseProjectImage from '../../assets/project/skillwise-project-image.png';
import upcomingProjectsBangaloreProjectImage from '../../assets/project/upcomingprojectsbangalore-project-image.png';

type ServiceKey =
  | 'all'
  | 'website'
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
  href?: string;
  projectImageSrc?: string;
};

const serviceTabs: { key: ServiceKey; title: string }[] = [
  { key: 'all', title: 'All Projects' },
  { key: 'website', title: 'Website' },
  { key: 'seo', title: 'SEO' },
  { key: 'uiux', title: 'UI/UX Design' },
  { key: 'social', title: 'Social Media' },
  { key: 'sem', title: 'SEM' },
  { key: 'whatsapp-marketing', title: 'WhatsApp Marketing' },
  { key: 'whatsapp-integration', title: 'WhatsApp Integration' },
];

const allProjects: ProjectCard[] = [
  {
    name: 'Nah Petcare',
    category: 'E-Commerce',
    description: 'Pet care e-commerce website from brand concept to launch',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
    href: 'https://nahpet.ae/',
    projectImageSrc: nahpetProjectImage,
  },
  {
    name: 'Intergulf',
    category: 'Engineering Website',
    description: 'Corporate website for a water and wastewater systems company with a strong industrial brand presence.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
    href: 'https://intergulf-me.com/',
    projectImageSrc: intergulfProjectImage,
  },
  {
    name: 'Mavura Foods',
    category: 'Food Brand Website',
    description: 'Product-focused website for a dosa and idli batter brand with strong e-commerce-ready visual storytelling.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
    href: 'https://mavurafoods.com/',
    projectImageSrc: mavuraProjectImage,
  },
  {
    name: 'Skillwise',
    category: 'Training Website',
    description: 'Professional training and workforce development website with a strong corporate layout and conversion-focused sections.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    wide: true,
    href: 'https://skillwise.in/',
    projectImageSrc: skillwiseProjectImage,
  },
  {
    name: 'Aquas CBE',
    category: 'Water Purifier Website',
    description: 'Service-driven website for a water purifier company with a clear conversion path and strong local trust messaging.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    href: 'https://aquascbe.com/',
    projectImageSrc: aquascbeProjectImage,
  },
  {
    name: 'Eliita',
    category: 'Learning Platform Website',
    description: 'Education-focused website with a modern course-led layout, bold hero messaging, and a clean conversion journey.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    href: 'https://eliita.com/',
    projectImageSrc: eliitaProjectImage,
  },
  {
    name: 'Propgenius',
    category: 'Real Estate Website',
    description: 'Real estate advisory website with a strong trust-led hero, property-focused messaging, and clear appointment conversion flow.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    href: 'https://propgenius.in/',
    projectImageSrc: propgeniusProjectImage,
  },
  {
    name: 'Urbanrise',
    category: 'Luxury Villa Website',
    description: 'Luxury real estate landing page built for upcoming villa projects with strong call-to-action focus and premium property presentation.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    href: 'https://upcomingprojectsbangalore.in/',
    projectImageSrc: upcomingProjectsBangaloreProjectImage,
  },
  {
    name: 'DropTaxiPro',
    category: 'Taxi Service Website',
    description: 'Taxi booking website with a conversion-focused ride form, strong service messaging, and a clear local transport brand presence.',
    service: 'website',
    label: 'Website',
    tone: 'lime',
    art: 'dashboard',
    href: 'https://droptaxipro.com/',
    projectImageSrc: droptaxiproProjectImage,
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
          <ScrollReveal delay={30} distance={22} blur={6} scale={0.98}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#f5e642]" />
              <span className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-bold uppercase tracking-[0.25em] text-[#f5e642]">
                Our work speaks for itself
              </span>
            </div>
          </ScrollReveal>

          <div className="max-w-[760px]">
            <style>{`
              .project-hero-line-1 span { color: #ffffff; }
              .project-hero-line-2 span { color: #f5e642; }
              .project-hero-line-3 span { color: transparent; -webkit-text-stroke: 2px #ff6b2b; }
            `}</style>
            <div className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(58px,11vw,130px)] leading-[0.9] uppercase tracking-[0.04em]">
              <TextReveal as="div" text="Our" className="project-hero-line-1 block" delay={70} />
              <TextReveal as="div" text="Projects" className="project-hero-line-2 block" delay={170} />
              <TextReveal as="div" text="Portfolio" className="project-hero-line-3 block" delay={270} />
            </div>
            <TextReveal
              as="p"
              text="From SEO domination to high-converting social campaigns, here's the work we've built, scaled, and shipped for brands that want serious growth."
              className="mt-5 max-w-[520px] [font-family:'Bricolage_Grotesque',Helvetica] text-[15px] leading-7 text-white/55"
              delay={200}
              wordStagger={20}
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <ScrollReveal delay={220} distance={24} blur={6} className="contents">
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">11+</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Projects live
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={280} distance={24} blur={6} className="contents">
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">6</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Service types
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={340} distance={24} blur={6} className="contents">
            <div>
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-5xl leading-none text-[#f5e642]">100%</div>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Client focus
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative z-[60] px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1530px] flex-wrap gap-3">
          {serviceTabs.map((tab, index) => (
            <ScrollReveal key={tab.key} delay={50 + index * 35} distance={18} blur={5} scale={0.98}>
              <button
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
            </ScrollReveal>
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
        {filteredProjects.length > 0 ? (
          <div className="mx-auto grid max-w-[1530px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredProjects.map((project, index) => {
              const tone = toneMap[project.tone];
              const CardTag = project.href ? 'a' : 'div';

              return (
                <ScrollReveal
                  key={project.name}
                  delay={60 + index * 45}
                  distance={40}
                  blur={10}
                  scale={0.94}
                  rotate={index % 2 === 0 ? -0.8 : 0.8}
                  className="group overflow-hidden rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <CardTag
                    {...(project.href
                      ? { href: project.href, target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className={`block h-full ${project.href ? 'cursor-pointer' : ''}`}
                  >
                    <div
                      className={`relative flex h-[220px] items-center justify-center overflow-hidden ${tone.thumb}`}
                    >
                      {project.projectImageSrc ? (
                        <>
                          <img
                            src={project.projectImageSrc}
                            alt={project.name}
                            className="absolute inset-0 h-full w-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,17,42,0.06)_0%,rgba(22,17,42,0.22)_100%)]" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.15),transparent_30%)]" />
                          {renderProjectArt(project)}
                        </>
                      )}
                    </div>

                    <div className={`${tone.body} px-5 py-5`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/65">
                          {project.category}
                        </div>
                        {project.href && (
                          <span className="[font-family:'Bricolage_Grotesque',Helvetica] text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                            Visit ↗
                          </span>
                        )}
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
                  </CardTag>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <ScrollReveal
            delay={80}
            distance={36}
            blur={10}
            scale={0.96}
            className="mx-auto max-w-[1530px]"
          >
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-dashed border-white/20 bg-[#3d2a8a]/70 px-6 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
              <div className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(38px,7vw,72px)] uppercase leading-[0.92] tracking-[0.04em] text-[#f5e642]">
                We&apos;re Portfolio Building
              </div>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-4 max-w-[560px] text-base leading-7 text-white/65">
                Fresh work for this service tab is on the way. More case studies and live project examples will be added here soon.
              </p>
            </div>
          </ScrollReveal>
        )}
      </section>

      <section className="bg-[#3d2a8a] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1530px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <ScrollReveal delay={30} distance={20} blur={5}>
                <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#f5e642]">
                  How we work
                </div>
              </ScrollReveal>
              <TextReveal
                as="h2"
                text="Strategy to scale"
                className="project-process-title mt-3 [font-family:'Black_Han_Sans',Helvetica] text-[clamp(48px,7vw,80px)] leading-[0.95] uppercase tracking-[0.04em]"
                delay={90}
                wordStagger={32}
              />
              <style>{`
                .project-process-title span { color: #ffffff; }
                .project-process-title span:last-child { color: #ff6b2b; }
              `}</style>
            </div>
            <TextReveal
              as="p"
              text="Every project follows a proven four-step process designed for measurable results and sharp execution."
              className="[font-family:'Bricolage_Grotesque',Helvetica] max-w-[360px] text-sm leading-7 text-white/50"
              delay={180}
              wordStagger={18}
            />
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-[2px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_8px,transparent_8px,transparent_16px)] xl:block" />
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={120 + index * 70} distance={34} blur={8} scale={0.95} className="relative text-center">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <ScrollReveal delay={60} distance={36} blur={10} scale={0.96}>
        <div className="relative mx-auto flex max-w-[1530px] flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-[#ff6b2b] px-7 py-10 md:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
          <div className="absolute right-[-60px] top-[-60px] h-[280px] w-[280px] rounded-full bg-white/10" />
          <div className="absolute bottom-[-90px] left-[30%] h-[190px] w-[190px] rounded-full bg-black/10" />

          <div className="relative z-10">
            <ScrollReveal delay={80} distance={18} blur={5}>
              <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-[11px] font-extrabold uppercase tracking-[0.3em] text-white/70">
                Ready to be our next case study?
              </div>
            </ScrollReveal>
            <TextReveal
              as="h2"
              text="Let's build something big."
              className="[font-family:'Black_Han_Sans',Helvetica] mt-3 text-[clamp(46px,7vw,86px)] leading-[0.92] uppercase tracking-[0.04em] text-white"
              delay={140}
              wordStagger={34}
            />
          </div>

          <ScrollReveal delay={220} distance={22} blur={6} className="relative z-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
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
          </ScrollReveal>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectsPage;
