import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section id="services" className="relative w-full overflow-hidden min-h-[909px]">
      <img className="absolute top-0 left-0 w-full h-[893px] object-cover" alt="Vector" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/vector-363-1.svg" />
      <img className="absolute top-4 left-[70px] w-[1401px] h-[877px] object-cover" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-198.png" />
      <img className="absolute top-0 left-px w-full h-[894px] object-cover" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-199.png" />
      <div className="relative z-10 flex flex-col w-full px-6 md:px-[126px] pt-[149px] pb-[100px]">
        <h2 className="w-full max-w-[1371px] [text-shadow:6px_6px_1px_#201f51] [font-family:'Black_Han_Sans',Helvetica] font-normal text-white text-[clamp(48px,8vw,120px)] tracking-[0] leading-[1.1] mb-0">
          WHATSAPP MESSAGES GET OPENED WITHIN MINUTES.
        </h2>
        <p className="mt-[60px] w-full max-w-[1201px] [-webkit-text-stroke:1px_#222222] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[52px]">
          We help businesses connect directly with customers through strategic WhatsApp marketing campaigns that drive engagement, leads, and sales.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
