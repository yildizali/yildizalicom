import { yearsOfExperience, certifications } from "@/data/resume";

const metrics = [
  { value: `${yearsOfExperience}`, suffix: "+", label: "Years in the field" },
  { value: `${certifications.length}`, suffix: "", label: "Certifications" },
  { value: "3", suffix: "", label: "Cloud platforms" },
];

const MetricsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-b border-border">
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
          02 &mdash; At a glance
        </div>
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="font-serif text-5xl md:text-7xl leading-none text-foreground mb-3 flex items-baseline">
                <span className="tabular-nums">{m.value}</span>
                {m.suffix && (
                  <span className="text-accent-ink text-3xl md:text-4xl ml-0.5">
                    {m.suffix}
                  </span>
                )}
              </div>
              <div className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
