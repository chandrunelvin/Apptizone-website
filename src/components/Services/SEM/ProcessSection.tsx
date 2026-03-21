import React from 'react';
import { ServiceProcessSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const ProcessSection: React.FC = () => <ServiceProcessSection config={semConfig} />;

export default ProcessSection;
