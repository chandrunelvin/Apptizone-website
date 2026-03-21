import React from 'react';
import { ServiceCardsSection } from '../shared/ServiceSections';
import { uiuxConfig } from './serviceData';

const ServicesSection: React.FC = () => <ServiceCardsSection title={uiuxConfig.cardsTitle} cards={uiuxConfig.serviceCards} />;

export default ServicesSection;
