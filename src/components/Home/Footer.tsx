import React from 'react';
import FloatingElement from '../ui/FloatingElement';
import ScrollReveal from '../ui/ScrollReveal';

const footerLinks = [
  "Home",
  "About Us",
  "Services",
  "Contact Us",
  "Blog",
  "Privacy Policy",
];

const footerServices = [
  "Search Engine Optimization",
  "Social Media Management",
  "Search Engine Marketing",
  "Web & App Design",
  "WhatsApp Integration",
  "WhatsApp Marketing",
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/basil-instagram-solid.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/apptizonedigitalsolutions/",
  },
  {
    alt: "X",
    href: "https://x.com/apptizone",
  },
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/mdi-linkedin.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/apptizone-digital-solutions/",
  },
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/ic-baseline-facebook.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/apptizone.india/",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Footer background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        alt=""
        src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/rectangle-208.svg"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1530px] flex-col gap-10 px-6 py-12 md:px-10 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-8 lg:px-[84px] lg:py-[68px]">
        {/* Brand column */}
        <ScrollReveal className="flex flex-col gap-4 min-w-[160px]" delay={40} distance={24} blur={6}>
          <FloatingElement amplitude={5} duration={5}>
            <div className="w-20 h-[71px] flex flex-col justify-end bg-[url(https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-38-1.png)] bg-cover bg-center">
              <img
                className="w-20 h-[22.13px]"
                alt="Apptizone"
                src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-39-1.png"
              />
            </div>
          </FloatingElement>
          <p className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-normal uppercase">
            Build for Brand Growth
          </p>
          <div className="flex flex-row gap-[15px] mt-2">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                aria-label={icon.alt}
                className="flex h-6 w-6 items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
              >
                {icon.alt === "X" ? (
                  <span className="text-[20px] font-bold leading-none">X</span>
                ) : (
                  <img
                    className="h-6 w-6"
                    alt={icon.alt}
                    src={icon.src}
                  />
                )}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Links column */}
        <ScrollReveal className="flex flex-col gap-[14px] md:gap-[18px]" delay={100} distance={26} blur={6}>
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Links
          </div>
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-['Bricolage_Grotesque',Helvetica] font-normal text-lg tracking-[0] leading-normal text-white transition-all duration-300 hover:translate-x-1 hover:underline md:text-xl"
            >
              {link}
            </a>
          ))}
        </ScrollReveal>

        {/* Services column */}
        <ScrollReveal className="flex flex-col gap-[14px] md:gap-[18px]" delay={160} distance={26} blur={6}>
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Services
          </div>
          {footerServices.map((service) => (
            <a
              key={service}
              href="#"
              className="font-['Bricolage_Grotesque',Helvetica] font-normal text-lg tracking-[0] leading-normal text-white transition-all duration-300 hover:translate-x-1 hover:underline md:text-xl"
            >
              {service}
            </a>
          ))}
        </ScrollReveal>

        {/* Contact column */}
        <ScrollReveal className="contents" delay={220} distance={28} blur={8}>
        <address className="flex max-w-[360px] flex-col gap-[14px] not-italic md:max-w-[420px] md:gap-[18px]">
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Contact
          </div>

          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 flex-shrink-0"
              alt="Phone"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/material-symbols-call.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] font-normal text-lg tracking-[0] leading-normal text-white md:text-xl">
              +91 70108 92360
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 flex-shrink-0"
              alt="Email"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/ion-mail.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] break-all font-normal text-lg tracking-[0] leading-normal text-white md:text-xl md:break-normal">
              info@apptizone.com
            </span>
          </div>

          <div className="flex gap-3 items-start">
            <img
              className="mt-1 h-6 w-6 flex-shrink-0"
              alt="Location"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/fluent-location-16-filled.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] text-base font-normal leading-[1.6] tracking-[0] text-white md:text-lg">
              Apptizone Digital Solution Pvt Ltd - Nandhavanam Mettur, 2, Vivekananda Cross St, Nandavana Mettur, Avadi, Chennai, Tamil Nadu 600071
            </span>
          </div>
        </address>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
