import React from 'react';
import { ServiceProcessSection } from '../shared/ServiceSections';
import { uiuxConfig } from './serviceData';

const ProcessSection: React.FC = () => <ServiceProcessSection config={uiuxConfig} />;

export default ProcessSection;
