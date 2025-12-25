import { FileText, Building, Landmark, Scale } from "lucide-react";

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
      group relative p-8 lg:p-10 rounded-lg transition-all duration-300 opacity-0 animate-fade-up ${delay}
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
    
    <h3 className="font-sans text-xl lg:text-2xl font-semibold text-foreground mb-4">
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
      icon: <FileText className="w-10 h-10" aria-hidden="true" />,
      title: "Laudos Técnicos de Engenharia Civil",
      description: "Laudo técnico e relatório técnico para regularização, reformas, comprovação de estabilidade e atendimento a órgãos públicos.",
      isHighlighted: false,
    },
    {
      icon: <Building className="w-10 h-10" aria-hidden="true" />,
      title: "Vistorias e Avaliação de Imóveis",
      description: "Vistoria técnica e laudo de avaliação de imóvel para compra/venda, financiamentos, seguros e atualização patrimonial.",
      isHighlighted: true,
    },
    {
      icon: <Landmark className="w-10 h-10" aria-hidden="true" />,
      title: "Laudos para Caixa e Bancos",
      description: "Laudo de engenharia para Caixa, Banco do Brasil e demais instituições financeiras, conforme critérios técnicos exigidos.",
      isHighlighted: false,
    },
    {
      icon: <Scale className="w-10 h-10" aria-hidden="true" />,
      title: "Perícias Judiciais",
      description: "Laudo pericial de engenharia civil para ações judiciais e extrajudiciais, conflitos construtivos e vícios em obras.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
            Serviços em Laudos Técnicos e Perícias
          </h2>
          <p className="text-silver text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Laudos técnicos, periciais e vistorias para imóveis residenciais, comerciais e industriais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
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