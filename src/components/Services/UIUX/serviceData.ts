import { type ServicePageConfig } from '../shared/ServiceSections';
import uiuxHeroBg from '../../../assets/service-stickers/ui-image/uiux-bg.png';
import uiuxCenterImage from '../../../assets/service-stickers/ui-image/OBJECTS.png';

export const uiuxConfig: ServicePageConfig = {
  serviceName: 'Web & App Design',
  heroTitle: 'UI UX DESIGN THAT FEELS GOOD AND WORKS HARD',
  heroBackgroundImageSrc: uiuxHeroBg,
  benefitsCenterImageSrc: uiuxCenterImage,
  heroDescription:
    'Create digital experiences that are easier to use, easier to trust, and better aligned with how real users move through your product.',
  statsHeadline: 'GOOD DESIGN IS NOT JUST HOW IT LOOKS. IT SHAPES HOW USERS FEEL AND ACT.',
  statsDescription:
    'We design interfaces and user journeys that improve clarity, reduce friction, and help your website or app convert more effectively.',
  mattersTitle: 'WHY UI UX MATTERS',
  mattersBullets: [
    'Make products easier to understand and navigate',
    'Reduce friction across important user journeys',
    'Build trust with thoughtful visual design',
    'Support conversion goals through smarter interfaces',
    'Create a stronger overall customer experience',
  ],
  benefitHighlights: ['Clearer user flows', 'Better usability', 'More polished visuals', 'Higher conversions', 'Stronger product trust'],
  ctaText: 'Design should make things simpler, sharper, and more effective. We help you shape user experiences that look great and perform better.',
  cardsTitle: 'OUR UI UX SERVICES',
  serviceCards: [
    { title: 'User Research', items: ['Audience understanding', 'Pain-point discovery', 'Journey mapping', 'Insight gathering'] },
    { title: 'Wireframes & Flows', items: ['Information architecture', 'Screen planning', 'Navigation structure', 'Low-fidelity concepts'] },
    { title: 'Visual Design', items: ['UI systems', 'Responsive screens', 'Brand-aligned styling', 'Interaction direction'] },
    { title: 'Prototyping & Handoff', items: ['Interactive prototypes', 'Usability improvements', 'Design specs', 'Developer-ready files'] },
  ],
  processTitle: 'OUR UI UX PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'Research & Discovery', description: 'We learn about your users, business goals, and product challenges before designing.' },
    { step: 'Step 2', title: 'Structure & Experience Planning', description: 'We define journeys, flows, wireframes, and interface priorities.' },
    { step: 'Step 3', title: 'UI Design & Prototype', description: 'We craft polished screens and interactions that match your brand and product goals.' },
    { step: 'Step 4', title: 'Refine & Deliver', description: 'We iterate based on feedback and prepare the final design system for implementation.' },
  ],
  colors: {
    pageBg: '#2563eb',
    heroBg: '#60a5fa',
    accent: '#f8d34f',
    secondaryAccent: '#1d4ed8',
    cardBg: '#eff6ff',
    cardBorder: '#111111',
    cardShadow: '#153a8a',
    darkText: '#102c68',
    lightText: '#f7fbff',
    buttonBg: '#ea580c',
    buttonShadow: '#7c2d12',
  },
};
