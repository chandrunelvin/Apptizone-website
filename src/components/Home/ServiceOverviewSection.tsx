import bgService from '../../assets/home/bg-service.png';
import semSticker from '../../assets/home/sem-ani.png';
import seoSticker from '../../assets/home/seo-ani.png';
import socialSticker from '../../assets/home/socail-ani.png';
import websiteSticker from '../../assets/home/uiandux-ani.png';
import whatsappIntegrationSticker from '../../assets/home/w-inter-ani.png';
import whatsappMarketingSticker from '../../assets/home/whatsapp-m-ani.png';

const ServiceOverviewSection = () => {
  const stickers = [
    {
      key: 'seo',
      image: seoSticker,
      title: 'SEO',
      details: 'Search Engine Optimization',
      wrapperClass: 'left-[7%] top-[14%]',
      imageClass: 'w-[140px] md:w-[165px]',
      backClass: '-left-3 top-[44px] w-[210px]',
    },
    {
      key: 'website',
      image: websiteSticker,
      title: 'Website Design',
      details: 'UI/UX and App Design',
      wrapperClass: 'left-[4%] top-[56%]',
      imageClass: 'w-[280px] md:w-[325px]',
      backClass: 'left-6 top-[86px] w-[230px]',
    },
    {
      key: 'social',
      image: socialSticker,
      title: 'Social Media Marketing',
      details: 'Content, Reach, and Engagement',
      wrapperClass: 'left-[48%] top-[23%]',
      imageClass: 'w-[250px] md:w-[295px]',
      backClass: 'left-14 top-[92px] w-[250px]',
    },
    {
      key: 'sem',
      image: semSticker,
      title: 'SEM',
      details: 'Search Engine Marketing',
      wrapperClass: 'right-[6%] top-[50%]',
      imageClass: 'w-[240px] md:w-[285px]',
      backClass: 'right-8 top-[96px] w-[220px]',
    },
    {
      key: 'whatsapp',
      image: whatsappMarketingSticker,
      title: 'WhatsApp Marketing',
      details: 'Broadcasts, Funnels, and Leads',
      wrapperClass: 'right-[28%] bottom-[0.5%]',
      imageClass: 'w-[150px] md:w-[180px]',
      backClass: '-left-8 top-[54px] w-[235px]',
    },
    {
      key: 'whatsapp-integration',
      image: whatsappIntegrationSticker,
      title: 'WhatsApp Integration',
      details: 'API, Automation, and CRM Sync',
      wrapperClass: 'right-[14%] bottom-[8%]',
      imageClass: 'w-[220px] md:w-[260px]',
      backClass: 'right-8 top-[78px] w-[250px]',
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
            <div key={item.key} className={`absolute ${item.wrapperClass} group`}>
              <div
                className={`pointer-events-none absolute ${item.backClass} z-10 rounded-2xl border-2 border-[#263238] bg-white/95 px-4 py-3 opacity-0 shadow-[4px_4px_0px_#24224b] transition-all duration-200 group-hover:opacity-100`}
              >
                <p className="[font-family:'Black_Han_Sans',Helvetica] text-[22px] leading-tight text-[#26233f]">
                  {item.title}
                </p>
                <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-1 text-[14px] font-semibold leading-tight text-[#2f2c52]">
                  {item.details}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`relative z-20 h-auto ${item.imageClass} cursor-pointer transition-transform duration-200 group-hover:-translate-y-1`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
