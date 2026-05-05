import { skills } from "@/data/resume";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Skills
        </h2>
      </div>

      <ul className="space-y-6">
        {skills.map((category) => (
          <li key={category.category} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 sm:pt-1.5">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="skill-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
