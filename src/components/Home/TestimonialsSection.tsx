import { useState } from 'react';

const testimonials = [
  {
    name: 'Mathew',
    initial: 'M',
    rating: '4.0',
    text: 'The team is creative, responsive, and data-driven. They helped us rebrand and scale our business online. We appreciate their innovative ideas and consistent support.',
    bg: 'bg-white',
    avatarBg: 'bg-[#f0542e]',
    avatarText: 'text-white',
    nameColor: 'text-black',
    textColor: 'text-black',
    ratingColor: 'text-black',
    starColor: 'text-[#f0542e]',
  },
  {
    name: 'Sarah',
    initial: 'S',
    rating: '5.0',
    text: 'Apptizone transformed our digital presence completely. Their SEO strategies helped us move from page 5 to page 1 in just 3 months. Absolutely recommend!',
    bg: 'bg-[#807cff]',
    avatarBg: 'bg-[#f0542e]',
    avatarText: 'text-white',
    nameColor: 'text-white',
    textColor: 'text-white',
    ratingColor: 'text-white',
    starColor: 'text-[#ecd65d]',
  },
  {
    name: 'Rajan',
    initial: 'R',
    rating: '4.5',
    text: 'Outstanding work on our WhatsApp marketing campaigns. The engagement rates went through the roof and our customer retention improved significantly.',
    bg: 'bg-[#f0542e]',
    avatarBg: 'bg-white',
    avatarText: 'text-[#f0542e]',
    nameColor: 'text-white',
    textColor: 'text-white',
    ratingColor: 'text-white',
    starColor: 'text-[#ecd65d]',
  },
];

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const prev = () => setCurrent((index) => (index - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((index) => (index + 1) % testimonials.length);

  return (
    <section className="w-full bg-[#ecd65d] px-6 py-[60px] md:px-[67px] md:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="[font-family:'Black_Han_Sans',Helvetica] mb-12 text-[clamp(36px,7.5vw,120px)] font-normal leading-tight tracking-[0] text-[#4f4298] [text-shadow:6px_6px_1px_#201f51] md:mb-16">
          HERE WHAT OUR
          <br className="hidden md:block" /> CLIENTS SAYS
        </h2>

        <div className={`w-full max-w-[918px] rounded-[30px] border-2 border-solid border-black p-7 transition-all duration-300 md:p-10 ${testimonial.bg}`}>
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div
              className={`flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center rounded-full md:h-[152px] md:w-[152px] ${testimonial.avatarBg}`}
            >
              <span className={`${testimonial.avatarText} [font-family:'Bricolage_Grotesque',Helvetica] text-[48px] font-medium md:text-[80px]`}>
                {testimonial.initial}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`${testimonial.nameColor} [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(24px,3.5vw,50px)] font-medium`}>
                  {testimonial.name}
                </span>
                <div className="flex items-center gap-1">
                  <span className={`${testimonial.starColor} text-xl`}>★</span>
                  <span className={`${testimonial.ratingColor} [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-medium md:text-2xl`}>
                    {testimonial.rating}
                  </span>
                </div>
              </div>
              <p className={`${testimonial.textColor} [font-family:'Bricolage_Grotesque',Helvetica] text-[clamp(15px,1.8vw,26px)] font-normal leading-[1.5]`}>
                {testimonial.text}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4f4298] text-white shadow-[3px_3px_0px_#201f51] transition-colors hover:bg-[#413884]"
            aria-label="Previous testimonial"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${index === current ? 'scale-125 bg-[#4f4298]' : 'bg-[#4f4298]/30'}`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4f4298] text-white shadow-[3px_3px_0px_#201f51] transition-colors hover:bg-[#413884]"
            aria-label="Next testimonial"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
