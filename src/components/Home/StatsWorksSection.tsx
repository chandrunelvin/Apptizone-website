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

const projects = [
  {
    name: 'XANFI AI',
    category: 'SOCIAL MEDIA MARKETING',
    nameColor: 'text-[#ec5d9f]',
    catColor: 'text-[#ec5d9f]',
    shadow: '[text-shadow:3px_3px_1px_#201f51]',
  },
  {
    name: 'NAH PETCARE',
    category: 'PET CARE E-COMMERCE WEBSITE',
    nameColor: 'text-[#dbdd66]',
    catColor: 'text-[#dbdd66]',
    shadow: '[text-shadow:4px_4px_1px_#201f51]',
  },
  {
    name: 'ZEENATH',
    category: 'SEO - 5TH PAGE TO 1ST',
    nameColor: 'text-[#f0542e]',
    catColor: 'text-[#f0542e]',
    shadow: '[text-shadow:3px_3px_1px_#201f51]',
  },
];

const totalSlides = 15;

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const StatsWorksSection = () => {
  const [slide, setSlide] = useState(2);

  const prev = () => setSlide((value) => Math.max(1, value - 1));
  const next = () => setSlide((value) => Math.min(totalSlides, value + 1));

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

      <section className="w-full bg-white px-6 py-12 md:px-[67px] md:py-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="[font-family:'Black_Han_Sans',Helvetica] mb-10 text-[clamp(42px,8vw,120px)] font-normal leading-tight tracking-[0] text-[#f0542e] [text-shadow:6px_6px_1px_#201f51] md:mb-14">
            LET&#39;S SEE OUR WORKS
          </h2>

          <div className="w-full rounded-[50px] border-4 border-dashed border-[#413884] bg-[#4f4298] px-5 py-8 md:px-12 md:py-14">
            <div className="mb-6 flex justify-end md:mb-10">
              <span className="[font-family:'Black_Han_Sans',Helvetica] font-normal [text-shadow:4px_4px_1px_#201f51]">
                <span className="text-[clamp(28px,5vw,72px)] text-[#dbdd66]">{String(slide).padStart(2, '0')}</span>
                <span className="text-[clamp(22px,4vw,56px)] text-white">/{totalSlides}</span>
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <div className="h-[200px] w-full rounded-2xl bg-[#413884] md:h-[348px] md:w-[290px]" />
              <div className="h-[240px] w-full rounded-2xl bg-[#3d3680] md:h-[512px] md:w-[426px]" />
              <div className="h-[200px] w-full rounded-2xl bg-[#413884] md:h-[348px] md:w-[290px]" />
            </div>

            <div className="mt-8 flex w-full flex-col items-start justify-between gap-6 px-2 md:mt-10 md:flex-row md:items-end">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={index === 1 ? 'w-full text-center md:w-auto' : index === 2 ? 'w-full text-right md:w-auto' : 'w-full md:w-auto'}
                >
                  <div
                    className={`${project.shadow} [font-family:'Black_Han_Sans',Helvetica] font-normal leading-tight ${project.nameColor} ${index === 1 ? 'text-[clamp(20px,4.5vw,64px)]' : 'text-[clamp(20px,3vw,44px)]'}`}
                  >
                    {project.name}
                  </div>
                  <div
                    className={`${project.shadow} [font-family:'Black_Han_Sans',Helvetica] mt-1 font-normal leading-tight ${project.catColor} ${index === 1 ? 'text-[clamp(11px,1.8vw,26px)]' : 'text-[clamp(11px,1.4vw,20px)]'}`}
                  >
                    {project.category}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={prev}
                disabled={slide <= 1}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ecd65d] text-[#ecd65d] transition-colors hover:bg-[#ecd65d] hover:text-[#4f4298] disabled:opacity-40"
                aria-label="Previous project"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                onClick={next}
                disabled={slide >= totalSlides}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ecd65d] text-[#ecd65d] transition-colors hover:bg-[#ecd65d] hover:text-[#4f4298] disabled:opacity-40"
                aria-label="Next project"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsWorksSection;
