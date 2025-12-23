import { Code, Rocket, TrendingUp } from 'lucide-react';

export const skillsData = [
  {
    id: 'marketing',
    title: 'Marketing',
    icon: TrendingUp,
    color: 'from-accent to-accentPurple',
    shortDescription: 'Strategic digital marketing, social media growth, and content strategy.',
    fullDescription: 'Marketing is more than just running ads; it is about storytelling and data. I specialize in creating holistic marketing strategies that combine organic growth (SEO, Content) with paid acquisition. My focus is on ROI-driven campaigns that scale with your business.',
    skills: [
      'Digital Marketing Strategy',
      'Social Media Marketing (LinkedIn & X)',
      'Content Strategy & Copywriting',
      'Lead Generation Funnels',
      'Market Research & Competitor Analysis'
    ]
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: Rocket,
    color: 'from-accent to-accentPurple',
    shortDescription: 'Streamlining business logic with n8n, CRM integrations, and workflows.',
    fullDescription: 'I build intelligent automation systems that act as a 24/7 employee for your business. Using tools like n8n and Zapier, I connect your disparate software (CRM, Email, Sheets) to create seamless workflows that save time and reduce human error.',
    skills: [
      'n8n Advanced Workflows',
      'Business Process Automation (BPA)',
      'CRM Automation (HubSpot/Salesforce)',
      'API Integrations & Webhooks',
      'Chatbot Logic Design'
    ]
  },
  {
    id: 'technical',
    title: 'Technical',
    icon: Code,
    color: 'from-accent to-accentPurple',
    shortDescription: 'Programming and QA expertise to ensure robust and bug-free solutions.',
    fullDescription: 'My technical background allows me to go deeper than most marketers. I can write custom scripts in Python to handle data, use Postman to test APIs before integrating them, and apply rigorous QA testing methodologies to ensure every system I build is bulletproof.',
    skills: [
      'Python Scripting',
      'Java & Object-Oriented Programming',
      'API Testing (Postman)',
      'Manual & Automated QA Testing',
      'Jira & Agile Methodologies'
    ]
  }
];