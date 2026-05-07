import { ExternalLink } from "lucide-react";
import { certifications, education, languages, personalInfo } from "@/data/resume";

const TOP_CERTS = 5;

const EducationSection = () => {
  const featured = certifications.slice(0, TOP_CERTS);
  const remainder = certifications.length - featured.length;

  return (
    <section
      id="education"
      aria-label="Education and credentials"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Education
        </h2>
      </div>

      <ul className="space-y-3">
        {education.map((edu) => (
          <li
            key={`${edu.institution}-${edu.startYear}`}
            className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
          >
            <div>
              <span className="text-zinc-200">
                {edu.degree} · {edu.field}
              </span>
              <span className="block text-sm text-zinc-500">{edu.institution}</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-wide text-zinc-500">
              {edu.startYear}–{edu.endYear}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Certifications
        </h3>
        <ul className="mt-4 space-y-2">
          {featured.map((cert) => (
            <li
              key={cert.name}
              className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="text-sm text-zinc-300">{cert.name}</span>
              <span className="font-mono text-xs text-zinc-500">{cert.date}</span>
            </li>
          ))}
        </ul>
        {remainder > 0 && (
          <a
            href={`https://www.${personalInfo.linkedin}/details/certifications/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center text-sm font-medium text-zinc-300 transition-colors hover:text-amber-300 focus-visible:text-amber-300"
          >
            View {remainder} more on LinkedIn
            <ExternalLink
              aria-hidden="true"
              className="ml-1 h-4 w-4 shrink-0 transition motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
            />
          </a>
        )}
      </div>

      <div className="mt-12">
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Languages
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-300">
          {languages.map((lang, idx) => (
            <li key={lang.language} className="flex items-center gap-2">
              <span>
                {lang.language}{" "}
                <span className="text-zinc-500">({lang.proficiency})</span>
              </span>
              {idx < languages.length - 1 && (
                <span aria-hidden="true" className="text-zinc-700">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationSection;
