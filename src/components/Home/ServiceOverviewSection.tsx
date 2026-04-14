import { useState } from 'react';

import bgService from '../../assets/home/bg-service.png';
import semSticker from '../../assets/home/sem-ani.png';
import seoSticker from '../../assets/home/seo-ani.png';
import socialSticker from '../../assets/home/socail-ani.png';
import websiteSticker from '../../assets/home/uiandux-ani.png';
import whatsappIntegrationSticker from '../../assets/home/w-inter-ani.png';
import whatsappMarketingSticker from '../../assets/home/whatsapp-m-ani.png';

const ServiceOverviewSection = () => {
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);

  const stickers = [
    {
      key: 'seo',
      image: seoSticker,
      title: 'SEO',
      details:
        'Improve search visibility and attract quality organic traffic. Built for sustainable, long-term growth.',
      wrapperClass: 'left-[12%] top-[18%]',
      imageClass: 'w-[140px] md:w-[205px]',
      tooltipClass: 'left-1/2 bottom-[108%] w-[220px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
    {
      key: 'website',
      image: websiteSticker,
      title: 'Website Design',
      details:
        'Create clear user journeys, stronger interfaces, and better conversion-focused web and app experiences.',
      wrapperClass: 'left-[7%] top-[42%]',
      imageClass: 'w-[280px] md:w-[325px]',
      tooltipClass: 'left-1/2 bottom-[108%] w-[240px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
    {
      key: 'social',
      image: socialSticker,
      title: 'Social Media Marketing',
      details:
        'Boost reach with platform-specific content, stronger engagement, and campaigns designed to grow attention.',
      wrapperClass: 'left-[54%] top-[26%]',
      imageClass: 'w-[250px] md:w-[295px]',
      tooltipClass: 'left-1/2 bottom-[108%] w-[245px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
    {
      key: 'sem',
      image: semSticker,
      title: 'SEM',
      details:
        'Capture high-intent traffic fast with performance ads, targeted campaigns, and measurable lead generation.',
      wrapperClass: 'right-[3%] top-[51%]',
      imageClass: 'w-[240px] md:w-[285px]',
      tooltipClass: 'left-1/2 bottom-[108%] w-[235px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
    {
      key: 'whatsapp',
      image: whatsappMarketingSticker,
      title: 'WhatsApp Marketing',
      details:
        'Drive direct conversations, faster replies, and better campaign engagement through WhatsApp funnels.',
      wrapperClass: 'right-[20%] bottom-[2%]',
      imageClass: 'w-[150px] md:w-[180px]',
      tooltipClass: 'left-1/2 bottom-[112%] w-[230px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
    {
      key: 'whatsapp-integration',
      image: whatsappIntegrationSticker,
      title: 'WhatsApp Integration',
      details:
        'Connect systems with API automation, CRM sync, and scalable customer communication workflows.',
      wrapperClass: 'left-[8%] bottom-[-5%]',
      imageClass: 'w-[220px] md:w-[260px]',
      tooltipClass: 'left-1/2 bottom-[110%] w-[245px] -translate-x-1/2',
      tooltipArrowClass: 'left-1/2 bottom-[-10px] -translate-x-1/2 border-t-[#25225e]',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#f56f3f_0%,#ec5a2f_40%,#d84b23_100%)] px-4 py-14 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-[radial-gradient(circle_at_16px_0px,#ffffff_15px,transparent_16px)] bg-[length:32px_32px]" />

      <div className="mx-auto w-full max-w-[1530px]">
        <h2 className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(44px,7vw,112px)] leading-[0.95] text-[#f0f2ff] [text-shadow:6px_6px_0px_#25225e]">
          SERVICE OVERVIEW ↘
        </h2>

        <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-6 text-left text-[clamp(24px,3.2vw,62px)] font-semibold leading-tight text-[#ecd65d] md:text-right">
          Tailored Strategies for
          <br />
          Maximum Business Growth
        </p>

        <div className="relative mt-10 hidden aspect-[1274/646] w-full overflow-hidden md:block">
          <img
            src={bgService}
            alt="Girl working on laptop background"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />

          {stickers.map((item) => (
            <div
              key={item.key}
              className={`absolute ${item.wrapperClass} ${hoveredSticker === item.key ? 'z-40' : 'z-10'}`}
              onMouseEnter={() => setHoveredSticker(item.key)}
              onMouseLeave={() => setHoveredSticker((current) => (current === item.key ? null : current))}
            >
              <div
                className={`pointer-events-none absolute ${item.tooltipClass} z-50 rounded-[22px] border-[3px] border-[#25225e] bg-[#25225e] px-5 py-4 shadow-[0_12px_28px_rgba(37,34,94,0.28)] transition-[opacity,transform,filter] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                style={{
                  opacity: hoveredSticker === item.key ? 1 : 0,
                  filter: hoveredSticker === item.key ? 'blur(0px)' : 'blur(8px)',
                  transform: hoveredSticker === item.key ? 'translateY(0px) scale(1)' : 'translateY(10px) scale(0.92)',
                }}
              >
                <span
                  className={`absolute h-0 w-0 border-x-[10px] border-x-transparent ${item.tooltipArrowClass}`}
                />
                <div className="flex flex-col gap-2">
                  <div className="[font-family:'Black_Han_Sans',Helvetica] text-[18px] leading-none text-[#ecd65d]">
                    {item.title}
                  </div>
                  <p
                    className="[font-family:'Bricolage_Grotesque',Helvetica] text-[13px] font-medium leading-[1.4] text-white/95"
                  >
                    {item.details}
                  </p>
                </div>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`relative z-20 h-auto ${item.imageClass} cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                style={{
                  transform: hoveredSticker === item.key ? 'translateY(-4px) scale(1.03)' : 'translateY(0px) scale(1)',
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:hidden">
          {stickers.map((item) => (
            <div
              key={item.key}
              className="rounded-[28px] border-[3px] border-[#25225e] bg-[#3a315f] p-5 shadow-[8px_8px_0px_#25225e]"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-auto w-24 shrink-0" />
                <div>
                  <h3 className="[font-family:'Black_Han_Sans',Helvetica] text-2xl leading-none text-[#f0f2ff]">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-3 text-sm leading-6 text-white/85">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
