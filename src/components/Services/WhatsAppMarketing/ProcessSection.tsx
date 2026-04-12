import React from 'react';
import { ServiceProcessSection } from '../shared/ServiceSections';
import { whatsappIntegrationConfig } from './serviceData';

const ProcessSection: React.FC = () => <ServiceProcessSection config={whatsappIntegrationConfig} />;

export default ProcessSection;
