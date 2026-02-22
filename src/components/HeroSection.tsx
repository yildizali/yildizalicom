import { ArrowDown, Linkedin, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/ali_yildiz.jpeg";

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
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-card">
              <img
                src={profilePhoto}
                alt="Ali Yildiz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 animate-fade-up leading-tight" style={{ animationDelay: '0.2s' }}>
              Ali Yildiz
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Senior Data and Platform Engineer
            </p>

            {/* Company */}
            <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              <a
                href="https://www.xebia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-base">at</span>
                <span className="text-foreground font-semibold text-base">Xebia B.V.</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Engineering Data,{' '}
              <span className="text-gradient">End to End</span>
            </h2>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.45s' }}>
              Building scalable data pipelines and cloud architectures across GCP, AWS, and Azure
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="#experience"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowDown className="w-4 h-4" />
                View Experience
              </a>
              <a
                href="https://www.linkedin.com/in/yildizalicom"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
