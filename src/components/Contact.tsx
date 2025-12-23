import React, { useState } from 'react';
import { Mail, Linkedin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Let's automate your business and scale your growth. Ready to transform your operations?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-textPrimary mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-textSecondary text-sm">Email</p>
                  <p className="text-textPrimary font-medium">sujalrathore970@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-textSecondary text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/sujal-rathore-391351248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentPurple transition-colors font-medium"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-textSecondary text-sm">Response Time</p>
                  <p className="text-textPrimary font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Services Summary */}
            <div className="bg-primary rounded-xl p-6 border border-secondary">
              <h4 className="text-lg font-semibold text-textPrimary mb-4">What I Can Help With:</h4>
              <div className="space-y-2">
                {[
                  'Marketing Strategy & Execution',
                  'Business Process Automation',
                  'Lead Generation Systems',
                  'Social Media Management',
                  'CRM & Workflow Optimization'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-textSecondary text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary rounded-xl p-8 border border-secondary">
            <h3 className="text-2xl font-bold text-textPrimary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-textSecondary text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-primary rounded-lg px-4 py-3 text-textPrimary focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textSecondary text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-primary rounded-lg px-4 py-3 text-textPrimary focus:border-accent focus:outline-none transition-colors"
                    placeholder="xyz@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-textSecondary text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-primary rounded-lg px-4 py-3 text-textPrimary focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-textSecondary text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-secondary border border-primary rounded-lg px-4 py-3 text-textPrimary focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project and how I can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-neon flex items-center justify-center space-x-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;