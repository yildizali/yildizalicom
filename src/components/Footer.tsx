import { personalInfo } from "@/data/resume";

const SITE_REPO_URL = "https://github.com/yildizali/yildizalicom";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-16 py-10 border-t border-border">
      <div className="max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          &copy; {new Date().getFullYear()} &middot; {personalInfo.fullName} &middot; Amsterdam
        </p>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          Set in <span className="font-serif italic text-foreground/80">Fraunces</span>{" "}
          &amp; Inter &middot;{" "}
          <a
            href={SITE_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground hover:text-foreground transition-colors"
          >
            colophon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
