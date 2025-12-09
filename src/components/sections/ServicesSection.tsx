import { FileText, AlertTriangle, Scale } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  delay: string;
}

const ServiceCard = ({ icon, title, description, isHighlighted, delay }: ServiceCardProps) => (
  <div 
    className={`
      group relative p-8 lg:p-10 rounded transition-all duration-300 opacity-0 animate-fade-up ${delay}
      ${isHighlighted 
        ? 'bg-navy-light border-2 border-silver/40 shadow-glow' 
        : 'bg-navy-light/50 border border-silver/20 hover:border-silver/40'
      }
    `}
  >
    {isHighlighted && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-silver text-navy text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-full">
          Destaque
        </span>
      </div>
    )}
    
    <div className="text-silver mb-6">
      {icon}
    </div>
    
    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
      {title}
    </h3>
    
    <p className="text-silver leading-relaxed">
      {description}
    </p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Laudos Técnicos",
      description: "Relatórios técnicos detalhados para regularização de imóveis, financiamentos, seguros e processos de compra e venda.",
      isHighlighted: false,
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Inspeções de Alto Risco",
      description: "Avaliação especializada de estruturas com risco potencial, incluindo edifícios antigos, pontes, viadutos e reservatórios.",
      isHighlighted: true,
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Perícias Judiciais",
      description: "Laudos periciais para processos judiciais com rigor técnico e metodológico reconhecido pelos tribunais.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-silver text-sm font-medium tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-up">
            Nossos Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground opacity-0 animate-fade-up animation-delay-100">
            Soluções Especializadas
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={`animation-delay-${(index + 2) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
