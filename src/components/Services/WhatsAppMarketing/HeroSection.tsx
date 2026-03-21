import React from 'react';
import { ServiceHeroSection } from '../shared/ServiceSections';
import { whatsappMarketingConfig } from './serviceData';

const HeroSection: React.FC = () => <ServiceHeroSection config={whatsappMarketingConfig} />;

export default HeroSection;
