import { education, languages } from "@/data/resume";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-border"
    >
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          06 &mdash; Schooling &amp; tongues
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
          Education.
        </h2>

        <ol className="border-t border-border mb-16">
          {education.map((edu, index) => (
            <li
              key={`${edu.institution}-${edu.startYear}`}
              className="grid grid-cols-1 sm:grid-cols-[110px,1fr] gap-2 sm:gap-8 py-6 border-b border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="font-mono text-xs tabular-nums text-muted-foreground">
                {edu.startYear}&ndash;{edu.endYear}
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground leading-tight">
                  {edu.degree} &middot; {edu.field}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
              </div>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="font-serif italic text-lg text-foreground mb-4">Languages</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
            {languages.map((lang) => (
              <li key={lang.language} className="text-foreground/85">
                {lang.language}
                <span className="text-muted-foreground ml-2">({lang.proficiency})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
