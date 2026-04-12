import React from 'react';
import { ServiceCardsSection } from '../shared/ServiceSections';
import { semConfig } from './serviceData';

const ServicesSection: React.FC = () => (
  <ServiceCardsSection
    title={semConfig.cardsTitle}
    cards={semConfig.serviceCards}
    backgroundColor="#FFFFFF"
  />
);

export default ServicesSection;
