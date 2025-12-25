import { CheckCircle } from "lucide-react";

const ReportTypesSection = () => {
  const reportTypes = [
    "Laudo técnico de engenharia civil",
    "Laudo de vistoria de engenharia civil",
    "Laudo de avaliação de imóvel",
    "Laudo pericial de engenharia civil",
    "Laudo de engenharia para Caixa/Bancos",
    "Relatório técnico de engenharia civil",
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
              Tipos de Laudos de Engenharia Civil
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-100">
              Conheça os principais laudos que emitimos.
            </p>
          </div>

          {/* Report Types Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {reportTypes.map((report, index) => (
              <div 
                key={report}
                className={`flex items-center gap-3 p-4 bg-background rounded-lg border border-border opacity-0 animate-fade-up animation-delay-${(index + 2) * 100}`}
              >
                <CheckCircle className="w-5 h-5 text-silver-dark shrink-0" />
                <span className="font-display text-card-foreground">
                  {report}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportTypesSection;
