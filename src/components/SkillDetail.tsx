import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const SkillDetail = () => {
  const { id } = useParams();
  
  // Scroll to top when page loads
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const skill = skillsData.find(s => s.id === id);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-textPrimary">
        <div>Skill not found. <Link to="/" className="text-accent underline">Go Home</Link></div>
      </div>
    );
  }

  const Icon = skill.icon;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-textSecondary hover:text-accent mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </Link>

        <div className="bg-secondary rounded-2xl p-8 border border-primary mb-12">
          <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-8`}>
            <Icon className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-textPrimary mb-6">{skill.title}</h1>
          <p className="text-xl text-textSecondary leading-relaxed">{skill.fullDescription}</p>
        </div>

        <div className="bg-primary/50 rounded-xl p-8 border border-secondary">
          <h3 className="text-2xl font-bold text-textPrimary mb-6">Core Competencies</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {skill.skills.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-secondary p-4 rounded-lg border border-primary">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-textSecondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;