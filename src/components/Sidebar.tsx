import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { personalInfo } from "@/data/resume";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Career" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = () => {
  const [firstName, ...rest] = personalInfo.fullName.split(" ");
  const lastName = rest.join(" ");

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-72 lg:w-80 md:flex-shrink-0 md:border-r md:border-border bg-background">
      <div className="px-6 md:px-8 pt-10 pb-8 md:py-12 md:h-full md:flex md:flex-col">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Portfolio &middot; Vol.&nbsp;II
        </div>

        <h1 className="font-serif text-4xl lg:text-5xl leading-[0.95] text-foreground mb-3">
          {firstName}
          <br />
          {lastName}
        </h1>

        <p className="font-serif italic text-base text-muted-foreground mb-1">
          Senior Data &amp; Platform Engineer
        </p>
        <p className="font-mono text-[11px] tracking-wider text-muted-foreground/80">
          Amsterdam, NL &middot; {new Date().getFullYear()}
        </p>

        <nav className="hidden md:block mt-10">
          <ul className="space-y-2.5">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} className="sidebar-link group">
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground/60 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border-b border-transparent group-hover:border-foreground transition-colors">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 md:mt-auto md:pt-10">
          <div className="hairline mb-5 hidden md:block" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yildizalicom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Ali Yildiz on LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
