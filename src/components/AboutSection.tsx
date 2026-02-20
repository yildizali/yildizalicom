import { aboutMe } from "@/data/resume";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {aboutMe.summary}
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed">
            {aboutMe.biography}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
