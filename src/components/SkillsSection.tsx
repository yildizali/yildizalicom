import { skills, certifications } from "@/data/resume";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-t border-border"
    >
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          05 &mdash; Stack
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
          Tools of the trade.
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-20">
          {skills.map((category, index) => (
            <div
              key={category.category}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <h3 className="font-serif italic text-lg text-foreground mb-3">
                {category.category}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                {category.skills.map((s, i) => (
                  <span key={s}>
                    {s}
                    {i < category.skills.length - 1 && (
                      <span className="text-foreground/30 mx-1.5">&middot;</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="font-serif italic text-lg text-foreground">Certifications</h3>
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {String(certifications.length).padStart(2, "0")} total
            </span>
          </div>
          <ol className="border-t border-border">
            {certifications.map((cert, index) => (
              <li
                key={cert.name}
                className="grid grid-cols-[36px,1fr,auto] gap-4 py-3 items-baseline border-b border-border animate-fade-up"
                style={{ animationDelay: `${Math.min(index * 0.03, 0.25)}s` }}
              >
                <span className="font-mono text-xs tabular-nums text-muted-foreground/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/90">{cert.name}</span>
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {cert.date}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
