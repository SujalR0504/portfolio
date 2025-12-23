import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Project <span className="text-accent">Portfolio</span>
          </h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Automation workflows and marketing systems built to improve efficiency, generate leads, and scale businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-secondary rounded-xl p-8 border border-primary hover:border-accent transition-all duration-300 group flex flex-col"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-textPrimary mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-textSecondary leading-relaxed mb-6 flex-grow">
                {project.shortDescription}
              </p>
              
              <div className="space-y-2 mb-8">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-textSecondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to={`/projects/${project.id}`}
                className="flex items-center text-accent font-medium group-hover:text-accentPurple transition-colors mt-auto"
              >
                <span className="mr-2">View Project Details</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA (Unchanged) */}
        <div className="text-center mt-16">
          <div className="bg-accent/10 rounded-2xl p-8 border border-secondary">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Ready to Transform Your Business?</h3>
            <p className="text-textSecondary mb-6">Let's discuss how automation can accelerate your growth</p>
            <a href="#contact" className="inline-flex items-center btn-neon px-8 py-4 font-semibold space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;