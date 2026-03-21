import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import MattersSection from './MattersSection';
import BenefitsSection from './BenefitsSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import { whatsappMarketingConfig } from './serviceData';

const WhatsAppMarketing = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: whatsappMarketingConfig.colors.pageBg }}>
      <HeroSection />
      <StatsSection />
      <MattersSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default WhatsAppMarketing;
