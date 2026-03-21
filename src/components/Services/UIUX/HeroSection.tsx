import React from 'react';
import { ServiceHeroSection } from '../shared/ServiceSections';
import { uiuxConfig } from './serviceData';

const HeroSection: React.FC = () => <ServiceHeroSection config={uiuxConfig} />;

export default HeroSection;
