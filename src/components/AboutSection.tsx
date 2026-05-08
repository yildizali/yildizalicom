import { aboutMe } from "@/data/resume";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-3xl">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
          03 &mdash; About
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
          On taking the helm.
        </h2>
        <p className="text-lg leading-relaxed text-foreground/85 mb-6 drop-cap">
          {aboutMe.summary}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          {aboutMe.biography}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
