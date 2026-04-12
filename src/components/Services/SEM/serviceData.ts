import { type ServicePageConfig } from '../shared/ServiceSections';
import semCenterImage from '../../../assets/service-stickers/sem-image/OBJECTS.png';
import semHeroBg from '../../../assets/service-stickers/sem-image/sem-bg.png';

export const semConfig: ServicePageConfig = {
  serviceName: 'Search Engine Marketing',
  heroTitle: 'SEM CAMPAIGNS THAT TURN CLICKS INTO CUSTOMERS',
  heroPattern: 'burst',
  heroBackgroundImageSrc: semHeroBg,
  benefitsCenterImageSrc: semCenterImage,
  heroDescription:
    'Launch performance-driven paid search campaigns that put your brand in front of ready-to-buy users and keep your budget focused on results.',
  statsHeadline: 'PAID SEARCH WORKS FAST WHEN THE STRATEGY IS BUILT RIGHT.',
  statsDescription:
    'We create and optimize search campaigns that improve visibility, attract high-intent traffic, and drive more conversions from every click.',
  mattersTitle: 'WHY SEM MATTERS',
  mattersBullets: [
    'Reach high-intent customers at the exact moment they search',
    'Generate leads faster than long-term-only channels',
    'Control spend with smart targeting and optimization',
    'Test offers, landing pages, and audiences quickly',
    'Scale what works with clearer campaign data',
  ],
  benefitHighlights: ['Faster lead generation', 'High-intent traffic', 'Smarter ad spend', 'Better ROI focus', 'Measurable conversions'],
  ctaText: 'Search ads can create immediate momentum. We help you build campaigns that are sharper, leaner, and designed to convert.',
  cardsTitle: 'OUR SEM SERVICES',
  serviceCards: [
    { title: 'Campaign Setup', items: ['Google Ads account structure', 'Keyword targeting', 'Ad group planning', 'Conversion tracking'] },
    { title: 'Ad Creation', items: ['Search ad copywriting', 'Offer positioning', 'Creative testing', 'Extension setup'] },
    { title: 'Optimization', items: ['Bid adjustments', 'Negative keyword control', 'Audience refinement', 'Performance tuning'] },
    { title: 'Reporting', items: ['Lead tracking', 'Budget insights', 'ROI analysis', 'Ongoing recommendations'] },
  ],
  processTitle: 'OUR SEM PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'Business & Offer Analysis', description: 'We identify your goals, ideal audience, and the offers worth promoting first.' },
    { step: 'Step 2', title: 'Campaign Architecture', description: 'We build campaigns, ad groups, and keyword clusters around intent and relevance.' },
    { step: 'Step 3', title: 'Launch & Optimization', description: 'We launch the ads, monitor performance, and quickly refine bids, copy, and targeting.' },
    { step: 'Step 4', title: 'Scale Winning Campaigns', description: 'We double down on what converts best while trimming waste and improving return on spend.' },
  ],
  colors: {
    pageBg: '#e54b4b',
    heroBg: '#FFD920',
    accent: '#ffd166',
    secondaryAccent: '#a61e1e',
    cardBg: '#FFFFFF',
    cardBorder: '#111111',
    cardShadow: '#751515',
    darkText: '#481010',
    lightText: '#fff7f7',
    buttonBg: '#6d28d9',
    buttonShadow: '#3b136f',
  },
};
