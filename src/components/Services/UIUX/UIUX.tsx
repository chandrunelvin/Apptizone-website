import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import MattersSection from './MattersSection';
import BenefitsSection from './BenefitsSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import { uiuxConfig } from './serviceData';

const UIUX = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: uiuxConfig.colors.pageBg }}>
      <HeroSection />
      <StatsSection />
      <MattersSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default UIUX;
