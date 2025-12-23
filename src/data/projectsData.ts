import { Rocket, TrendingUp, Users, Settings } from 'lucide-react';

export const projectsData = [
  {
    id: 'marketing-workflows',
    icon: Rocket,
    title: 'Marketing Automation Workflows',
    shortDescription: 'Custom n8n workflows for lead generation, email marketing, and customer journey automation',
    color: 'from-accent to-accentPurple',
    fullDescription: 'I designed a complex lead scoring and nurturing system using n8n. The system automatically captures leads from web forms, scores them based on engagement (email opens, clicks), and routes high-value leads directly to the sales team via Slack while nurturing others with email sequences.',
    features: ['Lead scoring systems', 'Email sequences', 'CRM integration', 'Performance tracking']
  },
  {
    id: 'growth-systems',
    icon: TrendingUp,
    title: 'Growth Marketing Systems',
    shortDescription: 'End-to-end marketing systems designed to scale businesses and increase revenue',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Developed a complete growth engine for a client that integrated paid ads (Meta/Google) with a high-converting landing page. We set up A/B testing for headlines and automated the follow-up process, resulting in a 40% increase in conversion rates over 3 months.',
    features: ['Funnel optimization', 'Conversion tracking', 'A/B testing', 'ROI analysis']
  },
  {
    id: 'social-automation',
    icon: Users,
    title: 'Social Media Automation',
    shortDescription: 'Automated social media management and LinkedIn growth strategies',
    color: 'from-accent to-accentPurple',
    fullDescription: 'Created a content distribution engine that takes a single blog post and automatically generates LinkedIn posts, Tweets, and newsletter drafts using AI APIs. This system drastically reduced content creation time while maintaining high engagement.',
    features: ['Content scheduling', 'Engagement automation', 'Analytics reporting', 'Lead capture']
  },
  {
    id: 'business-optimization',
    icon: Settings,
    title: 'Business Process Optimization',
    shortDescription: 'Streamlined business operations through intelligent automation and QA processes',
    color: 'from-teal-500 to-cyan-500',
    fullDescription: 'Automated the entire client onboarding process for an agency. Once a contract is signed, the system automatically generates invoices, creates project folders in Drive, invites the client to Slack, and creates tasks in Jira—removing 2 hours of manual admin work per client.',
    features: ['Workflow automation', 'Quality assurance', 'Process documentation', 'System integration']
  }
];