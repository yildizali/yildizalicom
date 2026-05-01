import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { personalInfo } from "@/data/resume";

const SITE_REPO_URL = "https://github.com/yildizali/yildizalicom";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            {personalInfo.fullName}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yildizalicom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground/70">
          Built with React + Vite + Tailwind, deployed via GitHub Pages —{" "}
          <a
            href={SITE_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            view source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
