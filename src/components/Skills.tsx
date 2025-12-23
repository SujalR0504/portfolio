import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const whyChooseMe = [
    'Growth-focused approach',
    'Automation-driven execution',
    'Technical + marketing expertise',
    'End-to-end business responsibility',
    'Scalable and reliable solutions'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="bg-primary rounded-xl p-8 border border-secondary hover:border-accent transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-textPrimary mb-4">{category.title}</h3>
              <p className="text-textSecondary mb-6 flex-grow">{category.shortDescription}</p>
              
              <div className="space-y-3 mb-8">
                {category.skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="bg-secondary px-4 py-2 rounded-lg border border-primary">
                    <span className="text-textSecondary text-sm">{skill}</span>
                  </div>
                ))}
                {category.skills.length > 3 && (
                  <p className="text-xs text-textSecondary pl-1">+ {category.skills.length - 3} more skills</p>
                )}
              </div>

              <Link 
                to={`/skills/${category.id}`}
                className="inline-flex items-center text-accent hover:text-accentPurple font-medium transition-colors mt-auto"
              >
                View Expertise <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section (Unchanged) */}
        <div className="accent-gradient-20 rounded-2xl p-8 border border-secondary">
          <h3 className="text-3xl font-bold text-textPrimary text-center mb-8">
            Why Choose <span className="text-accent">Me?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseMe.map((reason, index) => (
              <div key={index} className="bg-primary/50 backdrop-blur-sm rounded-lg p-6 border border-secondary">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-textSecondary font-medium">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;