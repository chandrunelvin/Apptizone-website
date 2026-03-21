const services = [
  {
    title: 'SEO',
    subtitle: 'Search Engine Optimization',
    bg: 'bg-[#ecd65d]',
    textColor: 'text-[#303037]',
    subtitleColor: 'text-[#303037]',
    border: 'border-[#263238]',
  },
  {
    title: 'SOCIAL MEDIA\nMARKETING',
    subtitle: '',
    bg: 'bg-[#263238]',
    textColor: 'text-[#f5f6ff]',
    subtitleColor: 'text-[#f5f6ff]',
    border: 'border-[#263238]',
  },
  {
    title: 'WEBSITE\nDESIGN',
    subtitle: 'UI/UX & APP',
    bg: 'bg-[#dfe2f6]',
    textColor: 'text-[#303037]',
    subtitleColor: 'text-[#303037]',
    border: 'border-[#263238]',
  },
  {
    title: 'SEM',
    subtitle: 'Search Engine Marketing',
    bg: 'bg-[#6353c2]',
    textColor: 'text-[#f5f6ff]',
    subtitleColor: 'text-[#f5f6ff]',
    border: 'border-[#263238]',
  },
  {
    title: 'WHATSAPP\nMARKETING',
    subtitle: '',
    bg: 'bg-[#a3df6d]',
    textColor: 'text-[#263238]',
    subtitleColor: 'text-[#263238]',
    border: 'border-[#263238]',
  },
];

const ServiceOverviewSection = () => {
  return (
    <section className="w-full bg-[#f0542e] px-6 py-[60px] md:px-[67px] md:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(48px,8.5vw,128px)] font-normal leading-[1] tracking-[0] text-[#f5f6ff] [text-shadow:6px_6px_1px_#201f51]">
          SERVICE OVERVIEW
        </h2>

        <p className="[font-family:'Bricolage_Grotesque',Helvetica] mt-4 mb-10 text-right text-[clamp(16px,2.8vw,44px)] font-semibold leading-normal tracking-[0] text-[#ecd65d] md:mb-16">
          Tailored Strategies for Maximum Business Growth
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} ${service.border} flex min-h-[210px] cursor-pointer flex-col justify-between rounded-[30px] border-[3px] border-solid p-8 transition-transform duration-200 hover:scale-[1.02] md:min-h-[260px] md:p-10`}
            >
              <div
                className={`[font-family:'Black_Han_Sans',Helvetica] whitespace-pre-line text-[clamp(28px,3vw,46px)] font-normal leading-tight ${service.textColor}`}
              >
                {service.title}
              </div>
              {service.subtitle && (
                <div
                  className={`[font-family:'Bricolage_Grotesque',Helvetica] mt-4 text-[clamp(13px,1.2vw,18px)] font-bold opacity-75 ${service.subtitleColor}`}
                >
                  {service.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
