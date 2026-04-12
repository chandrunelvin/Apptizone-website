import { type ServicePageConfig } from '../shared/ServiceSections';
import whatsappIntegrationBackground from '../../../assets/service-stickers/whatsapp-inter-imge/whatsappintergrate.png';

export const whatsappMarketingConfig: ServicePageConfig = {
  serviceName: 'WhatsApp Marketing',
  heroTitle: 'WHATSAPP MARKETING THAT REACHES CUSTOMERS FAST',
  heroBackgroundImageSrc: whatsappIntegrationBackground,
  heroDescription:
    'Use WhatsApp campaigns to connect directly with customers, deliver timely promotions, and improve response rates with more personal communication.',
  statsHeadline: 'WHATSAPP MESSAGES GET SEEN FAST AND DRIVE QUICKER ACTION.',
  statsDescription:
    'We build marketing campaigns that help businesses start conversations, share offers, and increase engagement through one of the most direct channels available.',
  mattersTitle: 'WHY WHATSAPP MARKETING MATTERS',
  mattersBullets: [
    'Communicate with customers on a familiar, high-attention channel',
    'Promote offers, launches, and updates instantly',
    'Encourage faster replies and stronger engagement',
    'Make campaigns feel more direct and personal',
    'Support lead nurturing and repeat business',
  ],
  benefitHighlights: ['Fast message delivery', 'Higher open rates', 'Better engagement', 'More repeat sales', 'Direct customer reach'],
  ctaText: 'Marketing works better when people actually read the message. We help your business turn WhatsApp into a reliable growth channel.',
  cardsTitle: 'OUR WHATSAPP MARKETING SERVICES',
  serviceCards: [
    { title: 'Campaign Broadcasting', items: ['Offer broadcasts', 'Launch announcements', 'Event reminders', 'Audience targeting'] },
    { title: 'Message Personalization', items: ['Segment-based messaging', 'Customer-specific offers', 'Tailored templates', 'Journey-based outreach'] },
    { title: 'Lead Follow-Up', items: ['Inquiry response flows', 'Sales follow-ups', 'Reminder sequences', 'Re-engagement messaging'] },
    { title: 'Automation Support', items: ['Auto-replies', 'Lead capture flows', 'Basic chatbot setup', 'Campaign workflow support'] },
  ],
  processTitle: 'OUR WHATSAPP MARKETING PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'Audience & Offer Planning', description: 'We identify who to target, what to say, and when communication will be most effective.' },
    { step: 'Step 2', title: 'Campaign Setup', description: 'We prepare templates, audience segments, and delivery flows for the campaign.' },
    { step: 'Step 3', title: 'Broadcast & Engage', description: 'We launch the campaign and support timely, consistent customer communication.' },
    { step: 'Step 4', title: 'Optimize for Better Response', description: 'We review results and improve messaging, timing, and segmentation for stronger outcomes.' },
  ],
  colors: {
    pageBg: '#22a565',
    heroBg: '#4dd18c',
    accent: '#ffe082',
    secondaryAccent: '#157347',
    cardBg: '#ecfff4',
    cardBorder: '#111111',
    cardShadow: '#0f5b37',
    darkText: '#0f3b25',
    lightText: '#f6fff9',
    buttonBg: '#ea580c',
    buttonShadow: '#7c2d12',
  },
};
