import React, { useState } from 'react';
import contactBg from '../../assets/contact-us/contact-bg.png';
import contactName from '../../assets/contact-us/contact-name.png';
import ScrollReveal from '../ui/ScrollReveal';

const serviceOptions = [
  'WhatsApp Marketing',
  'SEO',
  'Social Media Management',
  'Search Engine Marketing',
  'Web & App Design',
  'WhatsApp Integration',
];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Contact Request from ${formData.name || 'Website Visitor'}`;
    const bodyLines = [
      `Name: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Mobile: ${formData.mobile || '-'}`,
      `Service: ${formData.service || '-'}`,
    ];

    const mailtoLink = `mailto:info@apptizone.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#1f1d59] pt-[92px] sm:pt-[104px] md:pt-[126px]">
      <img
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        alt="Background Pattern"
        src={contactBg}
      />

      <section className="relative z-10 mx-auto w-full max-w-[1530px] px-4 sm:px-6 md:px-[64px] lg:px-[84px] pb-10 sm:pb-14 md:pb-[74px]">
        <ScrollReveal distance={24}>
          <img
            src={contactName}
            alt="Contact Us"
            className="pt-2 sm:pt-[14px] w-full max-w-[980px] h-auto mx-auto"
          />
        </ScrollReveal>

        <div className="mt-6 sm:mt-10 md:mt-[54px] flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <ScrollReveal className="w-full max-w-[560px]" delay={60}>
            <p
              className="text-[30px] font-bold leading-tight text-[#ECA012]"
              style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
            >
              Were here to help you
            </p>

            <h2
              className="mt-2 text-[34px] font-bold leading-[1.12] text-white sm:text-[42px] md:text-[50px] lg:text-[58px]"
              style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
            >
              Let&apos;s discuss your digital marketing solution needs.
            </h2>

            <div className="mt-8 sm:mt-10 md:mt-[46px] grid grid-cols-1 gap-y-6 sm:gap-y-8 md:gap-y-[42px] sm:grid-cols-2 sm:gap-x-8 md:gap-x-[52px]">
              <div>
                <h3
                  className="text-[26px] font-semibold leading-none text-[#ECA012]"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  Call Us
                </h3>
                <p
                  className="mt-1.5 sm:mt-2 text-[23px] font-medium text-white"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  +91 8056136651
                </p>
              </div>

              <div>
                <h3
                  className="text-[26px] font-semibold leading-none text-[#ECA012]"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  Our Location
                </h3>
                <p
                  className="mt-1.5 sm:mt-2 text-[23px] font-medium text-white"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  123, xyz street,
                </p>
              </div>

              <div>
                <h3
                  className="text-[26px] font-semibold leading-none text-[#ECA012]"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  Email
                </h3>
                <a
                  href="mailto:info@apptizone.com"
                  className="mt-1.5 sm:mt-2 text-[23px] font-medium text-white"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  info@apptizone.com
                </a>
              </div>

              <div>
                <h3
                  className="text-[26px] font-semibold leading-none text-[#ECA012]"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  Social Network
                </h3>
                <div
                  className="mt-[6px] sm:mt-[10px] flex items-center gap-3 sm:gap-4 md:gap-5"
                  style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                >
                  <img
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/ic-baseline-facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <img
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/mingcute-youtube-fill.svg"
                    alt="YouTube"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <img
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/mdi-linkedin.svg"
                    alt="LinkedIn"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <img
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/basil-instagram-solid.svg"
                    alt="Instagram"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </div>
                </div>
              </div>
          </ScrollReveal>

          <ScrollReveal className="w-full lg:max-w-[500px]" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[38px] border-[3px] sm:border-[4px] border-[#16154c] bg-[#cecfde] px-4 sm:px-5 md:px-[28px] pb-5 sm:pb-6 md:pb-[30px] pt-4 sm:pt-5 md:pt-[24px] shadow-[0_2px_0_#16154c]"
            >
              <h2
                className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-medium leading-none text-[#373737]"
                style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
              >
                LETS WORK TOGETHER
              </h2>

              <div className="mt-3 sm:mt-4 md:mt-[18px] space-y-3 sm:space-y-[14px]">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[16px] font-light text-[#555]"
                    style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="mt-1.5 h-[40px] sm:h-[42px] w-full rounded-[8px] border border-[#bbb] bg-[#efefef] px-3 sm:px-4 text-[15px] sm:text-[16px] text-[#222] outline-none focus:border-[#777]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-light text-[#555]"
                    style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                  >
                    Mail Id
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=".com"
                    className="mt-1.5 h-[40px] sm:h-[42px] w-full rounded-[8px] border border-[#bbb] bg-[#efefef] px-3 sm:px-4 text-[15px] sm:text-[16px] text-[#222] outline-none focus:border-[#777]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country-code"
                    className="block text-[16px] font-light text-[#555]"
                    style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                  >
                    Country Code
                  </label>
                  <select
                    id="country-code"
                    className="mt-1.5 h-[40px] sm:h-[42px] w-full rounded-[8px] border border-[#bbb] bg-[#efefef] px-3 text-[15px] sm:text-[16px] text-[#9d9d9d] outline-none focus:border-[#777]"
                    defaultValue="+91 India"
                  >
                    <option>+91 India</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-[16px] font-light text-[#555]"
                    style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                  >
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+91"
                    className="mt-1.5 h-[40px] sm:h-[42px] w-full rounded-[8px] border border-[#bbb] bg-[#efefef] px-3 sm:px-4 text-[15px] sm:text-[16px] text-[#222] outline-none focus:border-[#777]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-[16px] font-light text-[#555]"
                    style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`mt-1.5 h-[40px] sm:h-[42px] w-full rounded-[8px] border border-[#bbb] bg-[#efefef] px-3 text-[15px] sm:text-[16px] outline-none focus:border-[#777] ${
                      formData.service ? 'text-[#222]' : 'text-[#9d9d9d]'
                    }`}
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 sm:mt-6 md:mt-[26px] h-[40px] sm:h-[42px] w-full rounded-[8px] bg-[#f0542e] text-[14px] sm:text-[15px] font-semibold text-white shadow-[3px_3px_0_#16154c] transition hover:opacity-95"
                style={{ fontFamily: 'Bricolage Grotesque, Helvetica, sans-serif' }}
              >
                Submit Form
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
