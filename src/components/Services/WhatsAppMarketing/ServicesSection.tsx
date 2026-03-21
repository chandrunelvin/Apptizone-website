import React from 'react';
import { ServiceCardsSection } from '../shared/ServiceSections';
import { whatsappMarketingConfig } from './serviceData';

const ServicesSection: React.FC = () => <ServiceCardsSection title={whatsappMarketingConfig.cardsTitle} cards={whatsappMarketingConfig.serviceCards} />;

export default ServicesSection;
