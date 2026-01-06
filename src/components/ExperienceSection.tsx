import serversIllustration from "@/assets/servers-illustration.png";

interface ExperienceItem {
  number: number;
  company: string;
  role: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    number: 1,
    company: "Xebia Data",
    role: "Senior Data Engineer",
    description: "Spearheaded IoT data integration for Irish Railways. Designed scalable pipelines using Apache NiFi, Grafana dashboards, and TimescaleDB."
  },
  {
    number: 2,
    company: "ING",
    role: "Data Engineer",
    description: "Built sustainability reports on Azure K8s. Developed PySpark pipelines with Airflow and Kedro, optimizing performance across the GAIA team."
  },
  {
    number: 3,
    company: "Coca-Cola İçecek",
    role: "Big Data Engineer",
    description: "Architected ML and Big Data solutions on GCP and AWS. Defined data structures and led hands-on pipeline development."
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            14+ years spanning software development and data engineering across prestigious global organizations.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Experience List */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.number}
                className="flex gap-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="number-badge">
                    {exp.number}
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {exp.company} — <span className="text-primary">{exp.role}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Illustration */}
          <div className="hidden lg:block">
            <img 
              src={serversIllustration} 
              alt="Server infrastructure" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
