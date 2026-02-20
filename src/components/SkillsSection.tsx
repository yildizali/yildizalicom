import { Code, Cloud, Database, Settings, Award } from "lucide-react";
import { skills, certifications } from "@/data/resume";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code className="w-5 h-5" />,
  'Data Stack': <Database className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Tech: <Settings className="w-5 h-5" />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack data engineer across all three major cloud platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((category, index) => (
            <div
              key={category.category}
              className="card-soft animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary">
                  {categoryIcons[category.category] || <Code className="w-5 h-5" />}
                </span>
                <h3 className="font-bold text-foreground">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{cert.name}</p>
                  <p className="text-muted-foreground text-xs font-mono">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
