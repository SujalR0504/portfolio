import { Target, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Growth-Focused',
      description: 'Strategic approach to sustainable business growth'
    },
    {
      icon: Rocket,
      title: 'Automation-Driven',
      description: 'Streamlined processes for maximum efficiency'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'End-to-end business responsibility and support'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Technical expertise with QA testing background'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-textPrimary mb-6">
              Marketing, Automation & Business Growth Specialist
            </h3>
            
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              I am a multi-skilled marketing and automation specialist with strong expertise in 
              digital marketing, social media management, LinkedIn growth, and business automation. 
              I design automation workflows that save time, generate leads, and improve business performance.
            </p>
            
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              I also have knowledge of software QA testing, both manual and automation, which helps 
              me deliver reliable and scalable systems that businesses can depend on for growth.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Growth Strategy', 'Marketing Automation', 'Lead Generation', 'QA Testing'].map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded-lg border border-secondary hover:border-accent transition-all duration-300 group"
              >
                <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h4 className="text-textPrimary font-semibold mb-2">{item.title}</h4>
                <p className="text-textSecondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;