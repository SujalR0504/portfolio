import { ArrowRight, Rocket, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-primary to-background flex items-center justify-center relative overflow-hidden">
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/60 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Rocket className="text-accent" size={24} />
              <span className="text-accent font-semibold">
                Marketing & Automation Specialist
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-textPrimary mb-6 leading-tight">
              I Help Businesses Grow with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentPurple">
                Marketing & Automation
              </span>
            </h1>

            <p className="text-xl text-textSecondary mb-8 leading-relaxed">
              End-to-end digital marketing, social media management, and automation
              workflows to scale businesses faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-neon px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Let's Grow Your Business</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <TrendingUp size={20} />
                <span>View Services</span>
              </a>
            </div>
          </div>

          {/* Avatar / Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Reduced Image Size */}
              <div className="w-72 h-72 bg-accent rounded-full p-1">
                <div className="w-full h-full bg-primary rounded-full flex items-center justify-center overflow-hidden">
                  {/* Updated image path to avtar.png in public root */}
                  <img
                    src="/avtar.png"
                    alt="Sujal Rathore"
                    className="w-full h-full object-cover object-top scale-100"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-lg shadow-lg animate-bounce">
                <Rocket size={24} />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-accentPurple text-white p-3 rounded-lg shadow-lg animate-bounce delay-500">
                <TrendingUp size={24} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;