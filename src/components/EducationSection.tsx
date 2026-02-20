import { GraduationCap } from "lucide-react";
import { education, languages } from "@/data/resume";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Education entries */}
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <div
                key={`${edu.institution}-${edu.startYear}`}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-bold text-foreground">
                      {edu.degree} — {edu.field}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {edu.startYear}–{edu.endYear}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-foreground mb-4">Languages</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {languages.map((lang) => (
                <span key={lang.language} className="skill-tag">
                  {lang.language} <span className="text-muted-foreground ml-1">({lang.proficiency})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
