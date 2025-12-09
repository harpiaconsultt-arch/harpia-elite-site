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
      description: "Reunião inicial para entender suas necessidades específicas e definir o escopo técnico da inspeção ou laudo.",
    },
    {
      number: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Inspeção Técnica",
      description: "Visita técnica in loco com equipamentos de última geração para coleta de dados e evidências estruturais.",
    },
    {
      number: "03",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Análise e Parecer",
      description: "Processamento dos dados coletados, simulações computacionais e elaboração do parecer técnico fundamentado.",
    },
    {
      number: "04",
      icon: <Award className="w-6 h-6" />,
      title: "Entrega e Laudo Final",
      description: "Apresentação do laudo completo com recomendações técnicas, acompanhamento e suporte pós-entrega.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-silver-dark text-sm font-medium tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-up">
              Processo
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground opacity-0 animate-fade-up animation-delay-100">
              Nossa Metodologia Exclusiva
            </h2>
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
