import React from 'react';
import { ServiceStatsSection } from '../shared/ServiceSections';
import { whatsappMarketingConfig } from './serviceData';

const StatsSection: React.FC = () => <ServiceStatsSection config={whatsappMarketingConfig} />;

export default StatsSection;
