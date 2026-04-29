import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import TextReveal from '../ui/TextReveal';

const categories = ['General', 'Marketing', 'Design', 'Management'];

const faqData: Record<string, { question: string; answer: string }[]> = {
  General: [
    {
      question: 'What is Digital Marketing?',
      answer:
        'Digital marketing is the promotion of products or services using online platforms such as search engines, social media, websites, email, and paid advertisements to reach and engage customers.',
    },
    {
      question: 'Why is digital marketing important for my business?',
      answer:
        'Digital marketing helps businesses reach a wider audience, generate leads, and increase sales through cost-effective online channels.',
    },
    {
      question: 'Do I need a website for digital marketing?',
      answer:
        'While a website is highly recommended, digital marketing can also be done through social media platforms and other online channels.',
    },
  ],
  Marketing: [
    {
      question: 'What are the main digital marketing channels?',
      answer:
        'The main channels include SEO, SEM, social media marketing, email marketing, content marketing, and WhatsApp marketing.',
    },
    {
      question: 'How long does it take to see results from digital marketing?',
      answer:
        'SEO typically takes 3-6 months, while paid campaigns can show results almost immediately. Consistent effort yields compounding results over time.',
    },
    {
      question: 'What is the ROI of digital marketing?',
      answer:
        'ROI varies by channel and industry, but digital marketing generally offers higher ROI than traditional marketing due to precise targeting and measurable results.',
    },
  ],
  Design: [
    {
      question: 'What makes a good website design?',
      answer:
        'A good website design is visually appealing, mobile-responsive, fast-loading, easy to navigate, and optimized for conversions.',
    },
    {
      question: 'How important is UI/UX in digital marketing?',
      answer:
        'UI/UX is crucial. Good design reduces bounce rates, increases engagement, and directly impacts conversion rates and customer satisfaction.',
    },
    {
      question: 'Do you offer app design services?',
      answer:
        'Yes, we offer comprehensive UI/UX design for both web and mobile applications, ensuring seamless user experiences across all devices.',
    },
  ],
  Management: [
    {
      question: 'Do you manage social media accounts?',
      answer:
        'Yes, we provide complete social media management including content creation, scheduling, community management, and performance reporting.',
    },
    {
      question: 'How do you measure campaign success?',
      answer:
        'We track KPIs such as reach, engagement, conversions, cost-per-click, return on ad spend, and overall revenue growth.',
    },
    {
      question: 'Can you handle multiple platforms simultaneously?',
      answer:
        'Absolutely. We manage campaigns across Instagram, Facebook, YouTube, LinkedIn, Google, and WhatsApp simultaneously with unified reporting.',
    },
  ],
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-6 w-6 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openItem, setOpenItem] = useState('item-0');

  const currentFaqs = faqData[activeCategory] || [];

  return (
    <section className="w-full bg-[#413884] px-6 py-[60px] md:px-[108px] md:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <TextReveal
          as="h2"
          text="FAQ'S"
          className="[font-family:'Black_Han_Sans',Helvetica] mb-8 text-[clamp(60px,9vw,140px)] font-normal leading-tight tracking-[0] text-[#ecd65d] [text-shadow:6px_6px_1px_#201f51] md:mb-12"
          delay={40}
        />

        <div className="mb-8 flex flex-wrap gap-3 md:mb-14 md:gap-4">
          {categories.map((category, index) => (
            <ScrollReveal key={category} delay={60 + index * 45} distance={18} blur={5} scale={0.98}>
              <button
                onClick={() => {
                  setActiveCategory(category);
                  setOpenItem('item-0');
                }}
                className={`h-auto rounded-[70px] border-0 px-5 py-3 [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(16px,2.5vw,36px)] font-normal leading-normal tracking-[0] shadow-[6px_6px_1px_#02012e] transition-all duration-300 hover:-translate-y-1 md:px-[45px] md:py-[15px] ${
                  activeCategory === category
                    ? 'bg-[#f0542e] text-white'
                    : 'bg-[#e9e6f8] text-black hover:bg-[#d8d4f5]'
                }`}
              >
                {category}
              </button>
            </ScrollReveal>
          ))}
        </div>

        <div className="w-full">
          {currentFaqs.map((faq, index) => {
            const value = `item-${index}`;
            const isOpen = openItem === value;

            return (
              <ScrollReveal key={value} className="border-b-[5px] border-b-white/30 py-3 md:py-4" delay={80 + index * 60} distance={24} blur={6}>
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? '' : value)}
                  className="flex w-full items-start justify-between gap-4 py-2 text-left transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="[font-family:'Black_Han_Sans',Helvetica] pr-2 text-[clamp(18px,2.5vw,38px)] font-normal leading-tight tracking-[0] text-white">
                    {faq.question}
                  </span>
                  <span className="pt-1 text-white">
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'}`}>
                  <div className="overflow-hidden">
                    <div className="[font-family:'Bricolage_Grotesque',Helvetica] pt-3 pb-2 text-[clamp(14px,1.6vw,26px)] font-normal leading-normal tracking-[0] text-[#e2e2e2]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
