import { Briefcase } from "lucide-react";
import { experiences } from "@/data/resume";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            13+ years spanning software development, data engineering, and cloud architecture across major enterprises.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.startDate}`}
                className="relative pl-12 md:pl-20 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="card-soft">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-1 mb-4">
                    {exp.bullets.slice(0, 3).map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">&#9679;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
