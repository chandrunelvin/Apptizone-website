import React from 'react';
import { ServiceBenefitsSection } from '../shared/ServiceSections';
import { uiuxConfig } from './serviceData';

const BenefitsSection: React.FC = () => <ServiceBenefitsSection config={uiuxConfig} />;

export default BenefitsSection;
