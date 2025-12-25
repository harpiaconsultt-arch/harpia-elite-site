import { MessageSquare, Search, FileCheck, Award } from "lucide-react";

interface MethodologyStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  delay: string;
}

const MethodologyStep = ({ number, icon, title, description, isLast, delay }: MethodologyStepProps) => (
  <div className={`relative flex gap-6 lg:gap-8 opacity-0 animate-slide-in-left ${delay}`}>
    {/* Timeline */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border-2 border-silver bg-off-white flex items-center justify-center text-silver-dark font-semibold">
        {number}
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-gradient-to-b from-silver to-silver/20 mt-4" />
      )}
    </div>

    {/* Content */}
    <div className="pb-12 lg:pb-16">
      <div className="flex items-center gap-4 mb-3">
        <div className="text-silver-dark">
          {icon}
        </div>
        <h3 className="font-display text-xl lg:text-2xl font-semibold text-card-foreground">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  </div>
);

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultoria e Escopo",
      description: "Entendimento da demanda, análise de documentos existentes e definição do tipo de laudo de engenharia civil necessário: laudo técnico, laudo de vistoria, laudo pericial ou relatório técnico.",
    },
    {
      number: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Inspeção Técnica em Campo",
      description: "Visita técnica in loco realizada por engenheiro civil, com registro fotográfico, medições e, quando necessário, uso de equipamentos de inspeção não destrutiva para subsidiar o laudo técnico de engenharia.",
    },
    {
      number: "03",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Análise e Parecer",
      description: "Processamento dos dados coletados, análise das evidências, verificação de normas e elaboração do parecer técnico de engenharia que dará origem ao laudo técnico ou laudo pericial de engenharia civil.",
    },
    {
      number: "04",
      icon: <Award className="w-6 h-6" />,
      title: "Entrega do Laudo Final",
      description: "Apresentação do laudo técnico de engenharia civil completo, com conclusão, recomendações técnicas quando cabíveis e anexos. Documento apto a ser utilizado perante órgãos públicos, instituições financeiras e no âmbito judicial.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
              Metodologia para Elaboração de Laudos Técnicos e Periciais
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
              Processo estruturado para garantir laudos de engenharia civil claros, objetivos e tecnicamente fundamentados.
            </p>
          </div>

          {/* Timeline */}
          <div className="pl-4 lg:pl-8">
            {steps.map((step, index) => (
              <MethodologyStep
                key={step.number}
                {...step}
                isLast={index === steps.length - 1}
                delay={`animation-delay-${(index + 2) * 100}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
