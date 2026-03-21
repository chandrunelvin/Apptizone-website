import React from 'react';
import { ServiceHeroSection } from '../shared/ServiceSections';
import { socialMediaConfig } from './serviceData';

const HeroSection: React.FC = () => <ServiceHeroSection config={socialMediaConfig} />;

export default HeroSection;
