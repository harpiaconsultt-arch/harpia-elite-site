import { CheckCircle } from "lucide-react";

const ReportTypesSection = () => {
  const reportTypes = [
    {
      title: "Laudo técnico de engenharia civil",
      description: "Avaliação técnica de elementos estruturais, manifestações patológicas, segurança de uso e conservação.",
    },
    {
      title: "Laudo de vistoria de engenharia civil",
      description: "Registro detalhado do estado de conservação e eventuais danos em imóveis, antes ou depois de obras, locações e transações.",
    },
    {
      title: "Laudo de avaliação de imóvel por engenheiro civil",
      description: "Determinação do valor de mercado ou valor de liquidação de imóveis, com metodologia técnica fundamentada.",
    },
    {
      title: "Laudo pericial de engenharia civil",
      description: "Documento que responde quesitos técnicos em processos judiciais ou extrajudiciais.",
    },
    {
      title: "Laudo de engenharia para Caixa e demais bancos",
      description: "Laudos técnicos específicos para atender a exigências de financiamento habitacional e comercial.",
    },
    {
      title: "Relatório técnico de engenharia civil",
      description: "Parecer técnico mais sintético, indicado quando não é necessário um laudo completo, mas sim registro técnico fundamentado.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
              Principais Tipos de Laudos de Engenharia Civil que Elaboramos
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
              Conheça os principais tipos de laudos de engenharia civil e laudos técnicos que emitimos, de acordo com a finalidade e a necessidade de cada caso.
            </p>
          </div>

          {/* Report Types Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {reportTypes.map((report, index) => (
              <div 
                key={report.title}
                className={`flex gap-4 p-6 bg-background rounded-lg border border-border opacity-0 animate-fade-up animation-delay-${(index + 2) * 100}`}
              >
                <div className="shrink-0">
                  <CheckCircle className="w-6 h-6 text-silver-dark" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                    {report.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {report.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <p className="text-center text-muted-foreground italic opacity-0 animate-fade-up animation-delay-500">
            Todos os laudos técnicos de engenharia civil seguem as normas aplicáveis e são acompanhados de ART quando necessário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReportTypesSection;
