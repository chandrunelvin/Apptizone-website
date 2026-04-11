import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  },
];

const ArrowLoop = () => (
  <svg viewBox="0 0 160 140" fill="none" className="h-[78px] w-[86px] text-[#4f4298] md:h-[96px] md:w-[106px]">
    <path d="M28 22C62 8 111 22 118 57C124 88 99 112 66 111" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    <path d="M66 111L87 126" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    <path d="M66 111L79 87" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (!section || !pin || cards.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const startOffsets = [0, 210, 420];

        gsap.set(cards, {
          xPercent: -50,
          y: (index: number) => startOffsets[index] ?? index * 210,
          scale: (index: number) => (index === 0 ? 1 : 0.98),
          rotation: (index: number) => Number.parseFloat(testimonials[index]?.rotate ?? '0'),
          transformOrigin: 'center top',
        });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=2200',
            scrub: 0.9,
            pin: pin,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cards[1], { y: 0, scale: 1, duration: 1 }, 0.35);
        tl.set(cards[1], { zIndex: 20 }, 0.8);
        tl.to(cards[2], { y: 0, scale: 1, duration: 1 }, 1.3);
        tl.set(cards[2], { zIndex: 30 }, 1.8);
      }, section);

      return () => ctx.revert();
    });

    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        const startOffsets = [0, 170, 340];

        gsap.set(cards, {
          xPercent: -50,
          y: (index: number) => startOffsets[index] ?? index * 170,
          scale: 1,
          rotation: (index: number) => Number.parseFloat(testimonials[index]?.rotate ?? '0'),
          transformOrigin: 'center top',
        });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=1700',
            scrub: 0.9,
            pin: pin,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cards[1], { y: 0, duration: 1 }, 0.35);
        tl.set(cards[1], { zIndex: 20 }, 0.8);
        tl.to(cards[2], { y: 0, duration: 1 }, 1.3);
        tl.set(cards[2], { zIndex: 30 }, 1.8);
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] overflow-hidden bg-[#f3df5e] px-6 py-14 md:h-[340vh] md:px-[72px] md:py-20">
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

        <div ref={pinRef} className="relative mt-12 h-[74vh] md:mt-6 md:h-[84vh]">
          <div className="relative mx-auto h-full max-w-[920px]">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="absolute left-1/2 top-0 w-[92%] max-w-[860px] rounded-[18px] border-2 px-5 py-5 shadow-[0_10px_28px_rgba(30,30,30,0.16)] md:px-8 md:py-7"
                style={{
                  left: '50%',
                  backgroundColor: testimonial.cardBg,
                  color: testimonial.cardText,
                  borderColor: testimonial.cardBorder,
                  zIndex: index + 1,
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
