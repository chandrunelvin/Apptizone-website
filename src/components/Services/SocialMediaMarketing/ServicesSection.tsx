import React from 'react';
import { ServiceCardsSection } from '../shared/ServiceSections';
import { socialMediaConfig } from './serviceData';

const ServicesSection: React.FC = () => (
  <ServiceCardsSection
    title={socialMediaConfig.cardsTitle}
    cards={socialMediaConfig.serviceCards}
    backgroundColor="#66BA4F"
  />
);

export default ServicesSection;
