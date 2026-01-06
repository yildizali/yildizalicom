import { Linkedin, Globe } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
        <img 
          src={heroIllustration} 
          alt="Data engineer workspace" 
          className="w-full h-full object-contain object-right"
        />
      </div>
      
      <div className="section-container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Senior Data Engineer
            </span>
          </div>
          
          {/* Location */}
          <p className="text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Amsterdam, Netherlands
          </p>
          
          {/* Name */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Ali Yildiz, MSc
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Building Scalable ML & Big Data Pipelines | Transforming data into actionable insights with cutting-edge technologies
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://linkedin.com/in/yildizalicom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a 
              href="#" 
              className="btn-outline inline-flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
