import { type ServicePageConfig } from '../shared/ServiceSections';

export const seoConfig: ServicePageConfig = {
  serviceName: 'SEO',
  heroTitle: 'SEO THAT HELPS YOUR BRAND GET FOUND',
  heroDescription:
    'Build long-term organic growth with SEO strategies that improve rankings, attract qualified traffic, and turn search visibility into steady leads.',
  statsHeadline: 'YOUR CUSTOMERS ARE SEARCHING. WE MAKE SURE THEY FIND YOU FIRST.',
  statsDescription:
    'From technical fixes to content strategy, we help your website earn stronger search visibility and more valuable traffic over time.',
  mattersTitle: 'WHY SEO MATTERS',
  mattersBullets: [
    'Grow organic traffic without depending only on ad spend',
    'Rank for keywords your customers are already searching',
    'Improve website structure, speed, and discoverability',
    'Build trust with stronger search presence',
    'Turn content into a consistent lead channel',
  ],
  benefitHighlights: [
    'Higher search visibility',
    'Better keyword rankings',
    'More qualified traffic',
    'Long-term growth',
    'Stronger authority',
  ],
  ctaText: 'Search traffic compounds over time. Let us build an SEO engine that keeps bringing the right visitors to your business.',
  cardsTitle: 'OUR SEO SERVICES',
  serviceCards: [
    { title: 'Keyword Strategy', items: ['Keyword research', 'Search intent mapping', 'Competitor analysis', 'Opportunity targeting'] },
    { title: 'On-Page SEO', items: ['Metadata optimization', 'Content structure fixes', 'Internal linking', 'Page-level recommendations'] },
    { title: 'Technical SEO', items: ['Site audits', 'Indexing improvements', 'Performance checks', 'Crawlability enhancements'] },
    { title: 'Content Growth', items: ['SEO content planning', 'Landing page ideas', 'Blog strategy', 'Ongoing optimization'] },
  ],
  processTitle: 'OUR SEO PROCESS',
  processSteps: [
    { step: 'Step 1', title: 'SEO Audit & Discovery', description: 'We review your site, current rankings, competitors, and biggest growth opportunities.' },
    { step: 'Step 2', title: 'Keyword & Content Planning', description: 'We define what to target, what to improve, and where new content can win.' },
    { step: 'Step 3', title: 'Technical & On-Page Optimization', description: 'We fix structural issues and optimize important pages for visibility and relevance.' },
    { step: 'Step 4', title: 'Tracking & Growth Iteration', description: 'We monitor performance and keep refining the strategy as rankings and traffic improve.' },
  ],
  colors: {
    pageBg: '#f28c1f',
    heroBg: '#ffb347',
    accent: '#ffd76a',
    secondaryAccent: '#cc5f00',
    cardBg: '#fff4de',
    cardBorder: '#111111',
    cardShadow: '#8a3f00',
    darkText: '#452100',
    lightText: '#fff8ef',
    buttonBg: '#1f3c88',
    buttonShadow: '#10204a',
  },
};
