import React from 'react';

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
  },
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/mingcute-youtube-fill.svg",
    alt: "YouTube",
  },
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/mdi-linkedin.svg",
    alt: "LinkedIn",
  },
  {
    src: "https://c.animaapp.com/mms2hnc1lnJ5gE/img/ic-baseline-facebook.svg",
    alt: "Facebook",
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

      <div className="relative z-10 w-full max-w-[1530px] mx-auto px-[84px] py-[68px] flex flex-row gap-8 justify-between flex-wrap">
        {/* Brand column */}
        <div className="flex flex-col gap-4 min-w-[160px]">
          <div className="w-20 h-[71px] flex flex-col justify-end bg-[url(https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-38-1.png)] bg-cover bg-center">
            <img
              className="w-20 h-[22.13px]"
              alt="Apptizone"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-39-1.png"
            />
          </div>
          <p className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-normal uppercase">
            Build for Brand Growth
          </p>
          <div className="flex flex-row gap-[15px] mt-2">
            {socialIcons.map((icon) => (
              <img
                key={icon.alt}
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>

        {/* Links column */}
        <nav className="flex flex-col gap-[18px]">
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Links
          </div>
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Services column */}
        <nav className="flex flex-col gap-[18px]">
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Services
          </div>
          {footerServices.map((service) => (
            <a
              key={service}
              href="#"
              className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap hover:underline"
            >
              {service}
            </a>
          ))}
        </nav>

        {/* Contact column */}
        <address className="flex flex-col gap-[18px] not-italic">
          <div className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-normal uppercase">
            Contact
          </div>

          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 flex-shrink-0"
              alt="Phone"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/material-symbols-call.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap">
              +91 99999 99999
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 flex-shrink-0"
              alt="Email"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/ion-mail.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap">
              apptizone@gmail.com
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <img
              className="w-6 h-6 flex-shrink-0"
              alt="Location"
              src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/fluent-location-16-filled.svg"
            />
            <span className="font-['Bricolage_Grotesque',Helvetica] font-normal text-white text-xl tracking-[0] leading-normal whitespace-nowrap">
              Avadi, Chennai
            </span>
          </div>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
