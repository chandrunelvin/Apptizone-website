import React from 'react';
import { ServiceBenefitsSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const BenefitsSection: React.FC = () => <ServiceBenefitsSection config={semConfig} />;

export default BenefitsSection;
