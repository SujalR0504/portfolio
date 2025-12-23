import { TrendingUp, Users, Rocket, Settings, Target, Shield } from 'lucide-react';

export const servicesData = [
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    shortDescription: 'Complete digital marketing solutions including strategy, execution, and optimization.',
    color: 'from-accent to-accentPurple',
    fullDescription: 'I don’t just run ads; I build comprehensive digital marketing strategies that align with your business goals. From increasing brand visibility to driving targeted traffic, my approach is data-driven and results-oriented. I focus on optimizing your online presence to ensure you are reaching the right audience at the right time.',
    features: [
      'Strategic Marketing Planning',
      'Search Engine Optimization (SEO)',
      'Paid Ad Campaign Management',
      'Competitor Analysis & Market Research',
      'Performance Analytics & ROI Tracking'
    ]
  },
  {
    id: 'social-media',
    icon: Users,
    title: 'Social Media & LinkedIn Management',
    shortDescription: 'End-to-end social media handling with a focus on brand growth and lead generation.',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Your social media presence is your modern business card. I specialize in building powerful personal and business brands, with a specific expertise in LinkedIn growth. I handle everything from profile optimization and content strategy to community engagement, turning your followers into potential leads.',
    features: [
      'LinkedIn Profile Optimization',
      'Content Calendar & Scheduling',
      'Community Engagement Strategy',
      'Personal Branding Growth',
      'Social Media Analytics'
    ]
  },
  {
    id: 'marketing-automation',
    icon: Rocket,
    title: 'Marketing Automation',
    shortDescription: 'Automation workflows using n8n for lead generation, CRM, and business growth.',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Stop wasting time on repetitive manual tasks. Using powerful tools like n8n, I build custom automation workflows that connect your marketing tools. Whether it is capturing leads from your website, sending automated email sequences, or syncing data to your CRM, I ensure your marketing runs on autopilot.',
    features: [
      'Custom n8n Workflow Design',
      'Automated Email Sequences',
      'CRM Integration (HubSpot, Salesforce)',
      'Lead Scoring & Nurturing',
      'Cross-Platform Data Sync'
    ]
  },
  {
    id: 'business-automation',
    icon: Settings,
    title: 'Business Process Automation',
    shortDescription: 'Custom automation to simplify operations and improve efficiency.',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Efficiency is the key to scaling. I analyze your internal business operations and implement automation to handle time-consuming tasks. From automating client onboarding and invoicing to streamlining project management updates, I help you save hours every week.',
    features: [
      'Operational Workflow Audits',
      'Client Onboarding Automation',
      'Invoicing & Payment Reminders',
      'Data Entry Automation',
      'Project Management Integrations'
    ]
  },
  {
    id: 'lead-generation',
    icon: Target,
    title: 'Lead Generation & Funnels',
    shortDescription: 'Automation-driven lead capture, nurturing, and conversion systems.',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Traffic is useless without conversion. I build high-converting sales funnels that guide visitors from awareness to purchase. By combining persuasive copywriting, optimized landing pages, and smart follow-up systems, I help you maximize your revenue per lead.',
    features: [
      'Sales Funnel Architecture',
      'Landing Page Optimization',
      'Lead Magnet Strategy',
      'Cold Outreach Systems',
      'Conversion Rate Optimization (CRO)'
    ]
  },
  {
    id: 'qa-testing',
    icon: Shield,
    title: 'QA Testing Support',
    shortDescription: 'Knowledge of manual and automation testing to ensure system quality and reliability.',
    color: 'from-teal-500 to-cyan-500',
    fullDescription: 'A buggy product kills trust. With my background in Quality Assurance (QA), I ensure your software, websites, or automation systems work perfectly. I provide manual testing and basic automation scripts to catch bugs early, ensuring a smooth user experience for your customers.',
    features: [
      'Manual Functional Testing',
      'Bug Reporting & Tracking (Jira)',
      'UI/UX Testing',
      'Basic Test Automation Scripts',
      'Cross-Browser Compatibility Checks'
    ]
  }
];
