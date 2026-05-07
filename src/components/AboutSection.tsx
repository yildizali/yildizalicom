import { aboutMe, experiences, yearsOfExperience } from "@/data/resume";

const metrics = [
  { value: `${yearsOfExperience}+`, label: "Years of experience" },
  { value: `${experiences.length}+`, label: "Enterprise clients" },
  { value: "3", label: "Cloud platforms" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          About
        </h2>
      </div>

      <div className="space-y-4 text-zinc-400">
        <p>{aboutMe.summary}</p>
        <p>{aboutMe.biography}</p>
      </div>

      <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {metric.label}
            </dt>
            <dd className="mt-2 font-mono text-3xl font-semibold text-zinc-100 sm:text-4xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default AboutSection;
