import React from 'react';
import { Linkedin, Mail, Phone, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="text-accent" size={24} />
              <span className="text-2xl font-bold text-textPrimary">
                Sujal <span className="text-accent">Rathore</span>
              </span>
            </div>
            <p className="text-textSecondary mb-4">
              Driving Business Growth with Marketing, Automation & Smart Systems
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sujal-rathore-391351248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-textSecondary hover:text-accent hover:bg-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto: sujalrathore970@gmail.com"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-textSecondary hover:text-accent hover:bg-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>

             
             <a
                href="phone no: +919009055556"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-textSecondary hover:text-accent hover:bg-primary transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-textPrimary font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Digital Marketing',
                'Marketing Automation',
                'Social Media Management',
                'Lead Generation',
                'Business Automation',
                'QA Testing'
              ].map((service) => (
                <li key={service}>
                  <span className="text-textSecondary hover:text-accent transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-textPrimary font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-textSecondary">
                <span className="text-textPrimary">Email:</span> sujalrathore970@gmail.com
              </p>
              <p className="text-textSecondary">
                <span className="text-textPrimary">Response:</span> Within 24 hours
              </p>
              <p className="text-textSecondary">
                Ready to scale your business with automation?
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-textSecondary">
            © 2025 Sujal Rathore. All rights reserved. Built with passion for business growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;