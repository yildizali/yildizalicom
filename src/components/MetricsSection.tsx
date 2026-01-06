interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "14+", label: "Years Experience" },
  { value: "15+", label: "Certifications" },
  { value: "3", label: "Cloud Platforms" }
];

const MetricsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-serif text-6xl md:text-7xl font-bold text-primary-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-primary-foreground/80 text-lg font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
