import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ecd65d] py-20">
      <div className="w-full max-w-[1530px] mx-auto px-16 flex flex-row-reverse items-start gap-16 xl:gap-24">
        <div className="flex-shrink-0 text-right">
          <h2 className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(72px,8vw,120px)] tracking-[0] leading-[1.01] uppercase">
            OUR<br />VISION
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-end pt-4">
          <p className="max-w-[783px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] text-right tracking-[0] leading-[1.27]">
            To become a trusted and innovative digital marketing partner for brands
            across industries, known for creativity, transparency, and
            performance-driven results that create long-term value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
