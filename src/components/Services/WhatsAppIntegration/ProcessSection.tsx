import React from 'react';

const processSteps = [
  { number: "STEP 1", title: "BUSINESS & AUDIENCE ANALYSIS", description: "We analyze your business goals, audience & communication strategy." },
  { number: "STEP 2", title: "CAMPAIGN STRATEGY", description: "Create targeted messaging & broadcast campaigns." },
  { number: "STEP 3", title: "AUTOMATION SETUP", description: "Setup automation & lead capture workflows." },
  { number: "STEP 4", title: "CAMPAIGN EXECUTION & OPTIMIZATION", description: "Monitor performance and optimize messaging for better conversions." },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden" style={{ minHeight: "1291px" }}>
      <img className="absolute top-0 left-0 w-full h-full object-fill" alt="Rectangle" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/rectangle-540.svg" />
      <img className="hidden lg:block absolute top-[391px] left-[607px] w-[291px] h-[115px]" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-460.svg" />
      <div className="relative z-10 px-6 md:px-16 pt-16 md:pt-24 pb-0">
        <h2 className="text-[#413884] [text-shadow:6px_6px_1px_#201f51] [font-family:'Black_Han_Sans',Helvetica] font-normal text-[clamp(40px,7vw,110px)] tracking-[0] leading-[1.1] text-center mb-12">
          OUR WHATSAPP MARKETING PROCESS
        </h2>
      </div>
      {/* Desktop steps */}
      <div className="hidden lg:block relative" style={{ height: "1050px" }}>
        <div className="absolute top-[407px] left-[130px] w-[494px] flex">
          <div className="w-[498px] flex flex-col gap-[5px]">
            <h3 className="w-[494px] [font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[40px] tracking-[0] leading-[normal]">STEP 1 – BUSINESS &amp; AUDIENCE ANALYSIS</h3>
            <p className="w-[434px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[32px] tracking-[0] leading-[normal]">We analyze your business goals, audience &amp; communication strategy.</p>
          </div>
        </div>
        <div className="absolute top-[508px] left-[890px] w-[494px] flex">
          <div className="w-[498px] flex flex-col gap-[5px]">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[40px] tracking-[0] leading-[normal]">STEP 2 – CAMPAIGN STRATEGY</h3>
            <p className="w-[439px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[32px] tracking-[0] leading-[normal]">Create targeted messaging &amp; broadcast campaigns.</p>
          </div>
        </div>
        <div className="absolute top-[786px] left-[198px] w-[439px] flex">
          <div className="w-[443px] flex flex-col gap-[9px]">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[40px] tracking-[0] leading-[normal]">STEP 3 – AUTOMATION SETUP</h3>
            <p className="w-[438px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[32px] tracking-[0] leading-[normal]">Setup automation &amp; lead capture workflows.</p>
          </div>
        </div>
        <div className="absolute top-[967px] left-[806px] w-[565px] flex">
          <div className="w-[569px] flex flex-col gap-[5px]">
            <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-extrabold text-[#413884] text-[40px] tracking-[0] leading-[normal]">STEP 4 – CAMPAIGN EXECUTION &amp; OPTIMIZATION</h3>
            <p className="w-[545px] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#3f2f03] text-[32px] tracking-[0] leading-[normal]">Monitor performance and optimize messaging for better conversions.</p>
          </div>
        </div>
        <img className="absolute top-[438px] left-[864px] w-[41px] h-[42px]" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-461.svg" />
        <img className="absolute top-[641px] left-[671px] w-[164px] h-[177px]" alt="Element" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/70-1.svg" />
        <img className="absolute top-[947px] left-[636px] w-[153px] h-[98px]" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-562.png" />
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
