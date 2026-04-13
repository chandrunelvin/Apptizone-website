import React from 'react';

const whyChooseCards = [
  {
    rotate: "-rotate-[6.52deg]",
    title: "RESULTS-DRIVEN STRATEGIES",
    body: "We focus on measurable growth — more traffic, quality leads, and better ROI.",
  },
  {
    rotate: "rotate-[1.30deg]",
    title: "TRANSPARENT COMMUNICATION",
    body: "Clear reporting, honest insights, and regular updates to keep you informed at every step.",
  },
  {
    rotate: "-rotate-[1.30deg]",
    title: "CUSTOMIZED MARKETING PLANS",
    body: "Every business is unique, so we create tailored strategies based on your goals and target audience.",
  },
  {
    rotate: "-rotate-[5.51deg]",
    title: "END-TO-END DIGITAL SOLUTIONS",
    body: "From SEO and social media to paid ads and website design — everything under one roof.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#ecd65d] py-16 lg:py-20">
      {/* Wave background */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
        alt=""
        src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/vector-351.svg"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1530px] px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="[text-shadow:6px_6px_1px_#201f51] mb-12 text-center font-['Black_Han_Sans',Helvetica] font-normal text-[#4f4298] text-[clamp(42px,7vw,120px)] tracking-[0] leading-[1.01] uppercase sm:whitespace-nowrap md:mb-16">
          WHY CHOOSE US ?
        </h2>

        {/* Cards + center illustration */}
        <div className="relative flex min-h-[556px] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10 xl:gap-16">
          {/* Left column */}
          <div className="flex max-w-[420px] flex-1 flex-col gap-6 md:gap-8 xl:gap-14">
            {whyChooseCards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className={`relative w-full max-w-[405px] rounded-[30px] bg-white p-6 shadow-md md:p-8 ${card.rotate}`}
              >
                <div className="absolute inset-3.5 rounded-[19px] border-2 border-dashed border-[#adb176] pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="font-['Black_Han_Sans',Helvetica] font-normal text-[#adb176] text-xl tracking-[0] leading-[1.45]">
                    {card.title}
                  </div>
                  <div className="font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#343434] text-base tracking-[0] leading-snug md:text-lg">
                    {card.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center illustration */}
          <div className="w-full max-w-[340px] flex-shrink-0 md:max-w-[420px] lg:w-[clamp(320px,30%,556px)]">
            <img
              className="w-full h-auto"
              alt="Why choose us"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/38477199-8628789-1.svg"
            />
          </div>

          {/* Right column */}
          <div className="flex max-w-[420px] flex-1 flex-col gap-6 md:gap-8 xl:gap-14">
            {whyChooseCards.slice(2, 4).map((card, i) => (
              <div
                key={i}
                className={`relative w-full max-w-[405px] rounded-[30px] bg-white p-6 shadow-md md:p-8 ${card.rotate}`}
              >
                <div className="absolute inset-3.5 rounded-[19px] border-2 border-dashed border-[#adb176] pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="font-['Black_Han_Sans',Helvetica] font-normal text-[#adb176] text-xl tracking-[0] leading-[1.45]">
                    {card.title}
                  </div>
                  <div className="font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#343434] text-base tracking-[0] leading-snug md:text-lg">
                    {card.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
