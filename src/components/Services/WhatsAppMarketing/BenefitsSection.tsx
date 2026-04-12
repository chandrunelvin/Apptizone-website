import React from 'react';

const BenefitsSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "800px" }}>
      <img className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-363.svg" />
      <div className="absolute bg-[#eab624] pointer-events-none" style={{ bottom: 0, left: "50%", transform: "translateX(-50%)", width: "140%", height: "420px", borderRadius: "50%" }} />
      <div className="relative w-full flex flex-col items-center">
        <div className="hidden lg:block relative w-full" style={{ height: "620px" }}>
          <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[40px] text-center leading-tight pointer-events-none z-10" style={{ top: "30px", left: "50%", transform: "translateX(-38%) rotate(-2.56deg)", whiteSpace: "nowrap" }}>Faster customer communication</div>
          <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[40px] leading-tight pointer-events-none z-10" style={{ top: "200px", left: "5%", width: "320px", transform: "rotate(-2.79deg)" }}>Instant lead generation</div>
          <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[40px] text-center leading-tight pointer-events-none z-10" style={{ top: "160px", right: "5%", width: "320px", transform: "rotate(-5.11deg)" }}>Increased repeat sales</div>
          <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[40px] leading-tight pointer-events-none z-10" style={{ top: "400px", left: "3%", width: "380px", transform: "rotate(-17.07deg)" }}>Higher customer engagement</div>
          <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[40px] text-center leading-tight pointer-events-none z-10" style={{ top: "360px", right: "3%", width: "360px", transform: "rotate(10.51deg)" }}>Improved customer retention</div>
          <img className="absolute z-20" alt="Man" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/man.png" style={{ top: "40px", left: "50%", transform: "translateX(-50%)", height: "520px", width: "auto" }} />
        </div>
        <div className="lg:hidden flex flex-col items-center pt-10 px-6 pb-4 gap-3 w-full">
          {["Faster customer communication", "Instant lead generation", "Increased repeat sales", "Higher customer engagement", "Improved customer retention"].map((text, i) => (
            <div key={i} className="[-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-2xl text-center leading-tight">{text}</div>
          ))}
          <img alt="Man" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/man.png" className="w-[55%] max-w-[280px] h-auto mt-4" />
        </div>
        <div className="relative flex flex-col items-center px-6 pb-14 z-10 mt-4">
          <p className="[-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#201f51] text-xl text-center tracking-[0] leading-[1.4]" style={{ maxWidth: "640px" }}>
            Email gets ignored. Ads get skipped.<br />Reach Customers Instantly. Engage Better. Sell Faster.
          </p>
          <button onClick={scrollToContact} className="mt-6 w-[225px] h-[58px] bg-[#f0542e] shadow-[6px_6px_1px_#111210] rounded-xl [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-2xl tracking-[0] leading-normal whitespace-nowrap hover:opacity-90 active:translate-y-0.5 transition-all cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
