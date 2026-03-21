import React from 'react';
import { ServiceHeroSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const HeroSection: React.FC = () => <ServiceHeroSection config={semConfig} />;

export default HeroSection;
