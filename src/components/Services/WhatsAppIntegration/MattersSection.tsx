import React from 'react';

const bulletPoints = [
  { text: "98% message open rate" },
  { text: "Direct communication with customers" },
  { text: "Instant engagement & faster response" },
  { text: "Higher conversion compared to email" },
  { text: "Perfect for promotions, updates & support" },
];

const MattersSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "788px" }}>
      <img className="absolute top-0 left-0 w-full h-full object-cover" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-360.svg" />
      <div className="relative w-full flex flex-col lg:flex-row items-start px-6 md:px-[100px] lg:px-[152px] pt-16 lg:pt-[217px] pb-[60px] gap-10 lg:gap-0">
        <div className="w-full lg:w-[513px] shrink-0 [text-shadow:-2px_2px_0px_#201f51] [-webkit-text-stroke:1px_#222222] [font-family:'Black_Han_Sans',Helvetica] font-normal text-transparent text-[clamp(36px,6vw,72px)] tracking-[0] leading-[normal]">
          <span className="text-[#66ba4f]">WhatsApp Marketing </span>
          <span className="text-white">Matters</span>
        </div>
        <div className="flex flex-col gap-[32px] lg:ml-[80px] lg:pt-[49px]">
          {bulletPoints.map((item, index) => (
            <div key={index} className="flex flex-row items-start gap-[17.5px]">
              <img className="mt-1 w-7 h-[27px] shrink-0" alt="Img" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/--2.svg" />
              <div className="[text-shadow:-1px_1px_0px_#49071e] [-webkit-text-stroke:0.5px_#4a081f] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[clamp(20px,2.5vw,30px)] tracking-[0] leading-[normal]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="absolute bottom-0 left-[-97px] w-[259px] h-[260px]" alt="Img" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/--16.svg" />
    </section>
  );
};

export default MattersSection;
