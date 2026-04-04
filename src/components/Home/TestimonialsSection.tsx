import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 'mathew-white',
    name: 'Mathew',
    initial: 'M',
    rating: '4.0',
    text: 'The team is creative, responsive, and data-driven. They helped us rebrand and scale our business online. We appreciate their innovative ideas and consistent support.',
    cardBg: '#ffffff',
    cardText: '#1f1f1f',
    cardBorder: '#5f5b63',
    avatarBg: '#ff5b2f',
    avatarText: '#ffffff',
    ratingText: '#2d2d2d',
    rotate: '-3deg',
    top: '120px',
  },
  {
    id: 'mathew-purple',
    name: 'Mathew',
    initial: 'M',
    rating: '4.0',
    text: 'The team is creative, responsive, and data-driven. They helped us rebrand and scale our business online. We appreciate their innovative ideas and consistent support.',
    cardBg: '#7d72f4',
    cardText: '#f7f5ff',
    cardBorder: '#5d53bf',
    avatarBg: '#ff5b2f',
    avatarText: '#ffffff',
    ratingText: '#f7f5ff',
    rotate: '1deg',
    top: '220px',
  },
  {
    id: 'mathew-orange',
    name: 'Mathew',
    initial: 'M',
    rating: '4.0',
    text: 'The team is creative, responsive, and data-driven. They helped us rebrand and scale our business online. We appreciate their innovative ideas and consistent support.',
    cardBg: '#ff5b2f',
    cardText: '#fff7f2',
    cardBorder: '#8b3b22',
    avatarBg: '#ffffff',
    avatarText: '#ff5b2f',
    ratingText: '#fff7f2',
    rotate: '-3deg',
    top: '320px',
  },
];

const ArrowLoop = () => (
  <svg viewBox="0 0 160 140" fill="none" className="h-[78px] w-[86px] text-[#4f4298] md:h-[96px] md:w-[106px]">
    <path
      d="M28 22C62 8 111 22 118 57C124 88 99 112 66 111"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M66 111L87 126"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M66 111L79 87"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const next = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const cardMotion = testimonials.map((_, index) => {
    const revealStart = index * 0.18;
    const revealEnd = revealStart + 0.34;
    const localProgress = Math.min(Math.max((progress - revealStart) / (revealEnd - revealStart), 0), 1);

    const startY = index * 220;
    const endY = index * 54;
    const translateY = startY - (startY - endY) * localProgress;
    const scale = 0.94 + localProgress * 0.06;
    const opacity = 1;

    return { translateY, scale, opacity };
  });

  return (
    <section ref={sectionRef} className="relative min-h-[240vh] overflow-hidden bg-[#f3df5e] px-6 py-14 md:px-[72px] md:py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[220px] opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_0_0,transparent_0,transparent_10px,#d7c856_10.5px,transparent_11px)] bg-[length:44px_44px]" />
      </div>

      <div className="mx-auto max-w-[1530px]">
        <div className="relative z-10 max-w-[960px]">
          <h2 className="[font-family:'Black_Han_Sans',Helvetica] text-[clamp(42px,7vw,112px)] leading-[0.9] text-[#4f4298]">
            HERE WHAT OUR
            <br />
            CLIENTS SAYS
          </h2>
          <div className="ml-[60%] mt-1 md:ml-[66%]">
            <ArrowLoop />
          </div>
        </div>

        <div className="relative mt-12 md:mt-6">
          <div className="sticky top-[74px] mx-auto h-[760px] max-w-[920px] md:h-[980px]">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className="absolute left-1/2 w-[92%] max-w-[860px] rounded-[18px] border-2 px-5 py-5 shadow-[0_10px_28px_rgba(30,30,30,0.16)] transition-transform duration-200 md:px-8 md:py-7"
                style={{
                  top: 0,
                  left: '50%',
                  backgroundColor: testimonial.cardBg,
                  color: testimonial.cardText,
                  borderColor: testimonial.cardBorder,
                  zIndex: index + 1 + (progress > index * 0.2 ? 10 : 0),
                  transform: `translateX(-50%) translateY(${cardMotion[index].translateY}px) rotate(${testimonial.rotate}) scale(${cardMotion[index].scale})`,
                  opacity: cardMotion[index].opacity,
                }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div
                    className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full text-[24px] md:h-[86px] md:w-[86px] md:text-[42px]"
                    style={{
                      backgroundColor: testimonial.avatarBg,
                      color: testimonial.avatarText,
                      fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {testimonial.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="[font-family:'Bricolage_Grotesque',Helvetica] text-[22px] font-medium leading-none md:text-[46px]"
                        style={{ color: testimonial.cardText }}
                      >
                        {testimonial.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-[14px] md:text-[28px]">
                        <span
                          className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold"
                          style={{ color: testimonial.ratingText }}
                        >
                          {testimonial.rating}
                        </span>
                        <span className="text-[#ffcc25]">★</span>
                      </div>
                    </div>

                    <p
                      className="[font-family:'Bricolage_Grotesque',Helvetica] mt-3 max-w-[560px] text-[13px] font-normal leading-[1.35] md:mt-4 md:max-w-[620px] md:text-[24px]"
                      style={{ color: testimonial.cardText }}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
