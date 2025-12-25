import { Scan, Radar, Thermometer } from "lucide-react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const TechCard = ({ icon, title, description, delay }: TechCardProps) => (
  <div className={`group text-center p-8 opacity-0 animate-fade-up ${delay}`}>
    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-silver/30 rounded-lg group-hover:border-silver transition-colors duration-300">
      <div className="text-silver group-hover:text-silver-light transition-colors duration-300">
        {icon}
      </div>
    </div>
    <h3 className="font-display text-xl font-semibold text-card-foreground mb-4">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </div>
);

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Análise Não Destrutiva",
      description: "Avaliação da integridade estrutural por meio de ensaios não destrutivos (como ultrassom e esclerometria), aplicada à elaboração de laudos técnicos de engenharia civil, laudos de vistoria e pareceres técnicos.",
    },
    {
      icon: <Radar className="w-8 h-8" />,
      title: "Varredura a Laser 3D",
      description: "Modelagem e varredura a laser 3D para identificação de deformações, deslocamentos e interferências, fornecendo base confiável para laudos periciais de engenharia civil, relatórios técnicos e perícias judiciais.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Termografia Infravermelha",
      description: "Uso de termografia para detecção de umidade, infiltrações, falhas de vedação e anomalias em sistemas construtivos, garantindo laudos de engenharia civil mais completos em vistorias de imóveis e avaliações técnicas.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
            Tecnologia Aplicada a Laudos Técnicos e Perícias em Engenharia Civil
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Utilizamos métodos de inspeção e análise que aumentam a precisão dos laudos técnicos de engenharia civil, laudos periciais e relatórios técnicos.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
