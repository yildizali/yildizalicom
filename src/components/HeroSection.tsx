import { ArrowDown, Mail } from "lucide-react";
import { personalInfo } from "@/data/resume";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(270 60% 62%) 1px, transparent 1px), linear-gradient(90deg, hsl(270 60% 62%) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              {personalInfo.title}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.2s' }}>
            Engineering Data,{' '}
            <span className="text-gradient">End to End</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Senior Data Engineer & Cloud Architect — building scalable pipelines across GCP, AWS, and Azure
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#experience"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ArrowDown className="w-4 h-4" />
              View Experience
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          {/* Name */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground font-mono">{personalInfo.fullName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
