import { type ServicePageConfig } from '../shared/ServiceSections';
import smmTitle from '../../../assets/service-stickers/smm-image/smm-title.png';
import smmBackground from '../../../assets/service-stickers/smm-image/Social Media Marketing.png';
import smmCenterImage from '../../../assets/service-stickers/smm-image/center-image.png';

export const socialMediaConfig: ServicePageConfig = {
  serviceName: 'Social Media Marketing',
  heroTitle: 'SOCIAL MEDIA THAT BUILDS ATTENTION AND TRUST',
  heroTitleImageSrc: smmTitle,
  heroBackgroundImageSrc: smmBackground,
  benefitsCenterImageSrc: smmCenterImage,
  heroDescription:
    'Grow your brand with social media strategies that keep your business visible, your audience engaged, and your content aligned with real business goals.',
  statsHeadline: 'YOUR AUDIENCE SCROLLS EVERY DAY. WE MAKE SURE YOUR BRAND STANDS OUT.',
  statsDescription:
    'We help businesses create stronger social presence with content, creative direction, campaign planning, and platform-specific growth strategies.',
  mattersTitle: 'WHY SOCIAL MEDIA MATTERS',
  mattersBullets: [
    'Stay visible where your audience already spends time',
    'Build a stronger brand voice and visual identity',
    'Turn content into awareness, engagement, and leads',
    'Create consistency across important platforms',
    'Support launches, offers, and community growth',
  ],
  benefitHighlights: ['Stronger brand recall', 'Better engagement', 'Consistent posting', 'Audience growth', 'Content that converts'],
  ctaText: 'Social media should feel intentional, not random. We help your brand show up with clarity, consistency, and better-performing content.',
  cardsTitle: 'OUR SOCIAL MEDIA SERVICES',
  serviceCards: [
    { title: 'Content Planning', items: ['Monthly strategy', 'Content pillars', 'Campaign calendars', 'Post direction'] },
    { title: 'Creative Production', items: ['Post concepts', 'Visual storytelling', 'Reel ideas', 'Brand-aligned designs'] },
    { title: 'Platform Management', items: ['Scheduling', 'Captions and hashtags', 'Profile optimization', 'Consistency management'] },
    { title: 'Performance Review', items: ['Content insights', 'Engagement tracking', 'Growth reporting', 'Strategy refinement'] },
  ],
  processTitle: 'OUR SOCIAL MEDIA PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'Brand & Audience Mapping', description: 'We understand your brand voice, audience behavior, and key business goals.' },
    { step: 'Step 2', title: 'Content Strategy Creation', description: 'We shape themes, messaging, and content formats tailored to your platforms.' },
    { step: 'Step 3', title: 'Design, Publish & Manage', description: 'We create content, keep posting consistent, and manage execution smoothly.' },
    { step: 'Step 4', title: 'Measure & Improve', description: 'We review what performs best and adjust the strategy for stronger ongoing growth.' },
  ],
  colors: {
    pageBg: '#ec5d9f',
    heroBg: '#ff93c1',
    accent: '#ffd166',
    secondaryAccent: '#b72668',
    cardBg: '#fff0f7',
    cardBorder: '#111111',
    cardShadow: '#7d1f49',
    darkText: '#4f1832',
    lightText: '#fff7fb',
    buttonBg: '#1d4ed8',
    buttonShadow: '#112d72',
  },
};
