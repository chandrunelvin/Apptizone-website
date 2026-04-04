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
      wrapperClass: 'left-[7%] top-[14%]',
      imageClass: 'w-[140px] md:w-[165px]',
      panelClass:
        'left-[42%] top-[-18%] h-[172px] w-[290px] -rotate-[10deg] rounded-[40px] md:h-[208px] md:w-[420px] md:rounded-[58px]',
      panelTextClass: 'max-w-[160px] md:max-w-[230px]',
      origin: 'left center',
      align: 'end',
    },
    {
      key: 'website',
      image: websiteSticker,
      title: 'Website Design',
      details:
        'Create clear user journeys, stronger interfaces, and better conversion-focused web and app experiences.',
      wrapperClass: 'left-[4%] top-[56%]',
      imageClass: 'w-[280px] md:w-[325px]',
      panelClass:
        'left-[24%] top-[-20%] h-[160px] w-[260px] -rotate-[8deg] rounded-[34px] md:h-[196px] md:w-[360px] md:rounded-[52px]',
      panelTextClass: 'max-w-[150px] md:max-w-[210px]',
      origin: 'left center',
      align: 'end',
    },
    {
      key: 'social',
      image: socialSticker,
      title: 'Social Media Marketing',
      details:
        'Boost reach with platform-specific content, stronger engagement, and campaigns designed to grow attention.',
      wrapperClass: 'left-[48%] top-[23%]',
      imageClass: 'w-[250px] md:w-[295px]',
      panelClass:
        'left-[24%] top-[-18%] h-[152px] w-[250px] rotate-[8deg] rounded-[34px] md:h-[188px] md:w-[360px] md:rounded-[48px]',
      panelTextClass: 'max-w-[145px] md:max-w-[205px]',
      origin: 'left center',
      align: 'end',
    },
    {
      key: 'sem',
      image: semSticker,
      title: 'SEM',
      details:
        'Capture high-intent traffic fast with performance ads, targeted campaigns, and measurable lead generation.',
      wrapperClass: 'right-[6%] top-[50%]',
      imageClass: 'w-[240px] md:w-[285px]',
      panelClass:
        'right-[18%] top-[-18%] h-[156px] w-[250px] -rotate-[6deg] rounded-[34px] md:h-[194px] md:w-[360px] md:rounded-[50px]',
      panelTextClass: 'max-w-[150px] md:max-w-[205px]',
      origin: 'right center',
      align: 'start',
    },
    {
      key: 'whatsapp',
      image: whatsappMarketingSticker,
      title: 'WhatsApp Marketing',
      details:
        'Drive direct conversations, faster replies, and better campaign engagement through WhatsApp funnels.',
      wrapperClass: 'right-[28%] bottom-[0.5%]',
      imageClass: 'w-[150px] md:w-[180px]',
      panelClass:
        'right-[18%] top-[-46%] h-[146px] w-[248px] -rotate-[18deg] rounded-[34px] md:h-[180px] md:w-[340px] md:rounded-[48px]',
      panelTextClass: 'max-w-[140px] md:max-w-[200px]',
      origin: 'right center',
      align: 'start',
    },
    {
      key: 'whatsapp-integration',
      image: whatsappIntegrationSticker,
      title: 'WhatsApp Integration',
      details:
        'Connect systems with API automation, CRM sync, and scalable customer communication workflows.',
      wrapperClass: 'right-[14%] bottom-[8%]',
      imageClass: 'w-[220px] md:w-[260px]',
      panelClass:
        'right-[18%] top-[-24%] h-[148px] w-[250px] -rotate-[8deg] rounded-[34px] md:h-[184px] md:w-[350px] md:rounded-[48px]',
      panelTextClass: 'max-w-[145px] md:max-w-[205px]',
      origin: 'right center',
      align: 'start',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#f56f3f_0%,#ec5a2f_40%,#d84b23_100%)] px-4 py-14 md:px-8 md:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-8 w-full bg-[radial-gradient(circle_at_16px_0px,#ffffff_15px,transparent_16px)] bg-[length:32px_32px]" />

      <div className="mx-auto w-full max-w-[1530px]">
        <h2 className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(44px,7vw,112px)] leading-[0.95] text-[#f0f2ff] [text-shadow:6px_6px_0px_#25225e]">
          SERVICE OVERVIEW ↘
        </h2>

        <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-6 text-right text-[clamp(24px,3.2vw,62px)] font-semibold leading-tight text-[#ecd65d]">
          Tailored Strategies for
          <br />
          Maximum Business Growth
        </p>

        <div className="relative mt-10 aspect-[1274/646] w-full overflow-hidden">
          <img
            src={bgService}
            alt="Girl working on laptop background"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />

          {stickers.map((item) => (
            <div
              key={item.key}
              className={`absolute ${item.wrapperClass}`}
              onMouseEnter={() => setHoveredSticker(item.key)}
              onMouseLeave={() => setHoveredSticker((current) => (current === item.key ? null : current))}
            >
              <div
                className={`pointer-events-none absolute ${item.panelClass} z-10 overflow-hidden bg-[#27313b] shadow-[0_10px_24px_rgba(24,28,32,0.22)] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                style={{
                  opacity: hoveredSticker === item.key ? 1 : 0,
                  transformOrigin: item.origin,
                  transform: hoveredSticker === item.key ? 'scaleX(1) scaleY(1)' : 'scaleX(0.08) scaleY(0.92)',
                }}
              >
                <div className={`flex h-full items-center ${item.align === 'end' ? 'justify-end' : 'justify-start'} px-6 py-5 md:px-9 md:py-7`}>
                  <p
                    className={`[font-family:'Bricolage_Grotesque',Helvetica] ${item.panelTextClass} text-[14px] font-medium leading-[1.25] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[18px]`}
                    style={{
                      opacity: hoveredSticker === item.key ? 1 : 0,
                      transform: hoveredSticker === item.key ? 'translateX(0px)' : item.align === 'end' ? 'translateX(16px)' : 'translateX(-16px)',
                    }}
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
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
