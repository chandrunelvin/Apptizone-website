import { useEffect, useState } from 'react';
import aquascbeProjectImage from '../../assets/project/aquascbe-project-image.png';
import droptaxiproProjectImage from '../../assets/project/droptaxipro-image.png';
import eliitaProjectImage from '../../assets/project/eliita-project-image.png';
import intergulfProjectImage from '../../assets/project/intergulf-project-image.png';
import mavuraProjectImage from '../../assets/project/mavura-project-image.png';
import propgeniusProjectImage from '../../assets/project/propgenius-project-image.png';
import skillwiseProjectImage from '../../assets/project/skillwise-project-image.png';
import upcomingProjectsBangaloreProjectImage from '../../assets/project/upcomingprojectsbangalore-project-image.png';
import CountUpText from '../ui/CountUpText';
import FloatingElement from '../ui/FloatingElement';
import ScrollReveal from '../ui/ScrollReveal';
import TextReveal from '../ui/TextReveal';
import useReducedMotionPreference from '../ui/useReducedMotionPreference';

type ProjectTone = 'left' | 'center' | 'right';

type SlideProject = {
  name: string;
  category: string;
  imageSrc?: string;
  href?: string;
};

const statsData = [
  {
    bg: 'bg-[#f0542e]',
    number: 50,
    suffix: '+',
    numberColor: 'text-[#ecd65d]',
    numberShadow: '[text-shadow:3px_4px_0px_#00000040]',
    label: 'COMPLETED\nPROJECTS',
    labelColor: 'text-[#ecd65d]',
    labelShadow: '[text-shadow:3px_3px_1px_#00000040]',
    borderColor: 'border-[#ecd65d]',
  },
  {
    bg: 'bg-[#ecd65d]',
    number: 20,
    suffix: '+',
    numberColor: 'text-[#6353c2]',
    numberShadow: '[text-shadow:4px_4px_1px_#cfb520]',
    label: 'SATISFIED\nCLIENTS',
    labelColor: 'text-[#6353c2]',
    labelShadow: '[text-shadow:3px_3px_1px_#cfb51f]',
    borderColor: 'border-[#6353c2]',
  },
  {
    bg: 'bg-[#6353c2]',
    number: 10,
    suffix: '+',
    numberColor: 'text-[#dbdd66]',
    numberShadow: '[text-shadow:4px_4px_1px_#201f51]',
    label: 'YEARS\nEXPERIENCE',
    labelColor: 'text-[#dbdd66]',
    labelShadow: '[text-shadow:3px_3px_1px_#201f51]',
    borderColor: 'border-[#ecd65d]',
  },
];

const projects = [
  { name: 'INTERGULF', category: 'ENGINEERING WEBSITE', imageSrc: intergulfProjectImage, href: 'https://intergulf-me.com/' },
  { name: 'MAVURA FOODS', category: 'FOOD BRAND WEBSITE', imageSrc: mavuraProjectImage, href: 'https://mavurafoods.com/' },
  { name: 'SKILLWISE', category: 'TRAINING WEBSITE', imageSrc: skillwiseProjectImage, href: 'https://skillwise.in/' },
  { name: 'AQUAS CBE', category: 'WATER PURIFIER WEBSITE', imageSrc: aquascbeProjectImage, href: 'https://aquascbe.com/' },
  { name: 'ELIITA', category: 'LEARNING PLATFORM WEBSITE', imageSrc: eliitaProjectImage, href: 'https://eliita.com/' },
  { name: 'PROPGENIUS', category: 'REAL ESTATE WEBSITE', imageSrc: propgeniusProjectImage, href: 'https://propgenius.in/' },
  { name: 'URBANRISE', category: 'LUXURY VILLA WEBSITE', imageSrc: upcomingProjectsBangaloreProjectImage, href: 'https://upcomingprojectsbangalore.in/' },
  { name: 'DROPTAXIPRO', category: 'TAXI SERVICE WEBSITE', imageSrc: droptaxiproProjectImage, href: 'https://droptaxipro.com/' },
];

const totalSlides = projects.length;

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const StatsWorksSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const prefersReducedMotion = useReducedMotionPreference();

  const prev = () => setProjectIndex((value) => (value <= 0 ? projects.length - 1 : value - 1));
  const next = () => setProjectIndex((value) => (value >= projects.length - 1 ? 0 : value + 1));
  const activeProject = projects[projectIndex] ?? projects[0];
  const desktopProjects = [
    { ...projects[projectIndex % projects.length], tone: 'left' as const },
    { ...projects[(projectIndex + 1) % projects.length], tone: 'center' as const },
    { ...projects[(projectIndex + 2) % projects.length], tone: 'right' as const },
  ];

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setProjectIndex((value) => (value >= projects.length - 1 ? 0 : value + 1));
    }, 4200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const renderProjectCard = (project: SlideProject & { tone: ProjectTone }, cardKey?: string) => {
    const isCenter = project.tone === 'center';
    const shellClass =
      project.tone === 'left'
        ? 'bg-[#d6609d]'
        : project.tone === 'center'
          ? 'bg-[#dde169]'
          : 'bg-[#eb673b]';

    const titleClass =
      project.tone === 'center'
        ? 'text-[#dde169] [text-shadow:4px_4px_0px_#2a245d]'
        : project.tone === 'left'
          ? 'text-[#f0649f] [text-shadow:3px_3px_0px_#2a245d]'
          : 'text-[#f06c3a] [text-shadow:3px_3px_0px_#2a245d]';

    const categoryClass =
      project.tone === 'center'
        ? 'text-[#dde169] [text-shadow:2px_2px_0px_#2a245d]'
        : project.tone === 'left'
          ? 'text-[#f0649f] [text-shadow:2px_2px_0px_#2a245d]'
          : 'text-[#f06c3a] [text-shadow:2px_2px_0px_#2a245d]';

    return (
      <a
        key={cardKey ?? project.name}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={`works-card-enter flex flex-col items-center transition-all duration-500 hover:scale-[1.015] ${
          isCenter ? 'md:-mt-1' : 'md:pt-10'
        } ${project.href ? 'cursor-pointer' : ''}`}
      >
        <div
          className={`${shellClass} relative overflow-hidden rounded-[26px] border-[3px] border-[#352d74] shadow-[0_8px_0px_#352d74] ${
            isCenter ? 'h-[300px] w-[250px] md:h-[420px] md:w-[350px]' : 'h-[220px] w-[190px] md:h-[292px] md:w-[220px]'
          }`}
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_22%),radial-gradient(circle_at_80%_25%,#ffffff_0,transparent_18%),radial-gradient(circle_at_35%_70%,#4f4298_0,transparent_28%)]" />

          {project.imageSrc ? (
            <div className="absolute inset-0 p-3 md:p-4">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="h-full w-full rounded-[18px] border-[3px] border-white/70 object-cover object-top shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          ) : null}
        </div>

        <div className={`mt-4 text-center ${isCenter ? 'md:mt-5' : ''}`}>
          <div
            className={`${titleClass} [font-family:'Black_Han_Sans',Helvetica] leading-[0.95] ${
              isCenter ? 'text-[clamp(24px,4.6vw,58px)]' : 'text-[clamp(16px,2.9vw,34px)]'
            }`}
          >
            {project.name}
          </div>
          <div
            className={`${categoryClass} [font-family:'Black_Han_Sans',Helvetica] mt-1 leading-none ${
              isCenter ? 'text-[clamp(12px,1.8vw,24px)]' : 'text-[clamp(10px,1.1vw,16px)]'
            }`}
          >
            {project.category}
          </div>
          {project.href ? (
            <div className="[font-family:'Bricolage_Grotesque',Helvetica] mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
              Visit Project
            </div>
          ) : null}
        </div>
      </a>
    );
  };

  return (
    <>
      <section className="w-full bg-white px-6 py-12 md:px-[67px] md:py-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col justify-center gap-5 sm:flex-row md:gap-7">
            {statsData.map((stat, index) => (
              <ScrollReveal
                key={index}
                className={`relative h-[280px] max-w-full flex-1 overflow-hidden rounded-[20px] ${stat.bg} sm:max-w-[340px] md:h-[332px]`}
                delay={index * 80}
                distance={30}
                blur={10}
                scale={0.95}
              >
                <div className={`absolute bottom-[10px] left-[10px] right-[10px] top-[10px] rounded-[18px] border-[3px] border-dashed ${stat.borderColor}`} />
                <div className={`absolute left-[52px] top-[28px] ${stat.numberShadow} [font-family:'Black_Han_Sans',Helvetica] text-[100px] font-normal leading-none tracking-[0] md:text-[120px] ${stat.numberColor}`}>
                  <CountUpText value={stat.number} suffix={stat.suffix} />
                </div>
                <div className={`absolute left-[52px] top-[175px] ${stat.labelShadow} [font-family:'Black_Han_Sans',Helvetica] text-[26px] font-normal leading-tight tracking-[0] md:top-[195px] md:text-[30px] ${stat.labelColor}`}>
                  {stat.label.split('\n').map((line, lineIndex, array) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < array.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8dfee] px-6 py-12 md:px-[67px] md:py-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <style>{`
            .works-card-enter {
              animation: works-card-enter 0.42s cubic-bezier(0.22, 1, 0.36, 1);
            }

            @keyframes works-card-enter {
              0% {
                opacity: 0;
                transform: translateY(18px) scale(0.97);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
          <TextReveal
            as="h2"
            text="LET'S SEE OUR WORKS"
            className="[font-family:'Black_Han_Sans',Helvetica] mb-8 text-[clamp(46px,8.6vw,126px)] font-normal leading-[0.88] tracking-[0] text-[#ea6035] md:mb-10"
            delay={40}
          />

          <ScrollReveal className="relative mt-4" delay={100} distance={34} blur={10} scale={0.97}>
            <div className="pointer-events-none absolute -inset-3 rounded-[44px] border-[4px] border-dashed border-[#5a4da7]" />

            <div className="relative w-full rounded-[36px] border-[3px] border-[#6658bf] bg-[#5a4da7] px-6 py-8 md:px-8 md:py-8 shimmer-shell">
              <div className="mb-5 flex justify-end md:mb-4">
                <span className="[font-family:'Black_Han_Sans',Helvetica] font-normal leading-none">
                  <span className="text-[clamp(30px,4.5vw,66px)] text-[#dfe469] [text-shadow:3px_3px_0px_#2a245d]">
                    {String(projectIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[clamp(28px,4vw,58px)] text-white [text-shadow:3px_3px_0px_#2a245d]">
                    /{String(totalSlides).padStart(2, '0')}
                  </span>
                </span>
              </div>

              <FloatingElement className="flex flex-col items-center justify-center gap-4 md:hidden" amplitude={7} duration={4.8}>
                {activeProject && renderProjectCard({ ...activeProject, tone: 'center' }, `mobile-${projectIndex}-${activeProject.name}`)}
              </FloatingElement>

              <div className="hidden flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-start md:justify-evenly md:gap-0">
                {desktopProjects.map((project, index) => (
                  <FloatingElement
                    key={`float-${projectIndex}-${index}-${project.name}`}
                    amplitude={index === 1 ? 10 : 6}
                    duration={4.4 + index * 0.6}
                    delay={index * 0.2}
                  >
                    {renderProjectCard(project, `desktop-${projectIndex}-${index}-${project.name}`)}
                  </FloatingElement>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-4 md:mt-2">
                <button
                  onClick={prev}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5a4da7] shadow-[0_4px_0px_rgba(42,36,93,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0px_rgba(42,36,93,0.18)]"
                  aria-label="Previous project"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  onClick={next}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5a4da7] shadow-[0_4px_0px_rgba(42,36,93,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0px_rgba(42,36,93,0.18)]"
                  aria-label="Next project"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default StatsWorksSection;
