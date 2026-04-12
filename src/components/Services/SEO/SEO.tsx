import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import MattersSection from './MattersSection';
import BenefitsSection from './BenefitsSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import { seoConfig } from './serviceData';

const SEO = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: seoConfig.colors.pageBg }}>
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <MattersSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default SEO;
