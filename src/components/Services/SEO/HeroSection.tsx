import React from 'react';
import { ServiceHeroSection } from '../shared/ServiceSections';
import { seoConfig } from './serviceData';

const HeroSection: React.FC = () => <ServiceHeroSection config={seoConfig} />;

export default HeroSection;
