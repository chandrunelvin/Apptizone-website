import React from 'react';
import { ServiceStatsSection } from '../shared/ServiceSections';
import { socialMediaConfig } from './serviceData';

const StatsSection: React.FC = () => <ServiceStatsSection config={socialMediaConfig} />;

export default StatsSection;
