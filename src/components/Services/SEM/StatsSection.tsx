import React from 'react';
import { ServiceStatsSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const StatsSection: React.FC = () => <ServiceStatsSection config={semConfig} />;

export default StatsSection;
