import React from 'react';
import { ServiceBenefitsSection } from '../shared/ServiceSections';
import { socialMediaConfig } from './serviceData';

const BenefitsSection: React.FC = () => <ServiceBenefitsSection config={socialMediaConfig} />;

export default BenefitsSection;
