import { FileCheck } from "lucide-react";

const ReportTypesSection = () => {
  const reportTypes = [
    {
      title: "Avaliação de Valor de Imóvel",
      subtitle: "Financiamento e Bancos",
      seoLabel: "laudo de avaliação de imóvel engenheiro civil",
    },
    {
      title: "Laudo de Patologia Estrutural",
      subtitle: "Manifestação Patológica",
      seoLabel: "laudo técnico engenharia civil patologia",
    },
    {
      title: "Laudo de Vistoria de Engenharia Civil",
      subtitle: "Antes e Depois de Obras",
      seoLabel: "engenheiro civil vistoria",
    },
    {
      title: "Laudo Pericial de Engenharia Civil",
      subtitle: "Judicial e Extrajudicial",
      seoLabel: "laudo pericial engenharia civil",
    },
    {
      title: "Laudo de Engenharia para Caixa e Bancos",
      subtitle: "Conformidade com Instituições Financeiras",
      seoLabel: "laudo engenharia caixa",
    },
    {
      title: "Relatório Técnico de Engenharia Civil",
      subtitle: "Parecer Técnico",
      seoLabel: "relatório técnico engenharia civil",
    },
  ];

  return (
    <section 
      className="py-24 lg:py-32 bg-navy"
      aria-label="Tipos de laudos de engenharia civil disponíveis"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-14">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
              Tipos de Laudos de Engenharia Civil
            </h2>
            <p className="text-silver text-lg opacity-0 animate-fade-up animation-delay-100">
              Conheça os principais laudos que emitimos.
            </p>
          </header>

          {/* Report Types Grid - 2 columns desktop, 1 column mobile */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
            role="list"
            aria-label="Lista de tipos de laudos de engenharia"
          >
            {reportTypes.map((report, index) => (
              <article 
                key={report.title}
                className="group flex items-start gap-4 p-6 bg-navy-light rounded-lg border border-silver/20 opacity-0 animate-fade-up hover:border-silver/40 transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                role="listitem"
                aria-label={report.seoLabel}
                title={report.seoLabel}
              >
                <div className="w-10 h-10 rounded-lg bg-silver/10 flex items-center justify-center shrink-0 group-hover:bg-silver/20 transition-colors">
                  <FileCheck 
                    className="w-5 h-5 text-silver" 
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-foreground text-base lg:text-lg leading-tight mb-1">
                    {report.title}
                  </h3>
                  <p className="font-sans text-silver text-sm">
                    {report.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Final Note */}
          <p className="text-center text-silver/80 text-sm mt-10 opacity-0 animate-fade-up animation-delay-500">
            Todos os laudos seguem normas aplicáveis e incluem ART quando necessário.
          </p>
        </div>
      </div>

      {/* Schema markup for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Tipos de Laudos de Engenharia Civil",
            "description": "Principais tipos de laudos técnicos e periciais de engenharia civil emitidos em Barbacena MG",
            "numberOfItems": reportTypes.length,
            "itemListElement": reportTypes.map((report, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": report.title,
              "description": report.subtitle,
              "provider": {
                "@type": "ProfessionalService",
                "name": "Harpia Consultoria",
                "areaServed": "Barbacena, MG"
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default ReportTypesSection;