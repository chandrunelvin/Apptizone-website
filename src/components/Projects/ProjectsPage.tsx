import { useState } from 'react';
import semSticker from '../../assets/home/sem-ani.png';
import seoSticker from '../../assets/home/seo-ani.png';
import socialSticker from '../../assets/home/socail-ani.png';
import websiteSticker from '../../assets/home/uiandux-ani.png';
import whatsappIntegrationSticker from '../../assets/home/w-inter-ani.png';
import whatsappMarketingSticker from '../../assets/home/whatsapp-m-ani.png';

const serviceTabs = [
  { key: 'all', title: 'All Projects', image: null },
  { key: 'seo', title: 'SEO', image: seoSticker },
  { key: 'uiux', title: 'UI/UX Design', image: websiteSticker },
  { key: 'social', title: 'Social Media', image: socialSticker },
  { key: 'sem', title: 'SEM', image: semSticker },
  { key: 'whatsapp-marketing', title: 'WhatsApp Marketing', image: whatsappMarketingSticker },
  { key: 'whatsapp-integration', title: 'WhatsApp Integration', image: whatsappIntegrationSticker },
];

const allProjects = [
  {
    name: 'XANFI AI',
    category: 'SOCIAL MEDIA MARKETING',
    service: 'social',
    tone: 'left' as const,
  },
  {
    name: 'NAH PETCARE',
    category: 'PET CARE E-COMMERCE WEBSITE',
    service: 'uiux',
    tone: 'center' as const,
  },
  {
    name: 'ZEENATH',
    category: 'SEO - 5TH PAGE TO 1ST',
    service: 'seo',
    tone: 'right' as const,
  },
  {
    name: 'BLOSSOM CARE',
    category: 'META ADS CAMPAIGN',
    service: 'sem',
    tone: 'left' as const,
  },
  {
    name: 'PETIVA',
    category: 'BRAND E-COMMERCE REDESIGN',
    service: 'uiux',
    tone: 'center' as const,
  },
  {
    name: 'AL SHIFA',
    category: 'SEO - LOCAL RANK BOOST',
    service: 'seo',
    tone: 'right' as const,
  },
  {
    name: 'BOTIVA',
    category: 'SOCIAL MEDIA DESIGN',
    service: 'social',
    tone: 'left' as const,
  },
  {
    name: 'NESTLUXE',
    category: 'PREMIUM WEBSITE EXPERIENCE',
    service: 'uiux',
    tone: 'center' as const,
  },
  {
    name: 'MARHABA',
    category: 'SEO - ORGANIC GROWTH',
    service: 'seo',
    tone: 'right' as const,
  },
  {
    name: 'DIRECT CHAT',
    category: 'WHATSAPP FUNNEL AUTOMATION',
    service: 'whatsapp-marketing',
    tone: 'left' as const,
  },
  {
    name: 'REPLY BOT',
    category: 'CRM API INTEGRATION',
    service: 'whatsapp-integration',
    tone: 'center' as const,
  },
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.service === activeTab);

  const renderProjectCard = (project: typeof allProjects[0], index: number) => {
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
        key={`${project.name}-${index}`}
        className="flex flex-col items-center transition-all duration-500"
      >
        <div
          className={`${shellClass} relative overflow-hidden rounded-[26px] border-[3px] border-[#352d74] shadow-[0_8px_0px_#352d74] h-[300px] w-[250px] md:h-[380px] md:w-[320px]`}
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

        <div className="mt-4 text-center">
          <div
            className={`${titleClass} [font-family:'Black_Han_Sans',Helvetica] leading-[0.95] text-[clamp(20px,3.5vw,42px)]`}
          >
            {project.name}
          </div>
          <div
            className={`${categoryClass} [font-family:'Black_Han_Sans',Helvetica] mt-1 leading-none text-[clamp(10px,1.5vw,20px)]`}
          >
            {project.category}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4eee4] pt-32 pb-20">
      <div className="mx-auto max-w-[1530px] px-6 lg:px-16">
        <h1 className="[font-family:'Black_Han_Sans',Helvetica] mb-12 text-[clamp(46px,8.6vw,126px)] font-normal leading-[0.88] tracking-[0] text-[#ea6035]">
          OUR PROJECTS
        </h1>

        {/* Tabs */}
        <div className="mb-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {serviceTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`group relative flex flex-col items-center gap-2 transition-all ${
                activeTab === tab.key ? 'scale-110' : 'opacity-60 grayscale hover:opacity-100 hover:grayscale-0'
              }`}
            >
              {tab.image ? (
                <img src={tab.image} alt={tab.title} className="h-20 w-auto md:h-28" />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#ea6035] md:h-28 md:w-28">
                  <span className="text-center font-['Black_Han_Sans',Helvetica] text-lg text-white">ALL</span>
                </div>
              )}
              <span className={`[font-family:'Black_Han_Sans',Helvetica] text-sm uppercase md:text-base ${activeTab === tab.key ? 'text-[#ea6035]' : 'text-[#25225e]'}`}>
                {tab.title}
              </span>
              {activeTab === tab.key && (
                <div className="absolute -bottom-2 h-1 w-full rounded-full bg-[#ea6035]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => renderProjectCard(project, index))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] text-2xl font-semibold text-[#25225e]">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
