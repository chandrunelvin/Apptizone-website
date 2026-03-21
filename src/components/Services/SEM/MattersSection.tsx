import React from 'react';
import { ServiceMattersSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const MattersSection: React.FC = () => <ServiceMattersSection config={semConfig} />;

export default MattersSection;
