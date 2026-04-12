import React, { useState } from 'react';

export type ServiceCard = {
  title: string;
  items: string[];
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServicePageConfig = {
  serviceName: string;
  heroTitle: string;
  heroTitleImageSrc?: string;
  heroBackgroundImageSrc?: string;
  heroPattern?: 'burst';
  benefitsCenterImageSrc?: string;
  cardsSectionBg?: string;
  heroDescription: string;
  statsHeadline: string;
  statsDescription: string;
  mattersTitle: string;
  mattersBullets: string[];
  benefitHighlights: string[];
  ctaText: string;
  cardsTitle: string;
  serviceCards: ServiceCard[];
  processTitle: string;
  processSteps: ProcessStep[];
  colors: {
    pageBg: string;
    heroBg: string;
    accent: string;
    secondaryAccent: string;
    cardBg: string;
    cardBorder: string;
    cardShadow: string;
    darkText: string;
    lightText: string;
    buttonBg: string;
    buttonShadow: string;
  };
};

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+61', name: 'Australia' },
  { code: '+971', name: 'UAE' },
];

const services = [
  'WhatsApp Marketing',
  'SEO',
  'Social Media Management',
  'Search Engine Marketing',
  'Web & App Design',
  'WhatsApp Integration',
];

const scrollToContact = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroForm: React.FC<{ config: ServicePageConfig }> = ({ config }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedService, setSelectedService] = useState(config.serviceName);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Valid email required';
    if (!mobile.trim() || !/^\d{7,15}$/.test(mobile.replace(/\s/g, ''))) nextErrors.mobile = 'Valid mobile number required';
    if (!selectedService) nextErrors.service = 'Please select a service';
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="w-full lg:w-[500px]">
      {submitted ? (
        <div
          id="contact-form"
          className="w-full rounded-[36px] border-4 px-8 py-14 text-center shadow-[8px_8px_0px_#000]"
          style={{ backgroundColor: config.colors.cardBg, borderColor: '#111111' }}
        >
          <div className="text-5xl">✅</div>
          <h2
            className="mt-4 [font-family:'Bricolage_Grotesque',Helvetica] text-3xl font-semibold"
            style={{ color: config.colors.darkText }}
          >
            Thank you, {name}!
          </h2>
          <p
            className="mt-3 [font-family:'Bricolage_Grotesque',Helvetica] text-lg"
            style={{ color: config.colors.darkText }}
          >
            We received your request for {config.serviceName} and will contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setMobile('');
              setSelectedService(config.serviceName);
            }}
            className="mt-6 h-[54px] rounded-xl px-8 text-xl text-white transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.buttonBg, boxShadow: `5px 5px 0 ${config.colors.buttonShadow}` }}
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          noValidate
          className="w-full rounded-[36px] border-4 py-10 shadow-[8px_8px_0px_#000]"
          style={{ backgroundColor: config.colors.cardBg, borderColor: '#111111' }}
        >
          <h2 className="mb-8 text-center [font-family:'Bricolage_Grotesque',Helvetica] text-3xl font-semibold text-[#222222]">
            LET&apos;S WORK TOGETHER
          </h2>

          {[
            { label: 'Name', value: name, onChange: setName, placeholder: 'Full Name', error: errors.name, type: 'text' },
            { label: 'Mail Id', value: email, onChange: setEmail, placeholder: 'you@example.com', error: errors.email, type: 'email' },
          ].map((field) => (
            <div key={field.label} className="mx-8 mb-5 flex flex-col gap-1 md:mx-12">
              <label className="[font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#222222]">{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className="h-[52px] rounded-xl border px-4 text-lg text-[#333333] outline-none"
                style={{ borderColor: field.error ? '#ef4444' : '#bfbfbf' }}
                placeholder={field.placeholder}
              />
              {field.error && <span className="text-sm text-red-500">{field.error}</span>}
            </div>
          ))}

          <div className="mx-8 mb-5 flex flex-col gap-1 md:mx-12">
            <label className="[font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#222222]">Country Code</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setCountryOpen((value) => !value);
                  setServiceOpen(false);
                }}
                className="flex h-[52px] w-full items-center rounded-xl border bg-white"
                style={{ borderColor: '#bfbfbf' }}
              >
                <span className="px-4 text-lg text-[#333333]">{selectedCountry.code}</span>
                <div className="h-full w-px bg-[#bfbfbf]" />
                <span className="flex-1 px-4 text-left text-lg text-[#333333]">{selectedCountry.name}</span>
                <span className="px-4 text-lg text-[#666666]">▾</span>
              </button>
              {countryOpen && (
                <div className="absolute top-full z-20 mt-1 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
                  {countryCodes.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-lg text-[#333333] hover:bg-[#f3f4f6]"
                    >
                      {country.code} {country.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mx-8 mb-5 flex flex-col gap-1 md:mx-12">
            <label className="[font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#222222]">Mobile Number</label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="h-[52px] rounded-xl border px-4 text-lg text-[#333333] outline-none"
              style={{ borderColor: errors.mobile ? '#ef4444' : '#bfbfbf' }}
              placeholder={selectedCountry.code}
            />
            {errors.mobile && <span className="text-sm text-red-500">{errors.mobile}</span>}
          </div>

          <div className="mx-8 mb-8 flex flex-col gap-1 md:mx-12">
            <label className="[font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#222222]">Service</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setServiceOpen((value) => !value);
                  setCountryOpen(false);
                }}
                className="flex h-[52px] w-full items-center rounded-xl border bg-white"
                style={{ borderColor: errors.service ? '#ef4444' : '#bfbfbf' }}
              >
                <span className={`flex-1 px-4 text-left text-lg ${selectedService ? 'text-[#333333]' : 'text-[#9ca3af]'}`}>
                  {selectedService || 'Select Service'}
                </span>
                <span className="px-4 text-lg text-[#666666]">▾</span>
              </button>
              {serviceOpen && (
                <div className="absolute top-full z-20 mt-1 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setSelectedService(service);
                        setServiceOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left text-lg text-[#333333] hover:bg-[#f3f4f6]"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.service && <span className="text-sm text-red-500">{errors.service}</span>}
          </div>

          <div className="mx-8 md:mx-12">
            <button
              type="submit"
              className="h-[54px] w-full rounded-xl text-xl text-white transition-all hover:opacity-90"
              style={{ backgroundColor: config.colors.buttonBg, boxShadow: `5px 5px 0 ${config.colors.buttonShadow}` }}
            >
              Submit Form
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export const ServiceHeroSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section
    className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 lg:px-16 lg:pb-20 lg:pt-40"
    style={{
      background: config.heroPattern
        ? config.colors.heroBg
        : config.heroBackgroundImageSrc
        ? config.colors.heroBg
        : `radial-gradient(circle at top left, ${config.colors.secondaryAccent} 0%, transparent 42%), linear-gradient(135deg, ${config.colors.heroBg} 0%, ${config.colors.pageBg} 100%)`,
    }}
  >
    {config.heroPattern === 'burst' && (
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 52%, #111111 0deg 5deg, transparent 5deg 10deg)',
          opacity: 1,
        }}
      />
    )}

    {config.heroBackgroundImageSrc && (
      <img
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
        alt=""
        src={config.heroBackgroundImageSrc}
      />
    )}

    <div className="relative z-10 mx-auto flex max-w-[1380px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
      <div className="w-full lg:max-w-[720px]">
        <div className="mb-8 flex flex-wrap gap-3">
          {config.benefitHighlights.map((item, index) => (
            <div
              key={item}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] lg:text-base ${index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}`}
              style={{ borderColor: '#111111', backgroundColor: config.colors.accent, color: config.colors.darkText }}
            >
              {item}
            </div>
          ))}
        </div>
        {config.heroTitleImageSrc ? (
          <img
            className="w-full max-w-[720px] h-auto"
            alt={config.serviceName}
            src={config.heroTitleImageSrc}
          />
        ) : (
          <h1
            className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(44px,8vw,104px)] leading-[0.95]"
            style={{ color: config.colors.lightText, textShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
          >
            {config.heroTitle}
          </h1>
        )}
        <p
          className={`${config.heroTitleImageSrc ? 'mt-4' : 'mt-8'} max-w-[760px] [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-semibold leading-[1.5] md:text-3xl`}
          style={{ color: config.colors.lightText }}
        >
          {config.heroDescription}
        </p>
        <div id="contact" className="mt-8 flex flex-wrap items-center gap-6">
          <button
            onClick={scrollToContact}
            className="h-[60px] min-w-[230px] rounded-[14px] px-8 [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(24px,3vw,40px)] leading-none text-white shadow-[6px_6px_0_#1f1d59] transition hover:opacity-90"
            style={{ backgroundColor: config.colors.buttonBg }}
          >
            Contact Us
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[60px] min-w-[250px] items-center justify-center gap-3 rounded-[14px] px-8 [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(24px,3vw,40px)] leading-none text-white shadow-[6px_6px_0_#1f1d59] transition hover:opacity-90"
            style={{ backgroundColor: '#66BA4F' }}
          >
            <img
              className="h-[30px] w-[30px]"
              alt="WhatsApp"
              src="https://c.animaapp.com/mms4ffjl5N2sBn/img/mage-whatsapp-filled.svg"
            />
            WhatsApp
          </a>
        </div>
      </div>

      <HeroForm config={config} />
    </div>
  </section>
);

export const ServiceStatsSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section id="services" className="relative w-full overflow-hidden min-h-[909px]">
    <img className="absolute top-0 left-0 w-full h-[893px] object-cover" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-363-1.svg" />
    <img className="absolute top-4 left-[70px] w-[1401px] h-[877px] object-cover" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-198.png" />
    <img className="absolute top-0 left-px w-full h-[894px] object-cover" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-199.png" />
    <div className="relative z-10 flex flex-col w-full px-6 md:px-[126px] pt-[149px] pb-[100px]">
      <h2 className="w-full max-w-[1371px] [text-shadow:6px_6px_1px_#201f51] [font-family:'Black_Han_Sans',Helvetica] font-normal text-white text-[clamp(48px,8vw,120px)] tracking-[0] leading-[1.1] mb-0">
        {config.statsHeadline}
      </h2>
      <p className="mt-[60px] w-full max-w-[1201px] [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[52px]">
        {config.statsDescription}
      </p>
    </div>
  </section>
);

export const ServiceMattersSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => {
  const titleParts = config.mattersTitle.toUpperCase().endsWith(' MATTERS')
    ? {
        prefix: config.mattersTitle.slice(0, -8),
        suffix: ' MATTERS',
      }
    : { prefix: config.mattersTitle, suffix: '' };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '788px' }}>
      <img className="absolute top-0 left-0 w-full h-full object-cover" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-360.svg" />
      <div className="relative w-full flex flex-col lg:flex-row items-start px-6 md:px-[100px] lg:px-[152px] pt-16 lg:pt-[217px] pb-[60px] gap-10 lg:gap-0">
        <div className="w-full lg:w-[513px] shrink-0 [text-shadow:-2px_2px_0px_#201f51] [-webkit-text-stroke:1px_#222222] [font-family:'Black_Han_Sans',Helvetica] font-normal text-transparent text-[clamp(36px,6vw,72px)] tracking-[0] leading-[normal]">
          <span className="text-[#66ba4f]">{titleParts.prefix}</span>
          <span className="text-white">{titleParts.suffix}</span>
        </div>
        <div className="flex flex-col gap-[32px] lg:ml-[80px] lg:pt-[49px]">
          {config.mattersBullets.map((bullet) => (
            <div key={bullet} className="flex flex-row items-start gap-[17.5px]">
              <img className="mt-1 w-7 h-[27px] shrink-0" alt="Bullet" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/--2.svg" />
              <div className="[text-shadow:-1px_1px_0px_#49071e] [-webkit-text-stroke:0.5px_#4a081f] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[clamp(20px,2.5vw,30px)] tracking-[0] leading-[normal]">
                {bullet}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="absolute bottom-0 left-[-97px] w-[259px] h-[260px]" alt="Decoration" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/--16.svg" />
    </section>
  );
};

export const ServiceBenefitsSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => {
  const highlights = [
    config.benefitHighlights[0] ?? '',
    config.benefitHighlights[1] ?? '',
    config.benefitHighlights[2] ?? '',
    config.benefitHighlights[3] ?? '',
    config.benefitHighlights[4] ?? '',
  ];

  const benefitsImageSrc = config.benefitsCenterImageSrc ?? 'https://c.animaapp.com/mms4ffjl5N2sBn/img/man.png';

  return (
    <section className="relative w-full overflow-hidden bg-[#24185a] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.05),transparent_18%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-[radial-gradient(24px_10px_at_12px_100%,transparent_98%,#f4eee4_100%),radial-gradient(24px_10px_at_36px_100%,transparent_98%,#f4eee4_100%)] bg-[length:48px_100%] bg-repeat-x" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-[radial-gradient(24px_10px_at_12px_0,transparent_98%,#f4eee4_100%),radial-gradient(24px_10px_at_36px_0,transparent_98%,#f4eee4_100%)] bg-[length:48px_100%] bg-repeat-x" />

      <div className="relative flex w-full flex-col items-center">
        <div className="relative hidden w-full max-w-[1440px] lg:block" style={{ height: '680px' }}>
          <div
            className="pointer-events-none absolute left-1/2 top-[10px] z-10 -translate-x-1/2 rotate-[-5deg] text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[58px] font-extrabold leading-[0.98]"
            style={{ whiteSpace: 'nowrap', color: config.colors.accent }}
          >
            {highlights[0]}
          </div>
          <div
            className="pointer-events-none absolute left-[3%] top-[210px] z-10 w-[420px] rotate-[-7deg] [font-family:'Bricolage_Grotesque',Helvetica] text-[52px] font-extrabold leading-[0.98]"
            style={{ color: config.colors.accent }}
          >
            {highlights[1]}
          </div>
          <div
            className="pointer-events-none absolute right-[4%] top-[190px] z-10 w-[360px] rotate-[8deg] text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[52px] font-extrabold leading-[0.98]"
            style={{ color: config.colors.accent }}
          >
            {highlights[2]}
          </div>
          <div
            className="pointer-events-none absolute left-[8%] top-[405px] z-10 w-[320px] rotate-[4deg] text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[42px] font-extrabold leading-[0.98]"
            style={{ color: config.colors.accent }}
          >
            {highlights[3] || highlights[1]}
          </div>
          <div
            className="pointer-events-none absolute right-[9%] top-[420px] z-10 w-[320px] rotate-[-4deg] text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[42px] font-extrabold leading-[0.98]"
            style={{ color: config.colors.accent }}
          >
            {highlights[4] || highlights[2]}
          </div>

          <img
            className="absolute left-1/2 top-[150px] z-20 h-[390px] w-auto -translate-x-1/2"
            alt="Benefits illustration"
            src={benefitsImageSrc}
          />
        </div>

        <div className="flex w-full max-w-[760px] flex-col items-center gap-4 px-2 pb-4 pt-8 lg:hidden">
          <div className="text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[34px] font-extrabold leading-[1] text-[color:var(--accent)]" style={{ ['--accent' as string]: config.colors.accent }}>
            {highlights[0]}
          </div>
          {highlights.filter(Boolean).map((text, index) => (
            <div
              key={`${text}-${index}`}
              className="text-center [font-family:'Bricolage_Grotesque',Helvetica] text-2xl font-extrabold leading-tight"
              style={{ color: config.colors.accent }}
            >
              {text}
            </div>
          ))}
          <img alt="Benefits illustration" src={benefitsImageSrc} className="mt-2 h-auto w-[62%] max-w-[320px]" />
        </div>

        <div className="relative z-10 mt-2 flex flex-col items-center px-6 pb-10">
          <p
            className="text-center [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(24px,3vw,34px)] font-semibold leading-[1.45] tracking-[0]"
            style={{ maxWidth: '1180px', color: '#ffffff' }}
          >
            {config.ctaText}
          </p>
          <button
            onClick={scrollToContact}
            className="mt-8 h-[58px] w-[225px] cursor-pointer rounded-[14px] [font-family:'Bricolage_Grotesque',Helvetica] text-2xl font-normal leading-normal text-white shadow-[6px_6px_0_#1a1a1a] transition-all hover:opacity-90 active:translate-y-0.5"
            style={{ backgroundColor: config.colors.buttonBg }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

const sharedCardStyles = [
  {
    bg: '#ffdda0',
    text: '#422d06',
    shadow: '#4d3405',
    rotate: 'rotate-[-2.02deg]',
  },
  {
    bg: '#c7ffb6',
    text: '#103406',
    shadow: '#174809',
    rotate: 'rotate-[1.29deg]',
  },
  {
    bg: '#ffd0e7',
    text: '#3f1b2d',
    shadow: '#550b31',
    rotate: 'rotate-[0.45deg]',
  },
  {
    bg: '#caffff',
    text: '#043a3a',
    shadow: '#094c4c',
    rotate: 'rotate-[1deg]',
  },
  {
    bg: '#fff4d7',
    text: '#372905',
    shadow: '#433206',
    rotate: 'rotate-0',
  },
];

const bulletIconSrc = 'https://c.animaapp.com/mms4ffjl5N2sBn/img/--4.svg';

export const ServiceCardsSection: React.FC<{ title: string; cards: ServiceCard[]; backgroundColor?: string }> = ({ title, cards, backgroundColor = '#ec5d9f' }) => (
  <section className="w-full px-4 py-16 md:px-8" style={{ backgroundColor }}>
    <h2 className="[font-family:'Black_Han_Sans',Helvetica] mb-16 text-center text-[clamp(32px,6vw,110px)] font-normal leading-[1.1] tracking-[0] text-white [text-shadow:6px_6px_1px_#201f51]">
      {title}
    </h2>
    <div className="mx-auto flex max-w-[1296px] flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-8">
        {cards.slice(0, 3).map((card, index) => {
          const style = sharedCardStyles[index % sharedCardStyles.length];

          return (
            <div
              key={`card-row1-${card.title}`}
              className={`w-full overflow-hidden rounded-[40px] border-[3px] border-solid border-black bg-white p-0 shadow-[20px_20px_1px_var(--card-shadow)] transition-transform duration-200 hover:scale-[1.02] sm:w-[340px] lg:w-[378px] ${style.rotate}`}
              style={{ ['--card-shadow' as string]: style.shadow }}
            >
              <div className="relative h-full min-h-[309px] w-full p-0" style={{ backgroundColor: style.bg }}>
                <div className="[font-family:'Black_Han_Sans',Helvetica] mb-4 px-[40px] pt-[46px] text-2xl font-normal leading-[normal] tracking-[0]" style={{ color: style.text }}>
                  {card.title}
                </div>
                <ul className="flex flex-col gap-[16px] px-[40px] pb-[40px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-[8.8px]">
                      <img className="mt-[5px] h-[14px] w-[14px] flex-shrink-0" alt="" src={bulletIconSrc} />
                      <span className="[font-family:'Bricolage_Grotesque',Helvetica] text-xl font-normal leading-[normal] tracking-[0]" style={{ color: style.text }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {cards.slice(3).map((card, index) => {
          const style = sharedCardStyles[(index + 3) % sharedCardStyles.length];

          return (
            <div
              key={`card-row2-${card.title}`}
              className={`w-full overflow-hidden rounded-[40px] border-[3px] border-solid border-black bg-white p-0 shadow-[20px_20px_1px_var(--card-shadow)] transition-transform duration-200 hover:scale-[1.02] sm:w-[340px] lg:w-[378px] ${style.rotate}`}
              style={{ ['--card-shadow' as string]: style.shadow }}
            >
              <div className="relative h-full min-h-[263px] w-full p-0" style={{ backgroundColor: style.bg }}>
                <div className="[font-family:'Black_Han_Sans',Helvetica] mb-4 px-[36px] pt-[46px] text-2xl font-normal leading-[normal] tracking-[0]" style={{ color: style.text }}>
                  {card.title}
                </div>
                <ul className="flex flex-col gap-[16px] px-[36px] pb-[40px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-[9px]">
                      <img className="mt-[5px] h-[14px] w-[14px] flex-shrink-0" alt="" src={bulletIconSrc} />
                      <span className="[font-family:'Bricolage_Grotesque',Helvetica] text-xl font-normal leading-[normal] tracking-[0]" style={{ color: style.text }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ServiceProcessSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => {
  const desktopPositions = [
    'top-[40px] left-[100px] w-[420px]',
    'top-[176px] right-[80px] w-[470px]',
    'top-[470px] left-[100px] w-[420px]',
    'top-[615px] right-[80px] w-[470px]',
  ];

  return (
    <section
      className="relative w-full overflow-hidden px-6 pb-16 pt-16 md:px-10 md:pt-20 lg:min-h-[1280px] lg:px-16 lg:pt-24"
      style={{ backgroundColor: config.colors.heroBg }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            `radial-gradient(circle at 12% 18%, ${config.colors.accent}55 0, ${config.colors.accent}55 14%, transparent 14.5%), radial-gradient(circle at 86% 22%, ${config.colors.secondaryAccent}33 0, ${config.colors.secondaryAccent}33 10%, transparent 10.5%), linear-gradient(180deg, ${config.colors.heroBg} 0%, ${config.colors.pageBg} 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1530px]">
        <h2
          className="mb-14 text-left [font-family:'Black_Han_Sans',Helvetica] text-[clamp(42px,7vw,128px)] leading-[1.03]"
          style={{ color: config.colors.lightText, textShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
        >
          {config.processTitle}
        </h2>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-[1530px] lg:block" style={{ height: '920px' }}>
        {config.processSteps.slice(0, 4).map((step, index) => (
          <div key={step.step} className={`absolute ${desktopPositions[index] ?? desktopPositions[desktopPositions.length - 1]}`}>
            <div className="flex flex-col gap-2">
              <h3
                className="[font-family:'Bricolage_Grotesque',Helvetica] text-[38px] font-extrabold leading-[1.1]"
                style={{ color: config.colors.lightText }}
              >
                {`${step.step} - ${step.title}`.toUpperCase()}
              </h3>
              <p
                className="[font-family:'Bricolage_Grotesque',Helvetica] text-[28px] font-normal leading-[1.2]"
                style={{ color: config.colors.darkText }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}

        <img className="absolute left-[535px] top-[66px] h-[128px] w-[330px]" alt="" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-460.svg" />
        <img className="absolute left-[605px] top-[324px] h-[188px] w-[180px]" alt="" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/70-1.svg" />
        <img className="absolute left-[572px] top-[570px] h-[124px] w-[180px]" alt="" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-562.png" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:hidden">
        {config.processSteps.map((step) => (
          <div
            key={step.step}
            className="rounded-[28px] border-[3px] p-6"
            style={{
              backgroundColor: config.colors.cardBg,
              borderColor: '#111111',
              boxShadow: `10px 10px 0 ${config.colors.cardShadow}`,
            }}
          >
            <h3
              className="[font-family:'Bricolage_Grotesque',Helvetica] text-2xl font-extrabold leading-tight md:text-[34px]"
              style={{ color: config.colors.buttonBg }}
            >
              {`${step.step} - ${step.title}`.toUpperCase()}
            </h3>
            <p
              className="mt-3 [font-family:'Bricolage_Grotesque',Helvetica] text-lg leading-normal md:text-2xl"
              style={{ color: config.colors.darkText }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
