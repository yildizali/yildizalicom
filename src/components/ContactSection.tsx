import { LinkedinIcon as Linkedin } from "@/components/icons/LinkedinIcon";
import { GithubIcon as Github } from "@/components/icons/GithubIcon";
import { personalInfo } from "@/data/resume";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Together
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
};

export default ContactSection;
