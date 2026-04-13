import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,rgba(49,38,110,1)_0%,rgba(32,31,81,1)_100%)] overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-[1530px] flex-col px-6 pb-0 pt-28 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-16 lg:pt-0">
        {/* Left text block */}
        <div className="flex max-w-[750px] flex-col pb-10 lg:pb-16 lg:pt-[162px] xl:max-w-[800px]">
          <h1 className="[text-shadow:6px_6px_1px_#201f51] font-['Black_Han_Sans',Helvetica] font-normal text-[#ecd65d] text-[clamp(52px,8vw,120px)] leading-[1.01] tracking-[0] uppercase sm:whitespace-nowrap">
            ABOUT US
          </h1>
          <p className="mt-6 max-w-[783px] font-semibold text-[#faf7e9] text-[clamp(18px,2vw,30px)] leading-[1.27] font-['Bricolage_Grotesque',Helvetica] tracking-[0]">
            Apptizone Marketing Agency, established in 2025, is a results-driven
            digital marketing company focused on helping businesses grow online. We
            combine creativity, strategy, and data to deliver measurable results
            through SEO, social media, paid ads, and website solutions.
          </p>
          <p className="mt-8 max-w-[692px] font-['Bricolage_Grotesque',Helvetica] font-semibold text-[#faf7e9] text-[clamp(18px,2vw,30px)] tracking-[0] leading-[1.27]">
            Turning digital potential into real business growth.
          </p>
        </div>

        {/* Right illustration — positioned to bleed out of section */}
        <div className="relative mx-auto w-full max-w-[520px] flex-shrink-0 self-end lg:mx-0 lg:w-[clamp(440px,48%,779px)]">
          <img
            className="w-full h-auto"
            alt="Hero illustration"
            src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/group-166.png"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
