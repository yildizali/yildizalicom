import { Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/resume";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Open to new opportunities and interesting data challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {personalInfo.phone && (
            <p className="mt-6 text-sm text-muted-foreground font-mono">
              {personalInfo.phone}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
