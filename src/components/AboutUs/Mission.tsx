import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ecd65d] py-20">
      <div className="w-full max-w-[1530px] mx-auto px-16 flex flex-row items-start gap-16 xl:gap-24">
        <div className="flex-shrink-0">
          <h2 className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(72px,8vw,120px)] tracking-[0] leading-[1.01] uppercase">
            OUR<br />MISSION
          </h2>
        </div>
        <div className="flex-1 flex items-center pt-4">
          <p className="max-w-[783px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27]">
            To help businesses grow through strategic, data-driven digital marketing
            solutions that generate measurable results. We aim to build strong
            online brands by turning ideas into impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
