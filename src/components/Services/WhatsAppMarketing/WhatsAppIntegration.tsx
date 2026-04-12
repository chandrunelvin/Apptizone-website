import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import MattersSection from './MattersSection';
import BenefitsSection from './BenefitsSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';

const WhatsAppIntegration = () => {
  return (
    <div className="bg-[#9051e0] overflow-x-hidden w-full relative">
      {/* Background images for entire page structure */}
      <img className="absolute top-[866px] left-0 w-full h-[1407px] pointer-events-none object-cover" alt="Group" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/group-560.png" />

      <HeroSection />
      
      <StatsSection />
      
      <MattersSection />
      
      <BenefitsSection />
      
      <ServicesSection />
      
      <ProcessSection />
    </div>
  );
};

export default WhatsAppIntegration;
