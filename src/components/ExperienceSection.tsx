import { ExternalLink } from "lucide-react";
import { experiences } from "@/data/resume";

const yearOf = (date: string) => {
  if (date.toLowerCase() === "present") return "Present";
  return date.split(" ")[0];
};

const formatRange = (start: string, end: string) => {
  const s = yearOf(start);
  const e = yearOf(end);
  return s === e ? s : `${s} — ${e}`;
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Experience
        </h2>
      </div>

      <ol className="group/list">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.startDate}`} className="mb-12">
            <div
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgb(161_161_170/0.1)]" />

              <header
                className="z-10 mb-2 mt-1 text-xs font-mono uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label={formatRange(exp.startDate, exp.endDate)}
              >
                {formatRange(exp.startDate, exp.endDate)}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-200">
                  <span>
                    <span className="inline-flex items-baseline font-medium leading-tight text-zinc-200 group-hover:text-amber-300 group-focus-visible:text-amber-300">
                      <span>
                        {exp.title}{" "}
                        <span className="inline-block">
                          ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ExternalLink
                              aria-hidden="true"
                              className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px opacity-0 transition motion-reduce:transition-none group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
                            />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-normal text-zinc-400">
                  {exp.description}
                </p>

                {exp.techStack.length > 0 && (
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.techStack.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <span className="tech-chip">{tech}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
