import React from 'react';

const serviceCards = [
  {
    title: "WhatsApp Campaign Setup",
    bg: "bg-[#ffdda0]",
    titleColor: "text-[#422d06]",
    itemColor: "text-[#422d06]",
    shadow: "shadow-[20px_20px_1px_#4d3405]",
    rotate: "rotate-[-2.02deg]",
    iconSrc: "https://c.animaapp.com/mms4ffjl5N2sBn/img/--4.svg",
    items: ["Business API setup", "Broadcast campaign setup", "Customer segmentation", "Contact list management"],
  },
  {
    title: "Promotional Campaigns",
    bg: "bg-[#c7ffb6]",
    titleColor: "text-[#103406]",
    itemColor: "text-[#103406]",
    shadow: "shadow-[20px_20px_1px_#174809]",
    rotate: "rotate-[1.29deg]",
    iconSrc: "https://c.animaapp.com/mms4ffjl5N2sBn/img/-.svg",
    items: ["Offer & discount campaigns", "Product launch promotions", "Festival marketing campaigns", "Event promotions"],
  },
  {
    title: "Lead Generation Campaigns",
    bg: "bg-[#ffd0e7]",
    titleColor: "text-[#3f1b2d]",
    itemColor: "text-[#3f1b2d]",
    shadow: "shadow-[20px_20px_1px_#550b31]",
    rotate: "rotate-[0.45deg]",
    iconSrc: "https://c.animaapp.com/mms4ffjl5N2sBn/img/--10.svg",
    items: ["Click-to-WhatsApp ads", "Automated lead capture", "Customer inquiry automation"],
  },
  {
    title: "WhatsApp Automation",
    bg: "bg-[#caffff]",
    titleColor: "text-[#043a3a]",
    itemColor: "text-[#043a3a]",
    shadow: "shadow-[20px_20px_1px_#094c4c]",
    rotate: "rotate-[1.00deg]",
    iconSrc: "https://c.animaapp.com/mms4ffjl5N2sBn/img/--7.svg",
    items: ["Auto-replies & chatbots", "Lead qualification automation", "Order & support automation"],
  },
  {
    title: "Customer Engagement",
    bg: "bg-[#fff4d7]",
    titleColor: "text-[#372905]",
    itemColor: "text-[#372905]",
    shadow: "shadow-[20px_20px_1px_#433206]",
    rotate: "rotate-0",
    iconSrc: "https://c.animaapp.com/mms4ffjl5N2sBn/img/--8.svg",
    items: ["Personalized messaging", "Customer follow-ups", "Broadcast messaging"],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#ec5d9f] py-16 px-4 md:px-8">
      <h2 className="[font-family:'Black_Han_Sans',Helvetica] font-normal text-white text-[clamp(32px,6vw,110px)] tracking-[0] leading-[1.1] [text-shadow:6px_6px_1px_#201f51] text-center mb-16">
        OUR WHATSAPP MARKETING SERVICES
      </h2>
      <div className="max-w-[1296px] mx-auto flex flex-col gap-10">
        <div className="flex flex-wrap justify-center gap-8">
          {serviceCards.slice(0, 3).map((card, index) => (
            <div key={`card-row1-${index}`} className={`w-full sm:w-[340px] lg:w-[378px] min-h-[309px] rounded-[40px] overflow-hidden border-[3px] border-solid border-black ${card.rotate} ${card.shadow} bg-white p-0 hover:scale-[1.02] transition-transform duration-200`}>
              <div className={`relative p-0 w-full h-full min-h-[309px] ${card.bg}`}>
                <div className={`pt-[46px] px-[40px] [font-family:'Black_Han_Sans',Helvetica] font-normal ${card.titleColor} text-2xl tracking-[0] leading-[normal] mb-4`}>{card.title}</div>
                <ul className="px-[40px] pb-[40px] flex flex-col gap-[16px]">
                  {card.items.map((item, itemIndex) => (
                    <li key={`item-${index}-${itemIndex}`} className="flex items-start gap-[8.8px]">
                      <img className="mt-[5px] w-[14px] h-[13px] flex-shrink-0" alt="bullet" src={card.iconSrc} />
                      <span className={`[font-family:'Bricolage_Grotesque',Helvetica] font-normal ${card.itemColor} text-xl tracking-[0] leading-[normal]`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {serviceCards.slice(3, 5).map((card, index) => (
            <div key={`card-row2-${index}`} className={`w-full sm:w-[340px] lg:w-[378px] min-h-[263px] rounded-[40px] overflow-hidden border-[3px] border-solid border-black ${card.rotate} ${card.shadow} bg-white p-0 hover:scale-[1.02] transition-transform duration-200`}>
              <div className={`relative p-0 w-full h-full min-h-[263px] ${card.bg}`}>
                <div className={`pt-[46px] px-[36px] [font-family:'Black_Han_Sans',Helvetica] font-normal ${card.titleColor} text-2xl tracking-[0] leading-[normal] mb-4`}>{card.title}</div>
                <ul className="px-[36px] pb-[40px] flex flex-col gap-[16px]">
                  {card.items.map((item, itemIndex) => (
                    <li key={`item-row2-${index}-${itemIndex}`} className="flex items-start gap-[9px]">
                      <img className="mt-[5px] w-[14px] h-[13px] flex-shrink-0" alt="bullet" src={card.iconSrc} />
                      <span className={`[font-family:'Bricolage_Grotesque',Helvetica] font-normal ${card.itemColor} text-xl tracking-[0] leading-[normal]`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
