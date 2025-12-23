import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData'; // Import centralized data

const Services = () => {
  // We use servicesData imported from the data file now
  
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Comprehensive solutions to drive your business growth through marketing excellence and smart automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-secondary rounded-xl p-8 border border-primary hover:border-accent transition-all duration-300 group hover:transform hover:-translate-y-2 flex flex-col"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-textPrimary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-textSecondary leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
              </p>
              
              <Link 
                to={`/services/${service.id}`}
                className="flex items-center text-accent font-medium group-hover:text-accentPurple transition-colors mt-auto"
              >
                <span className="mr-2">Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;