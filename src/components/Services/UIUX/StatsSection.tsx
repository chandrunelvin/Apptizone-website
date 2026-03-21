import React from 'react';
import { ServiceStatsSection } from '../shared/ServiceSections';
import { uiuxConfig } from './serviceData';

const StatsSection: React.FC = () => <ServiceStatsSection config={uiuxConfig} />;

export default StatsSection;
