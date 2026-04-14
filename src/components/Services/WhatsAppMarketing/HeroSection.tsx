import React, { useState } from 'react';

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+61', name: 'Australia' },
  { code: '+971', name: 'UAE' },
];

const services = [
  'WhatsApp Marketing',
  'SEO',
  'Social Media Management',
  'Search Engine Marketing',
  'Web & App Design',
  'WhatsApp Integration',
];

const HeroSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [serviceOpen, setServiceOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email required';
    if (!mobile.trim() || !/^\d{7,15}$/.test(mobile.replace(/\s/g, ''))) errs.mobile = 'Valid mobile number required';
    if (!selectedService) errs.service = 'Please select a service';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="about" className="relative w-full overflow-hidden min-h-[870px]">
      <div className="absolute inset-0 bg-[#b6db41]" />
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none"
        alt="Background"
        src="https://c.animaapp.com/mms4ffjl5N2sBn/img/social-media-marketing.svg"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1530px] px-6 md:px-12 lg:px-16 pt-[130px] pb-[70px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8">
          <div className="w-full lg:max-w-[760px]">
            <img
              className="w-full max-w-[720px] h-auto"
              alt="WhatsApp Marketing"
              src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-563.png"
            />

            <h2 className="mt-4 max-w-[740px] [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-white text-[clamp(34px,5.4vw,67px)] leading-[1.02] [text-shadow:5px_5px_0_#1f1d59]">
              Reach Customers
              <br />
              Instantly with WhatsApp
              <br />
              Marketing
            </h2>

            <div id="contact" className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => {
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[60px] min-w-[230px] rounded-[14px] bg-[#ef6036] px-8 [font-family:'Bricolage_Grotesque',Helvetica] text-[40px] leading-none text-white shadow-[6px_6px_0_#1f1d59] transition hover:opacity-90"
              >
                Contact Us
              </button>
              <a
                href="https://wa.me/917010892360"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[60px] min-w-[250px] items-center justify-center gap-3 rounded-[14px] bg-[#79b94e] px-8 [font-family:'Bricolage_Grotesque',Helvetica] text-[40px] leading-none text-white shadow-[6px_6px_0_#1f1d59] transition hover:opacity-90"
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt="WhatsApp"
                  src="https://c.animaapp.com/mms4ffjl5N2sBn/img/mage-whatsapp-filled.svg"
                />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[500px] lg:pt-[22px]">
            {submitted ? (
              <div
                id="contact-form"
                className="w-full rounded-[52px] border-4 border-black bg-[#ceceda] px-8 py-16 text-center shadow-[7px_7px_0_#1f1d59]"
              >
                <div className="text-6xl">✅</div>
                <h3 className="mt-5 [font-family:'Bricolage_Grotesque',Helvetica] text-4xl font-semibold text-[#222]">Thank you, {name}!</h3>
                <p className="mt-3 [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#444]">
                  We&apos;ve received your request and will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMobile('');
                    setSelectedService('');
                  }}
                  className="mt-8 h-[51px] w-full rounded-[10px] bg-[#df5f38] [font-family:'Bricolage_Grotesque',Helvetica] text-xl font-semibold text-white shadow-[4px_4px_0_#222] transition hover:opacity-90"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="w-full rounded-[52px] border-4 border-black bg-[#ceceda] px-9 pt-11 pb-10 shadow-[7px_7px_0_#1f1d59]"
              >
                <h2 className="mb-6 [font-family:'Bricolage_Grotesque',Helvetica] text-[50px] leading-none font-medium text-[#2d2d2d]">
                  LETS WORK TOGETHER
                </h2>

                <div className="mb-4">
                  <label className="block [font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#545454]">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`mt-1 h-[52px] w-full rounded-[10px] border bg-[#ececec] px-4 [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#333] ${errors.name ? 'border-red-500' : 'border-[#bfbfbf]'}`}
                    placeholder="Full Name"
                  />
                  {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                </div>

                <div className="mb-4">
                  <label className="block [font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#545454]">Mail Id</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-1 h-[52px] w-full rounded-[10px] border bg-[#ececec] px-4 [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#333] ${errors.email ? 'border-red-500' : 'border-[#bfbfbf]'}`}
                    placeholder=".com"
                  />
                  {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                </div>

                <div className="mb-4 relative">
                  <label className="block [font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#545454]">Country Code</label>
                  <button
                    type="button"
                    onClick={() => {
                      setCountryOpen((v) => !v);
                      setServiceOpen(false);
                    }}
                    className="mt-1 flex h-[52px] w-full items-center rounded-[10px] border border-[#bfbfbf] bg-[#ececec]"
                  >
                    <span className="px-4 [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#c8c8c8]">{selectedCountry.code}</span>
                    <div className="h-full w-px bg-[#d0d0d0]" />
                    <span className="flex-1 px-4 text-left [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#a3a3a3]">{selectedCountry.name}</span>
                    <span className="px-4 text-2xl text-[#666]">▾</span>
                  </button>
                  {countryOpen && (
                    <div className="absolute left-0 top-full z-[60] mt-1 w-full overflow-hidden rounded-[10px] border border-[#bfbfbf] bg-white shadow-lg">
                      {countryCodes.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c);
                            setCountryOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left [font-family:'Bricolage_Grotesque',Helvetica] text-lg text-[#333] hover:bg-[#eeeefb]"
                        >
                          {c.code} {c.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block [font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#545454]">Mobile Number</label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={`mt-1 h-[52px] w-full rounded-[10px] border bg-[#ececec] px-4 [font-family:'Bricolage_Grotesque',Helvetica] text-xl text-[#333] ${errors.mobile ? 'border-red-500' : 'border-[#bfbfbf]'}`}
                    placeholder={selectedCountry.code}
                  />
                  {errors.mobile && <span className="text-sm text-red-500">{errors.mobile}</span>}
                </div>

                <div className="mb-7 relative">
                  <label className="block [font-family:'Bricolage_Grotesque',Helvetica] text-lg font-light text-[#545454]">Service</label>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceOpen((v) => !v);
                      setCountryOpen(false);
                    }}
                    className={`mt-1 flex h-[52px] w-full items-center rounded-[10px] border bg-[#ececec] ${errors.service ? 'border-red-500' : 'border-[#bfbfbf]'}`}
                  >
                    <span className={`flex-1 px-4 text-left [font-family:'Bricolage_Grotesque',Helvetica] text-xl ${selectedService ? 'text-[#333]' : 'text-[#bebebe]'}`}>
                      {selectedService || 'Select Service'}
                    </span>
                    <span className="px-4 text-2xl text-[#666]">▾</span>
                  </button>
                  {errors.service && <span className="text-sm text-red-500">{errors.service}</span>}
                  {serviceOpen && (
                    <div className="absolute left-0 top-full z-[60] mt-1 w-full overflow-hidden rounded-[10px] border border-[#bfbfbf] bg-white shadow-lg">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setSelectedService(s);
                            setServiceOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left [font-family:'Bricolage_Grotesque',Helvetica] text-lg text-[#333] hover:bg-[#eeeefb]"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="h-[51px] w-full rounded-[10px] bg-[#df5f38] [font-family:'Bricolage_Grotesque',Helvetica] text-[34px] leading-none font-semibold text-white shadow-[4px_4px_0_#222] transition hover:opacity-90"
                >
                  Submit Form
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
