import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData'; // Import the data we just created

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-textPrimary">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-accent hover:underline flex items-center"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-textSecondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="bg-secondary rounded-2xl p-8 sm:p-12 border border-primary mb-12">
          <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-8`}>
            <Icon className="text-white" size={40} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-textSecondary leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary/50 rounded-xl p-8 border border-secondary">
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Key Features</h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-textSecondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary to-primary rounded-xl p-8 border border-secondary flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">Ready to get started?</h3>
            <p className="text-textSecondary mb-8">
              Let's discuss how this service can help grow your business specifically.
            </p>
            <Link
              to="/#contact" // This will need handling in the Home page to scroll
              onClick={() => {
                 navigate('/');
                 setTimeout(() => {
                   const contactSection = document.getElementById('contact');
                   if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                 }, 100);
              }}
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accentPurple transition-colors w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;