import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-textPrimary">
        <div>Project not found. <Link to="/" className="text-accent underline">Go Home</Link></div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-textSecondary hover:text-accent mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </Link>

        <div className="bg-secondary rounded-2xl p-8 border border-primary mb-12">
          <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-8`}>
            <Icon className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-textPrimary mb-6">{project.title}</h1>
          <p className="text-xl text-textSecondary leading-relaxed">{project.fullDescription}</p>
        </div>

        <div className="bg-primary/50 rounded-xl p-8 border border-secondary">
          <h3 className="text-2xl font-bold text-textPrimary mb-6">Key Features & Results:</h3>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Star className="text-accent mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-textSecondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;