import React, { useState } from 'react';

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+971", name: "UAE" },
];

const services = [
  "WhatsApp Marketing",
  "SEO",
  "Social Media Management",
  "Search Engine Marketing",
  "Web & App Design",
  "WhatsApp Integration",
];

const HeroSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email required";
    if (!mobile.trim() || !/^\d{7,15}$/.test(mobile.replace(/\s/g, ""))) errs.mobile = "Valid mobile number required";
    if (!selectedService) errs.service = "Please select a service";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div id="about" className="relative w-full overflow-hidden" style={{ minHeight: "820px" }}>
      {/* Background images for hero section */}
      <img className="absolute top-0 left-0 w-full h-[1085px] pointer-events-none object-cover opacity-50 lg:opacity-100" alt="Social media" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/social-media-marketing.svg" />
      
      {/* Desktop main hero image */}
      <img className="hidden lg:block absolute top-[156px] left-[93px] w-[709px] h-[276px] pointer-events-none z-10" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-563.png" />

      {/* Floating benefit texts — desktop only */}
      <div className="hidden lg:block pointer-events-none relative z-10 h-full">
        <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[50px] text-center tracking-[0] leading-[normal]" style={{ top: "160px", right: "50px", width: "31%", transform: "rotate(10.51deg)" }}>
          Improved customer retention
        </div>
        <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[50px] text-center tracking-[0] leading-[normal]" style={{ top: "120px", right: "80px", width: "26%", transform: "rotate(-5.11deg)" }}>
          Increased repeat sales
        </div>
        <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[50px] text-center tracking-[0] leading-[normal]" style={{ top: "72px", left: "50%", transform: "translateX(-40%) rotate(-2.56deg)", width: "561px" }}>
          Faster customer communication
        </div>
        <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[50px] tracking-[0] leading-[normal]" style={{ top: "500px", left: "54px", width: "413px", transform: "rotate(-17.07deg)" }}>
          Higher customer engagement
        </div>
        <div className="absolute [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#edb62b] text-[50px] tracking-[0] leading-[normal]" style={{ top: "280px", left: "110px", width: "413px", transform: "rotate(-2.79deg)" }}>
          Instant lead generation
        </div>
      </div>

      <div className="relative z-20 w-full flex flex-col lg:flex-row items-start px-6 md:px-16 pt-32 lg:pt-40 pb-8 gap-8">
        <div className="hidden lg:block lg:w-[60%] h-[500px]" />
        
        {/* Contact Form */}
        <div className="w-full lg:w-[497px] flex justify-center lg:justify-end">
          {submitted ? (
            <div id="contact-form" className="w-full max-w-[497px] flex flex-col items-center justify-center bg-[#eeeefb] rounded-[50px] overflow-hidden border-4 border-solid border-black py-[60px] px-8 text-center gap-6 shadow-[8px_8px_0px_#000]">
              <div className="text-6xl">✅</div>
              <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[#222222] text-3xl">Thank you, {name}!</h2>
              <p className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#444] text-lg">We've received your request and will be in touch shortly.</p>
              <button
                onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMobile(""); setSelectedService(""); }}
                className="bg-[#f0542e] hover:bg-[#f0542e]/90 rounded-[10px] shadow-[4px_4px_0px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-xl px-8 h-[51px]"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} noValidate className="w-full max-w-[497px] flex flex-col bg-[#eeeefb] rounded-[50px] overflow-hidden border-4 border-solid border-black py-[42px] shadow-[8px_8px_0px_#000]">
              <h2 className="self-center [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[#222222] text-3xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap mb-[19px] text-center">
                LETS WORK TOGETHER
              </h2>

              {/* Name */}
              <div className="mx-[53px] flex flex-col gap-1 mb-6">
                <label className="[font-family:'Bricolage_Grotesque',Helvetica] font-light text-[#222222] text-lg">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className={`w-full h-[51px] bg-white rounded-[10px] border border-solid [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] ${errors.name ? "border-red-500" : "border-[#bfbfbf]"}`} placeholder="Full Name" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="mx-[53px] flex flex-col gap-1 mb-6">
                <label className="[font-family:'Bricolage_Grotesque',Helvetica] font-light text-[#222222] text-lg">Mail Id</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full h-[51px] bg-white rounded-[10px] border border-solid [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] ${errors.email ? "border-red-500" : "border-[#bfbfbf]"}`} placeholder="you@example.com" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              {/* Country Code */}
              <div className="mx-[53px] flex flex-col gap-1 mb-6 relative">
                <label className="[font-family:'Bricolage_Grotesque',Helvetica] font-light text-[#222222] text-lg">Country Code</label>
                <button type="button" onClick={() => { setCountryOpen((v) => !v); setServiceOpen(false); }} className="relative w-full h-[51px] bg-white rounded-[10px] border border-solid border-[#bfbfbf] flex items-center cursor-pointer">
                  <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] whitespace-nowrap">{selectedCountry.code}</span>
                  <div className="w-px h-full bg-[#bfbfbf]" />
                  <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] flex-1 text-left whitespace-nowrap">{selectedCountry.name}</span>
                  <img className="w-[30px] h-[30px] mr-[10px]" alt="down" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/lsicon-down-filled.svg" />
                </button>
                {countryOpen && (
                  <div className="absolute top-full left-0 w-full bg-white border border-[#bfbfbf] rounded-[10px] z-[60] shadow-lg mt-1 overflow-hidden">
                    {countryCodes.map((c) => (
                      <button key={c.code} type="button" onClick={() => { setSelectedCountry(c); setCountryOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#eeeefb] text-left [font-family:'Bricolage_Grotesque',Helvetica] text-[#333] text-lg">
                        <span className="font-bold">{c.code}</span>
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="mx-[53px] flex flex-col gap-1 mb-6">
                <label className="[font-family:'Bricolage_Grotesque',Helvetica] font-light text-[#222222] text-lg">Mobile Number</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} className={`w-full h-[51px] bg-white rounded-[10px] border border-solid [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] ${errors.mobile ? "border-red-500" : "border-[#bfbfbf]"}`} placeholder={selectedCountry.code} />
                {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
              </div>

              {/* Service */}
              <div className="mx-[53px] flex flex-col gap-1 mb-[45px] relative">
                <label className="[font-family:'Bricolage_Grotesque',Helvetica] font-light text-[#222222] text-lg">Service</label>
                <button type="button" onClick={() => { setServiceOpen((v) => !v); setCountryOpen(false); }} className={`relative w-full h-[51px] bg-white rounded-[10px] border border-solid flex items-center cursor-pointer ${errors.service ? "border-red-500" : "border-[#bfbfbf]"}`}>
                  <span className={`[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-xl px-[17px] flex-1 text-left whitespace-nowrap ${selectedService ? "text-[#333]" : "text-[#cfcdcd]"}`}>{selectedService || "Select Service"}</span>
                  <img className="w-[30px] h-[30px] mr-[10px]" alt="down" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/lsicon-down-filled.svg" />
                </button>
                {errors.service && <span className="text-red-500 text-sm">{errors.service}</span>}
                {serviceOpen && (
                  <div className="absolute top-full left-0 w-full bg-white border border-[#bfbfbf] rounded-[10px] z-[60] shadow-lg mt-1 overflow-hidden">
                    {services.map((s) => (
                      <button key={s} type="button" onClick={() => { setSelectedService(s); setServiceOpen(false); }} className="w-full px-4 py-3 hover:bg-[#eeeefb] text-left [font-family:'Bricolage_Grotesque',Helvetica] text-[#333] text-lg">
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="mx-[53px]">
                <button type="submit" className="w-full h-[51px] bg-[#f0542e] hover:bg-[#f0542e]/90 rounded-[10px] shadow-[4px_4px_0px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap transition-all active:translate-y-1 active:shadow-none">
                  Submit Form
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {/* Hero CTA Buttons */}
      <div id="contact" className="relative z-30 flex flex-wrap gap-6 px-6 md:px-[106px] pb-16 pt-4">
        <button onClick={() => {
          const el = document.getElementById("contact-form");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} className="w-[227px] h-[58px] bg-[#f0542e] rounded-xl shadow-[6px_6px_1px_#201f51] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-90 active:translate-y-0.5 transition-all cursor-pointer">
          Contact Us
        </button>
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-[239px] h-[58px] relative flex items-center justify-center rounded-xl shadow-[6px_6px_1px_#201f51] hover:opacity-90 active:translate-y-0.5 transition-all cursor-pointer" style={{ background: "linear-gradient(352deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0) 100%), linear-gradient(0deg, rgba(102,186,79,1) 0%, rgba(102,186,79,1) 100%)" }}>
          <img className="w-[35px] h-[35px] mr-3" alt="WhatsApp" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/mage-whatsapp-filled.svg" />
          <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-neutral-100 text-3xl tracking-[0] leading-[normal] whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
