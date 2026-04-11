import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#ecd65d] px-6 py-14 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto flex min-h-[520px] w-full max-w-[1530px] flex-col justify-between gap-16 lg:min-h-[680px]">
        <div className="grid gap-5 lg:max-w-[52%]">
          <h2 className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(52px,8vw,120px)] tracking-[0] leading-[0.96] uppercase">
            OUR
            <br />
            MISSION
          </h2>
          <p className="max-w-[720px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27]">
            To help businesses grow through strategic, data-driven digital marketing
            solutions that generate measurable results. We aim to build strong
            online brands by turning ideas into impactful digital experiences.
          </p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <div className="grid gap-5 lg:max-w-[42%] lg:justify-items-end">
            <h2 className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(52px,8vw,120px)] tracking-[0] leading-[0.96] uppercase lg:text-right">
              OUR
              <br />
              VISION
            </h2>
            <p className="max-w-[620px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27] lg:text-center">
              To become a trusted and innovative digital marketing partner for
              brands across industries, known for creativity, transparency, and
              performance-driven results that create long-term value.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[70px] w-full bg-[radial-gradient(110px_36px_at_8%_0,#f7e7d0_98%,transparent_100%),radial-gradient(120px_34px_at_26%_0,#f7e7d0_98%,transparent_100%),radial-gradient(112px_38px_at_44%_0,#f7e7d0_98_98%,transparent_100%),radial-gradient(118px_36px_at_62%_0,#f7e7d0_98%,transparent_100%),radial-gradient(120px_34px_at_80%_0,#f7e7d0_98%,transparent_100%),radial-gradient(108px_34px_at_96%_0,#f7e7d0_98%,transparent_100%)] bg-repeat-x" />
    </section>
  );
};

export default Mission;
