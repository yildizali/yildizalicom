import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { useActiveSection } from "@/hooks/use-active-section";
import { personalInfo } from "@/data/resume";
import profilePhoto from "@/assets/ali_yildiz.jpeg";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <img
          src={profilePhoto}
          alt="Ali Yildiz"
          width={460}
          height={460}
          fetchPriority="high"
          decoding="async"
          className="mb-6 h-24 w-24 rounded-full object-cover ring-1 ring-slate-700"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Ali Yildiz
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior Data and Platform Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Building large-scale data platforms and pipelines for enterprise teams.
        </p>

        <nav className="nav mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul className="w-max">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center py-3"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none
                        ${
                          isActive
                            ? "w-16 bg-slate-200"
                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                        }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors motion-reduce:transition-none
                        ${
                          isActive
                            ? "text-slate-200"
                            : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                        }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-slate-500 transition-colors hover:text-slate-200 focus-visible:text-slate-200"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={`https://www.${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-500 transition-colors hover:text-slate-200 focus-visible:text-slate-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
