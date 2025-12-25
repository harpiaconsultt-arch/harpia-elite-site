import { FileText, Building, Landmark, Scale } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  isHighlighted?: boolean;
  delay: string;
}

const ServiceCard = ({ icon, title, description, details, isHighlighted, delay }: ServiceCardProps) => (
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
    
    <p className="text-silver leading-relaxed mb-4">
      {description}
    </p>
    
    <p className="text-silver/70 text-sm leading-relaxed">
      {details}
    </p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Laudos Técnicos de Engenharia Civil",
      description: "Elaboração de laudo técnico de engenharia civil e relatórios técnicos para regularização de imóveis, reformas, ampliação de carga, comprovação de estabilidade, atendimento a exigências de prefeituras e órgãos públicos.",
      details: "Indicados para: adequações em projetos, manifestações patológicas, alterações estruturais e comprovação de condições de segurança.",
      isHighlighted: false,
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Vistorias e Laudos de Avaliação de Imóveis",
      description: "Vistoria técnica por engenheiro civil e emissão de laudo de avaliação de imóvel para compra e venda, financiamentos, garantia, seguros e atualização patrimonial.",
      details: "Atendemos solicitações de avaliação de imóveis por engenheiro civil em conformidade com as normas aplicáveis, com a emissão de laudos de vistoria e relatórios fotográficos.",
      isHighlighted: true,
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Laudos para Caixa e Bancos",
      description: "Emissão de laudo de engenharia para Caixa, Banco do Brasil e demais instituições financeiras, com laudo do engenheiro conforme os critérios técnicos exigidos em financiamentos, repactuações e liberações de recursos.",
      details: "Inclui laudo engenharia Caixa, relatórios técnicos de vistoria e documentação complementar quando necessário.",
      isHighlighted: false,
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Perícias Judiciais e Extrajudiciais",
      description: "Laudo pericial de engenharia civil para ações judiciais e extrajudiciais, abrangendo conflitos construtivos, vícios em obras, infiltrações, trincas, recalques, cobranças indevidas e discussão contratual.",
      details: "Elaboramos laudos periciais de engenharia civil, laudo judicial engenharia e parecer técnico de engenharia para suporte a advogados, empresas e pessoas físicas.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
            Serviços em Laudos Técnicos, Perícias e Vistorias de Engenharia Civil
          </h2>
          <p className="text-silver text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Atuamos na emissão de laudos técnicos de engenharia civil, laudos periciais e relatórios para imóveis residenciais, comerciais e industriais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
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
