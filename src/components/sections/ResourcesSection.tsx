import { FileText, Download, ArrowRight, BookOpen, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const blogArticles = [
    {
      title: "O que é um Laudo Técnico de Engenharia Civil?",
      description: "Entenda a diferença entre laudo, parecer e relatório técnico e quando cada um é necessário.",
      readTime: "5 min",
      href: "#",
    },
    {
      title: "Laudo de Avaliação de Imóveis: Guia Completo",
      description: "Saiba como funciona a avaliação de imóveis e quais fatores influenciam no valor.",
      readTime: "7 min",
      href: "#",
    },
    {
      title: "Perícia Judicial: Como Funciona o Processo",
      description: "Conheça as etapas de uma perícia judicial e a importância do laudo pericial.",
      readTime: "6 min",
      href: "#",
    },
    {
      title: "Vistoria Cautelar de Vizinhança: Por que é Importante?",
      description: "Proteja seu patrimônio durante obras vizinhas com uma vistoria preventiva.",
      readTime: "4 min",
      href: "#",
    },
  ];

  const pdfGuides = [
    {
      title: "Checklist: Documentos para Laudo Técnico",
      description: "Lista completa de documentos necessários para solicitar seu laudo.",
      fileName: "checklist-laudo-tecnico.pdf",
    },
    {
      title: "Guia: Tipos de Laudos de Engenharia",
      description: "Conheça os principais tipos de laudos e quando utilizar cada um.",
      fileName: "guia-tipos-laudos.pdf",
    },
    {
      title: "Manual: Preparação para Vistoria",
      description: "Como se preparar para a vistoria técnica do seu imóvel.",
      fileName: "manual-vistoria.pdf",
    },
  ];

  const handleDownload = (fileName: string) => {
    // In production, this would link to actual PDF files
    const phoneNumber = "5532982162913";
    const message = `Olá! Gostaria de receber o material: ${fileName}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-6">
            <BookOpen className="w-4 h-4 text-navy" aria-hidden="true" />
            <span className="text-sm font-medium text-navy tracking-wide uppercase">
              Conhecimento Técnico
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
            Recursos Técnicos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Artigos e materiais exclusivos sobre laudos técnicos e engenharia civil.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Blog Articles */}
            <div className="opacity-0 animate-fade-up animation-delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-navy" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-card-foreground">
                  Artigos do Blog
                </h3>
              </div>

              <div className="space-y-4">
                {blogArticles.map((article, index) => (
                  <a
                    key={index}
                    href={article.href}
                    className="group block p-5 bg-background rounded-lg border border-border hover:border-silver/40 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-sans text-base font-medium text-card-foreground group-hover:text-navy transition-colors mb-2">
                          {article.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {article.description}
                        </p>
                        <span className="inline-block mt-3 text-xs text-silver-dark font-medium uppercase tracking-wider">
                          {article.readTime} de leitura
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-silver group-hover:text-navy group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-navy/20 text-navy hover:bg-navy hover:text-silver-light"
                >
                  Ver todos os artigos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* PDF Guides */}
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                  <FileDown className="w-5 h-5 text-navy" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-card-foreground">
                  Materiais para Download
                </h3>
              </div>

              <div className="space-y-4">
                {pdfGuides.map((guide, index) => (
                  <div
                    key={index}
                    className="p-5 bg-background rounded-lg border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0">
                        <Download className="w-5 h-5 text-navy" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-sans text-base font-medium text-card-foreground mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {guide.description}
                        </p>
                        <Button
                          onClick={() => handleDownload(guide.fileName)}
                          size="sm"
                          className="bg-navy hover:bg-navy-light text-silver-light"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Solicitar Material
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lead Capture CTA */}
              <div className="mt-8 p-6 bg-navy rounded-xl">
                <div className="text-center">
                  <h4 className="font-sans text-lg font-semibold text-silver-light mb-2">
                    Receba Conteúdo Exclusivo
                  </h4>
                  <p className="text-silver text-sm mb-4">
                    Novos artigos e materiais técnicos direto no seu WhatsApp.
                  </p>
                  <Button
                    onClick={() => handleDownload("newsletter")}
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  >
                    Quero Receber
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
