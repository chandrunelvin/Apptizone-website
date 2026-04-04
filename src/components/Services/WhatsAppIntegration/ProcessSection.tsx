import React from 'react';

const processSteps = [
  { number: "STEP 1", title: "BUSINESS & AUDIENCE ANALYSIS", description: "We analyze your business goals, audience & communication strategy." },
  { number: "STEP 2", title: "CAMPAIGN STRATEGY", description: "Create targeted messaging & broadcast campaigns." },
  { number: "STEP 3", title: "AUTOMATION SETUP", description: "Setup automation & lead capture workflows." },
  { number: "STEP 4", title: "CAMPAIGN EXECUTION & OPTIMIZATION", description: "Monitor performance and optimize messaging for better conversions." },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden min-h-[1160px] lg:min-h-[1280px]">
      <img className="absolute top-0 left-0 w-full h-full object-cover" alt="Rectangle" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/rectangle-540.svg" />

      <div className="relative z-10 mx-auto max-w-[1530px] px-6 md:px-16 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-0">
        <h2 className="text-[#413884] [font-family:'Black_Han_Sans',Helvetica] font-normal text-[clamp(50px,7.2vw,128px)] tracking-[0] leading-[1.03] text-left mb-14">
          OUR WHATSAPP MARKETING PROCESS
        </h2>
      </div>

      {/* Desktop steps */}
      <div className="hidden lg:block relative mx-auto max-w-[1530px]" style={{ height: '920px' }}>
        <div className="absolute top-[40px] left-[130px] w-[420px]">
          <div className="flex flex-col gap-2">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[52px] leading-[1.1]">STEP 1 – BUSINESS &amp; AUDIENCE ANALYSIS</h3>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[44px] leading-[1.2]">We analyze your business goals, audience &amp; communication strategy.</p>
          </div>
        </div>

        <div className="absolute top-[176px] left-[820px] w-[470px]">
          <div className="flex flex-col gap-2">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[52px] leading-[1.1]">STEP 2 – CAMPAIGN STRATEGY</h3>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[44px] leading-[1.2]">Create targeted messaging &amp; broadcast campaigns.</p>
          </div>
        </div>

        <div className="absolute top-[470px] left-[200px] w-[410px]">
          <div className="flex flex-col gap-2">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[52px] leading-[1.1]">STEP 3 – AUTOMATION SETUP</h3>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[44px] leading-[1.2]">Setup automation &amp; lead capture workflows.</p>
          </div>
        </div>

        <div className="absolute top-[615px] left-[745px] w-[620px]">
          <div className="flex flex-col gap-2">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[52px] leading-[1.1]">STEP 4 – CAMPAIGN EXECUTION &amp; OPTIMIZATION</h3>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[44px] leading-[1.2]">Monitor performance and optimize messaging for better conversions.</p>
          </div>
        </div>

        <img className="absolute top-[66px] left-[565px] w-[330px] h-[128px]" alt="Arrow Top" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-460.svg" />
        <img className="absolute top-[324px] left-[635px] w-[180px] h-[188px]" alt="Arrow Mid" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/70-1.svg" />
        <img className="absolute top-[570px] left-[602px] w-[180px] h-[124px]" alt="Arrow Bottom" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-562.png" />
      </div>

      {/* Mobile steps */}
      <div className="lg:hidden relative z-10 flex flex-col gap-8 px-6 pb-16">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col gap-2 bg-white/10 rounded-2xl p-6">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-2xl leading-tight">{step.number} – {step.title}</h3>
            <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-xl leading-normal">{step.description}</p>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <img className="w-[100px] h-auto" alt="Element" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/70-1.svg" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
