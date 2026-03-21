import React from 'react';
import { ServiceStatsSection } from '../shared/ServiceSections';
import { seoConfig } from './serviceData';

const StatsSection: React.FC = () => <ServiceStatsSection config={seoConfig} />;

export default StatsSection;
