import { Scan, Radar, Thermometer } from "lucide-react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const TechCard = ({ icon, title, description, delay }: TechCardProps) => (
  <div className={`group text-center p-8 lg:p-10 bg-card rounded-lg border border-border hover:border-silver/40 transition-all duration-300 opacity-0 animate-fade-up ${delay}`}>
    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-silver/30 rounded-lg group-hover:border-silver transition-colors duration-300">
      <div className="text-silver group-hover:text-silver-light transition-colors duration-300">
        {icon}
      </div>
    </div>
    <h3 className="font-sans text-xl font-semibold text-card-foreground mb-4">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Scan className="w-8 h-8" aria-hidden="true" />,
      title: "Análise Não Destrutiva",
      description: "Ensaios não destrutivos (ultrassom, esclerometria) para laudos técnicos e vistorias estruturais.",
    },
    {
      icon: <Radar className="w-8 h-8" aria-hidden="true" />,
      title: "Varredura a Laser 3D",
      description: "Modelagem 3D para identificação de deformações em laudos periciais e perícias judiciais.",
    },
    {
      icon: <Thermometer className="w-8 h-8" aria-hidden="true" />,
      title: "Termografia Infravermelha",
      description: "Detecção de umidade e infiltrações para vistorias e avaliações de imóveis completas.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
            Tecnologia Aplicada a Laudos de Engenharia Civil
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Métodos de inspeção que aumentam a precisão dos laudos.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.title}
              {...tech}
              delay={`animation-delay-${(index + 2) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;