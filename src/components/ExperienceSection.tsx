import { experiences, yearsOfExperience } from "@/data/resume";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-border"
    >
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          04 &mdash; Career
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          The long arc, in chapters.
        </h2>
        <p className="text-base text-muted-foreground mb-14 max-w-xl">
          {yearsOfExperience}+ years across software, data engineering, and platform
          architecture &mdash; from core banking to cloud-native ML.
        </p>

        <div>
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${exp.startDate}`}
              className="grid grid-cols-1 sm:grid-cols-[110px,1fr] gap-3 sm:gap-8 py-8 border-t border-border first:border-t-2 first:border-foreground animate-fade-up"
              style={{ animationDelay: `${Math.min(index * 0.05, 0.25)}s` }}
            >
              <div>
                <div className="font-mono text-xs tabular-nums text-muted-foreground leading-relaxed">
                  {exp.startDate}
                </div>
                <div className="font-mono text-xs tabular-nums text-muted-foreground/70">
                  &darr; {exp.endDate}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-accent-ink font-medium mb-4">{exp.company}</p>

                <p className="text-sm leading-relaxed text-foreground/80 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {exp.bullets.slice(0, 3).map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-accent-ink mt-2.5 flex-shrink-0 w-3 h-px bg-current" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
