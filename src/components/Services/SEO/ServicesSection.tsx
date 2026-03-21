import React from 'react';
import { ServiceCardsSection } from '../shared/ServiceSections';
import { seoConfig } from './serviceData';

const ServicesSection: React.FC = () => <ServiceCardsSection title={seoConfig.cardsTitle} cards={seoConfig.serviceCards} />;

export default ServicesSection;
