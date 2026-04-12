import { type ServicePageConfig } from '../shared/ServiceSections';
import whatsappIntegrationBackground from '../../../assets/service-stickers/whatsapp-inter-imge/whatsappintergrate.png';

export const whatsappIntegrationConfig: ServicePageConfig = {
  serviceName: 'WhatsApp Integration',
  heroTitle: 'REACH CUSTOMERS INSTANTLY WITH WHATSAPP INTEGRATION',
  heroBackgroundImageSrc: whatsappIntegrationBackground,
  heroDescription:
    'Connect your business systems with WhatsApp to manage leads, automate responses, and keep customer conversations fast and organized.',
  statsHeadline: 'WHATSAPP INTEGRATION MAKES SALES, SUPPORT, AND FOLLOW-UP FASTER.',
  statsDescription:
    'We help businesses set up reliable WhatsApp workflows that improve responsiveness, streamline communication, and support better customer experiences.',
  mattersTitle: 'WHY WHATSAPP INTEGRATION MATTERS',
  mattersBullets: [
    'Connect customer conversations with your business workflow',
    'Respond faster with automation and smart routing',
    'Reduce missed leads and delayed follow-ups',
    'Improve customer experience with instant messaging',
    'Support marketing, sales, and service in one channel',
  ],
  benefitHighlights: [
    'Faster customer response',
    'Smarter automation',
    'Better lead handling',
    'Stronger engagement',
    'More efficient support',
  ],
  ctaText:
    'WhatsApp works best when it fits smoothly into your business process. We set up integrations that save time and keep conversations moving.',
  cardsTitle: 'OUR WHATSAPP INTEGRATION SERVICES',
  serviceCards: [
    { title: 'WhatsApp Campaign Setup', items: ['Business API setup', 'Broadcast campaign setup', 'Customer segmentation', 'Contact list management'] },
    { title: 'Promotional Campaigns', items: ['Offer & discount campaigns', 'Product launch promotions', 'Festival marketing campaigns', 'Event promotions'] },
    { title: 'Lead Generation Campaigns', items: ['Click-to-WhatsApp ads', 'Automated lead capture', 'Customer inquiry automation', 'Lead source handling'] },
    { title: 'WhatsApp Automation', items: ['Auto-replies & chatbots', 'Lead qualification automation', 'Order & support automation', 'Workflow triggers'] },
  ],
  processTitle: 'OUR WHATSAPP INTEGRATION PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'Business & Audience Analysis', description: 'We analyze your business goals, audience, and communication strategy before setup begins.' },
    { step: 'Step 2', title: 'Campaign Strategy', description: 'We define the best messaging, workflows, and campaign structure for your WhatsApp use case.' },
    { step: 'Step 3', title: 'Automation Setup', description: 'We configure automations, lead capture flows, and response logic to support smoother communication.' },
    { step: 'Step 4', title: 'Execution & Optimization', description: 'We monitor performance and improve messaging, automations, and flow behavior for better results.' },
  ],
  colors: {
    pageBg: '#9051e0',
    heroBg: '#b6db41',
    accent: '#f7e26b',
    secondaryAccent: '#1f1d59',
    cardBg: '#f3f0ff',
    cardBorder: '#111111',
    cardShadow: '#1f1d59',
    darkText: '#3f2f03',
    lightText: '#413884',
    buttonBg: '#ef6036',
    buttonShadow: '#1f1d59',
  },
};
