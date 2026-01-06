import { Code, Cloud, Radio, Database, GraduationCap, Award } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Languages",
    items: ["Spark", "Scala", "Python", "Java"]
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud",
    items: ["GCP", "AWS", "Azure", "OpenShift"]
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: "Streaming",
    items: ["Kafka", "NiFi", "Airflow"]
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Databases",
    items: ["Oracle", "SQL Server", "MongoDB", "TimescaleDB"]
  }
];

const credentials = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "MSc Computer Engineering",
    subtitle: "Data Mining Focus"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Databricks Certified",
    subtitle: "Data Engineer Professional"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Soda Certified",
    subtitle: "Cloud Fundamentals"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise & Credentials
          </h2>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div className="card-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Core Skills
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary">{category.icon}</span>
                    <span className="font-semibold text-foreground">{category.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div className="card-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Education & Certifications
            </h3>
            
            <div className="space-y-6">
              {credentials.map((cred, index) => (
                <div 
                  key={cred.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cred.title}</h4>
                    <p className="text-muted-foreground text-sm">{cred.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
