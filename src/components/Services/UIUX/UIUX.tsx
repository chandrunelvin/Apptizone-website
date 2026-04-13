import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import MattersSection from './MattersSection';
import BenefitsSection from './BenefitsSection';
import ServicesSection from './ServicesSection';
import ProcessSection from './ProcessSection';
import { uiuxConfig } from './serviceData';
import ScrollReveal from '../../ui/ScrollReveal';

const UIUX = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: uiuxConfig.colors.pageBg }}>
      <ScrollReveal distance={28}><HeroSection /></ScrollReveal>
      <ScrollReveal delay={40}><BenefitsSection /></ScrollReveal>
      <ScrollReveal delay={80}><StatsSection /></ScrollReveal>
      <ScrollReveal delay={120}><MattersSection /></ScrollReveal>
      <ScrollReveal delay={160}><ServicesSection /></ScrollReveal>
      <ScrollReveal delay={200}><ProcessSection /></ScrollReveal>
    </div>
  );
};

export default UIUX;
