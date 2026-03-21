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
      background: `radial-gradient(circle at top left, ${config.colors.secondaryAccent} 0%, transparent 42%), linear-gradient(135deg, ${config.colors.heroBg} 0%, ${config.colors.pageBg} 100%)`,
    }}
  >
    <div className="mx-auto flex max-w-[1380px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
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
        <h1
          className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(44px,8vw,104px)] leading-[0.95]"
          style={{ color: config.colors.lightText, textShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
        >
          {config.heroTitle}
        </h1>
        <p
          className="mt-8 max-w-[760px] [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-semibold leading-[1.5] md:text-3xl"
          style={{ color: config.colors.lightText }}
        >
          {config.heroDescription}
        </p>
        <div className="mt-10 flex flex-wrap gap-5">
          <button
            onClick={scrollToContact}
            className="h-[58px] rounded-xl px-8 text-2xl text-white transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.buttonBg, boxShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
          >
            Contact Us
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[58px] items-center rounded-xl px-8 text-2xl transition-all hover:opacity-90"
            style={{ backgroundColor: config.colors.accent, color: config.colors.darkText, boxShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <HeroForm config={config} />
    </div>
  </section>
);

export const ServiceStatsSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section className="px-6 py-20 md:px-10 lg:px-16">
    <div className="mx-auto max-w-[1380px] rounded-[44px] border-4 px-8 py-12 md:px-14 md:py-16" style={{ backgroundColor: config.colors.secondaryAccent, borderColor: '#111111' }}>
      <h2
        className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(36px,6vw,82px)] leading-[1.05]"
        style={{ color: config.colors.lightText, textShadow: `5px 5px 0 ${config.colors.buttonShadow}` }}
      >
        {config.statsHeadline}
      </h2>
      <p
        className="mt-8 max-w-[1080px] [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-semibold leading-[1.6] md:text-3xl"
        style={{ color: config.colors.lightText }}
      >
        {config.statsDescription}
      </p>
    </div>
  </section>
);

export const ServiceMattersSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section className="px-6 py-10 md:px-10 lg:px-16">
    <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h2
          className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(34px,5vw,68px)] leading-[1.05]"
          style={{ color: config.colors.lightText, textShadow: `4px 4px 0 ${config.colors.buttonShadow}` }}
        >
          {config.mattersTitle}
        </h2>
      </div>
      <div className="grid gap-4">
        {config.mattersBullets.map((bullet) => (
          <div
            key={bullet}
            className="rounded-[28px] border-2 px-6 py-5 [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-bold md:text-3xl"
            style={{ backgroundColor: config.colors.cardBg, borderColor: '#111111', color: config.colors.darkText }}
          >
            {bullet}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceBenefitsSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section className="px-6 py-20 md:px-10 lg:px-16">
    <div
      className="mx-auto flex max-w-[1380px] flex-col items-center rounded-[44px] border-4 px-8 py-12 text-center md:px-14"
      style={{ backgroundColor: config.colors.accent, borderColor: '#111111' }}
    >
      <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-5">
        {config.benefitHighlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-[24px] border-2 px-4 py-5 [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-bold"
            style={{ backgroundColor: '#ffffff', borderColor: '#111111', color: config.colors.darkText }}
          >
            {highlight}
          </div>
        ))}
      </div>
      <p
        className="mt-10 max-w-[760px] [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-semibold leading-[1.5] md:text-3xl"
        style={{ color: config.colors.darkText }}
      >
        {config.ctaText}
      </p>
      <button
        onClick={scrollToContact}
        className="mt-8 h-[58px] rounded-xl px-8 text-2xl text-white transition-all hover:opacity-90"
        style={{ backgroundColor: config.colors.buttonBg, boxShadow: `6px 6px 0 ${config.colors.buttonShadow}` }}
      >
        Contact Us
      </button>
    </div>
  </section>
);

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

export const ServiceCardsSection: React.FC<{ title: string; cards: ServiceCard[] }> = ({ title, cards }) => (
  <section className="w-full bg-[#ec5d9f] px-4 py-16 md:px-8">
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

export const ServiceProcessSection: React.FC<{ config: ServicePageConfig }> = ({ config }) => (
  <section className="px-6 pb-24 pt-20 md:px-10 lg:px-16">
    <div className="mx-auto max-w-[1380px]">
      <h2
        className="mb-12 text-center [font-family:'Black_Han_Sans',Helvetica] text-[clamp(34px,5vw,76px)] leading-[1.05]"
        style={{ color: config.colors.lightText, textShadow: `5px 5px 0 ${config.colors.buttonShadow}` }}
      >
        {config.processTitle}
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {config.processSteps.map((step) => (
          <div
            key={step.step}
            className="rounded-[32px] border-[3px] p-8"
            style={{ backgroundColor: config.colors.cardBg, borderColor: '#111111', boxShadow: `10px 10px 0 ${config.colors.cardShadow}` }}
          >
            <div className="[font-family:'Bricolage_Grotesque',Helvetica] text-sm font-extrabold uppercase tracking-[0.12em]" style={{ color: config.colors.buttonBg }}>
              {step.step}
            </div>
            <h3 className="mt-3 [font-family:'Bricolage_Grotesque',Helvetica] text-2xl font-extrabold md:text-4xl" style={{ color: config.colors.darkText }}>
              {step.title}
            </h3>
            <p className="mt-4 [font-family:'Bricolage_Grotesque',Helvetica] text-lg leading-relaxed md:text-2xl" style={{ color: config.colors.darkText }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
