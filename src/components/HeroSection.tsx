import { ArrowDown } from "lucide-react";
import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import profilePhoto from "@/assets/ali_yildiz.jpeg";

const HeroSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-20">
      <div className="max-w-4xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-fade-in">
          01 &mdash; Introduction
        </div>

        <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-12 animate-fade-up">
          Engineering data,{" "}
          <span className="italic font-medium text-accent-ink">end&nbsp;to&nbsp;end</span>{" "}
          &mdash; across cloud, code,&nbsp;and&nbsp;teams.
        </h2>

        <div
          className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-10 items-start mb-12 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <img
            src={profilePhoto}
            alt="Ali Yildiz"
            width={460}
            height={460}
            fetchPriority="high"
            decoding="async"
            className="w-32 h-40 sm:w-40 sm:h-52 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm border border-border"
          />
          <div>
            <p className="font-serif italic text-lg text-muted-foreground mb-4">
              A note from the desk of &mdash;
            </p>
            <p className="text-base leading-relaxed text-foreground/85 max-w-md">
              Building scalable data pipelines and cloud architectures across GCP, AWS,
              and Azure. Currently embedded with NIBC via{" "}
              <a
                href="https://www.xebia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors"
              >
                Xebia&nbsp;B.V.
              </a>
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#experience" className="btn-primary inline-flex items-center gap-2">
            Read the dossier
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yildizalicom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Ali Yildiz on LinkedIn"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Linkedin className="w-3.5 h-3.5" />
            Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
