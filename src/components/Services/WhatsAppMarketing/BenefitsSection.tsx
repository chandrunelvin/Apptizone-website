import React from 'react';
import { ServiceBenefitsSection } from '../shared/ServiceSections';
import { whatsappMarketingConfig } from './serviceData';

const BenefitsSection: React.FC = () => <ServiceBenefitsSection config={whatsappMarketingConfig} />;

export default BenefitsSection;
