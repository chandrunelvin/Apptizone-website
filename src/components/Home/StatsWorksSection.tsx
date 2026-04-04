import { useState } from 'react';

const statsData = [
  {
    bg: 'bg-[#f0542e]',
    number: '50+',
    numberColor: 'text-[#ecd65d]',
    numberShadow: '[text-shadow:3px_4px_0px_#00000040]',
    label: 'COMPLETED\nPROJECTS',
    labelColor: 'text-[#ecd65d]',
    labelShadow: '[text-shadow:3px_3px_1px_#00000040]',
    borderColor: 'border-[#ecd65d]',
  },
  {
    bg: 'bg-[#ecd65d]',
    number: '20+',
    numberColor: 'text-[#6353c2]',
    numberShadow: '[text-shadow:4px_4px_1px_#cfb520]',
    label: 'SATISFIED\nCLIENTS',
    labelColor: 'text-[#6353c2]',
    labelShadow: '[text-shadow:3px_3px_1px_#cfb51f]',
    borderColor: 'border-[#6353c2]',
  },
  {
    bg: 'bg-[#6353c2]',
    number: '10+',
    numberColor: 'text-[#dbdd66]',
    numberShadow: '[text-shadow:4px_4px_1px_#201f51]',
    label: 'YEARS\nEXPERIENCE',
    labelColor: 'text-[#dbdd66]',
    labelShadow: '[text-shadow:3px_3px_1px_#201f51]',
    borderColor: 'border-[#ecd65d]',
  },
];

const projectSlides = [
  {
    id: 1,
    counter: 1,
    projects: [
      {
        name: 'XANFI AI',
        category: 'SOCIAL MEDIA MARKETING',
        tone: 'left' as const,
      },
      {
        name: 'NAH PETCARE',
        category: 'PET CARE E-COMMERCE WEBSITE',
        tone: 'center' as const,
      },
      {
        name: 'ZEENATH',
        category: 'SEO - 5TH PAGE TO 1ST',
        tone: 'right' as const,
      },
    ],
  },
  {
    id: 2,
    counter: 2,
    projects: [
      {
        name: 'XANFI AI',
        category: 'SOCIAL MEDIA MARKETING',
        tone: 'left' as const,
      },
      {
        name: 'NAH PETCARE',
        category: 'PET CARE E-COMMERCE WEBSITE',
        tone: 'center' as const,
      },
      {
        name: 'ZEENATH',
        category: 'SEO - 5TH PAGE TO 1ST',
        tone: 'right' as const,
      },
    ],
  },
  {
    id: 3,
    counter: 3,
    projects: [
      {
        name: 'BLOSSOM CARE',
        category: 'META ADS CAMPAIGN',
        tone: 'left' as const,
      },
      {
        name: 'PETIVA',
        category: 'BRAND E-COMMERCE REDESIGN',
        tone: 'center' as const,
      },
      {
        name: 'AL SHIFA',
        category: 'SEO - LOCAL RANK BOOST',
        tone: 'right' as const,
      },
    ],
  },
  {
    id: 4,
    counter: 4,
    projects: [
      {
        name: 'BOTIVA',
        category: 'SOCIAL MEDIA DESIGN',
        tone: 'left' as const,
      },
      {
        name: 'NESTLUXE',
        category: 'PREMIUM WEBSITE EXPERIENCE',
        tone: 'center' as const,
      },
      {
        name: 'MARHABA',
        category: 'SEO - ORGANIC GROWTH',
        tone: 'right' as const,
      },
    ],
  },
];

const totalSlides = 15;

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const StatsWorksSection = () => {
  const [slide, setSlide] = useState(1);

  const prev = () => setSlide((value) => (value <= 1 ? projectSlides.length : value - 1));
  const next = () => setSlide((value) => (value >= projectSlides.length ? 1 : value + 1));
  const activeSlide = projectSlides.find((item) => item.counter === slide) ?? projectSlides[0];

  const renderProjectCard = (
    project: (typeof activeSlide.projects)[number],
  ) => {
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
      <div
        key={`${activeSlide.id}-${project.name}`}
        className={`flex flex-col items-center ${isCenter ? 'md:-mt-2' : 'md:pt-14'} transition-all duration-500`}
      >
        <div
          className={`${shellClass} relative overflow-hidden rounded-[26px] border-[3px] border-[#352d74] shadow-[0_8px_0px_#352d74] ${
            isCenter ? 'h-[300px] w-[250px] md:h-[430px] md:w-[370px]' : 'h-[220px] w-[190px] md:h-[300px] md:w-[230px]'
          }`}
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_22%),radial-gradient(circle_at_80%_25%,#ffffff_0,transparent_18%),radial-gradient(circle_at_35%_70%,#4f4298_0,transparent_28%)]" />

          {project.tone === 'left' && (
            <>
              <div className="absolute left-[34%] top-[18%] h-[90px] w-[54px] rotate-[12deg] rounded-[16px] border-[3px] border-white bg-[#f5f7ff] shadow-[0_6px_14px_rgba(0,0,0,0.18)] md:h-[120px] md:w-[70px]" />
              <div className="absolute left-[39%] top-[27%] h-[10px] w-[24px] rounded-full bg-[#90b7ff] md:h-[12px] md:w-[30px]" />
              <div className="absolute bottom-[12%] left-[12%] right-[12%] flex items-end justify-between text-[#2a245d]/70">
                <div className="h-7 w-7 rounded-full border-2 border-current md:h-8 md:w-8" />
                <div className="h-12 w-10 border-2 border-current md:h-14 md:w-12" />
                <div className="h-16 w-11 border-2 border-current md:h-20 md:w-14" />
              </div>
            </>
          )}

          {project.tone === 'center' && (
            <>
              <div className="absolute left-[18%] top-[16%] h-[110px] w-[150px] rotate-[-10deg] rounded-[10px] border-[3px] border-[#5a4562] bg-[linear-gradient(180deg,#b9467a_0%,#d2cd67_100%)] shadow-[0_10px_20px_rgba(0,0,0,0.18)] md:h-[160px] md:w-[230px]" />
              <div className="absolute left-[42%] top-[49%] h-[44px] w-[86px] -translate-x-1/2 rounded-b-[18px] bg-[#d9dce5] md:h-[58px] md:w-[112px]" />
              <div className="absolute left-[39%] top-[58%] h-[12px] w-[110px] -translate-x-1/2 rotate-[-18deg] rounded-full bg-[#d9dce5] md:h-[18px] md:w-[156px]" />
              <div className="absolute bottom-[10%] left-[10%] h-[48px] w-[34px] rounded-t-[24px] rounded-b-[16px] bg-[#7d72f4] md:h-[72px] md:w-[52px]" />
              <div className="absolute bottom-[8%] right-[10%] h-[70px] w-[52px] rounded-t-[34px] rounded-b-[22px] bg-[#6b67b7] md:h-[104px] md:w-[78px]" />
            </>
          )}

          {project.tone === 'right' && (
            <>
              <div className="absolute left-[22%] top-[16%] h-[76px] w-[96px] rotate-[-6deg] rounded-[8px] border-[3px] border-[#f7efd6] bg-[linear-gradient(180deg,#f7f0dd_0%,#d5c7a6_100%)] shadow-[0_8px_16px_rgba(0,0,0,0.18)] md:h-[102px] md:w-[132px]" />
              <div className="absolute left-[18%] top-[48%] h-[4px] w-[120px] bg-[#573233] md:w-[156px]" />
              <div className="absolute bottom-[14%] left-[18%] h-[42px] w-[54px] border-[3px] border-[#f0d7af] bg-[#fff0c5] md:h-[58px] md:w-[78px]" />
              <div className="absolute bottom-[14%] right-[18%] h-[76px] w-[40px] bg-[linear-gradient(180deg,#ffb15f_0%,#e55c2f_100%)] [clip-path:polygon(40%_0,60%_0,72%_60,100%_100,0_100,28%_60%)] md:h-[104px] md:w-[54px]" />
            </>
          )}
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
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="w-full bg-white px-6 py-12 md:px-[67px] md:py-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col justify-center gap-5 sm:flex-row md:gap-7">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`relative h-[280px] max-w-full flex-1 overflow-hidden rounded-[20px] ${stat.bg} sm:max-w-[340px] md:h-[332px]`}
              >
                <div
                  className={`absolute bottom-[10px] left-[10px] right-[10px] top-[10px] rounded-[18px] border-[3px] border-dashed ${stat.borderColor}`}
                />
                <div
                  className={`absolute left-[52px] top-[28px] ${stat.numberShadow} [font-family:'Black_Han_Sans',Helvetica] text-[100px] font-normal leading-none tracking-[0] md:text-[120px] ${stat.numberColor}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`absolute left-[52px] top-[175px] ${stat.labelShadow} [font-family:'Black_Han_Sans',Helvetica] text-[26px] font-normal leading-tight tracking-[0] md:top-[195px] md:text-[30px] ${stat.labelColor}`}
                >
                  {stat.label.split('\n').map((line, lineIndex, array) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < array.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8dfee] px-6 py-12 md:px-[67px] md:py-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="[font-family:'Black_Han_Sans',Helvetica] mb-8 text-[clamp(46px,8.6vw,126px)] font-normal leading-[0.88] tracking-[0] text-[#ea6035] md:mb-10">
            LET&#39;S SEE OUR WORKS
          </h2>

          <div className="relative mt-4">
            <div className="pointer-events-none absolute -inset-3 rounded-[44px] border-[4px] border-dashed border-[#5a4da7]" />

            <div className="relative w-full rounded-[36px] border-[3px] border-[#6658bf] bg-[#5a4da7] px-6 py-8 md:px-8 md:py-8">
              <div className="mb-5 flex justify-end md:mb-4">
                <span className="[font-family:'Black_Han_Sans',Helvetica] font-normal leading-none">
                  <span className="text-[clamp(30px,4.5vw,66px)] text-[#dfe469] [text-shadow:3px_3px_0px_#2a245d]">
                    {String(activeSlide.counter).padStart(2, '0')}
                  </span>
                  <span className="text-[clamp(28px,4vw,58px)] text-white [text-shadow:3px_3px_0px_#2a245d]">
                    /{String(totalSlides).padStart(2, '0')}
                  </span>
                </span>
              </div>

              <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-5">
                {activeSlide.projects.map((project) => renderProjectCard(project))}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsWorksSection;
