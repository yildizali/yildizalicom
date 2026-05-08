import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { personalInfo } from "@/data/resume";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          07 &mdash; Closing
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
          Let&rsquo;s build something{" "}
          <span className="italic text-accent-ink">that ships.</span>
        </h2>
        <p className="text-base text-muted-foreground max-w-md mb-10">
          Open to platform work, data architecture, and senior engineering roles in EU.
          Best reached on LinkedIn.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/yildizalicom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
