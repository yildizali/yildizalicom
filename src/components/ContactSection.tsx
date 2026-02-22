import { Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Together
          </h2>

          <a
            href="https://www.linkedin.com/in/yildizalicom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
