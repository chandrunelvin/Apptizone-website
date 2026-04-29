import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import TextReveal from '../ui/TextReveal';

const Mission: React.FC = () => {
  return (
    <section className="relative -mt-[2px] w-full overflow-hidden px-6 pb-14 pt-0 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
      <img
        className="pointer-events-none absolute left-1/2 top-0 z-0 w-[max(100%,1440px)] -translate-x-1/2 select-none"
        alt=""
        src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/vector-349.svg"
      />

      <div className="absolute inset-x-0 bottom-0 top-[110px] md:top-[150px] lg:top-[210px]" />

      <div className="relative z-10 mx-auto min-h-[460px] w-full max-w-[1530px] pt-[120px] md:min-h-[560px] md:pt-[155px] lg:min-h-[760px] lg:pt-[210px]">
        <div className="grid gap-4 lg:absolute lg:left-0 lg:top-[8px] lg:max-w-[38%]">
          <TextReveal
            as="h2"
            text="OUR MISSION"
            className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(52px,8vw,120px)] tracking-[0] leading-[0.96] uppercase"
            delay={40}
          />
          <ScrollReveal delay={120} distance={24} blur={6}>
            <p className="max-w-[720px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27]">
              To help businesses grow through strategic, data-driven digital marketing
              solutions that generate measurable results. We aim to build strong
              online brands by turning ideas into impactful digital experiences.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-24 grid gap-4 md:ml-auto md:max-w-[58%] lg:absolute lg:bottom-[54px] lg:right-0 lg:mt-0 lg:max-w-[32%] lg:justify-items-end">
          <TextReveal
            as="h2"
            text="OUR VISION"
            className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#f0542e] text-[clamp(52px,8vw,120px)] tracking-[0] leading-[0.96] uppercase lg:text-right"
            delay={180}
          />
          <ScrollReveal delay={260} distance={24} blur={6}>
            <p className="max-w-[620px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#1a1b18] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27] lg:text-center">
              To become a trusted and innovative digital marketing partner for
              brands across industries, known for creativity, transparency, and
              performance-driven results that create long-term value.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[70px] w-full bg-[radial-gradient(110px_36px_at_8%_0,#f7e7d0_98%,transparent_100%),radial-gradient(120px_34px_at_26%_0,#f7e7d0_98%,transparent_100%),radial-gradient(112px_38px_at_44%_0,#f7e7d0_98_98%,transparent_100%),radial-gradient(118px_36px_at_62%_0,#f7e7d0_98%,transparent_100%),radial-gradient(120px_34px_at_80%_0,#f7e7d0_98%,transparent_100%),radial-gradient(108px_34px_at_96%_0,#f7e7d0_98%,transparent_100%)] bg-repeat-x" />
    </section>
  );
};

export default Mission;
