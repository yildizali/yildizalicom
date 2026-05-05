import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/resume";

const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Contact
        </h2>
      </div>

      <p className="text-slate-400">
        Open to interesting conversations about data platforms, cloud
        architecture, and pipelines at scale.
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="btn-outline mt-6"
      >
        Say hello
        <ExternalLink aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
};

export default ContactSection;
