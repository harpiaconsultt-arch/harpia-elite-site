import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto custa um laudo técnico de engenharia civil?",
      answer: "O custo de um laudo técnico de engenharia varia conforme o tipo de imóvel, complexidade da análise, necessidade de ensaios complementares e deslocamento. Em geral, o valor é definido após uma avaliação inicial do escopo. Fornecemos orçamento detalhado antes do início da vistoria.",
    },
    {
      question: "Qual a diferença entre laudo técnico, relatório técnico e parecer técnico de engenharia?",
      answer: "O laudo técnico de engenharia civil é um documento mais completo, com descrição, análise, conclusão e, quando necessário, recomendações. O relatório técnico costuma ser mais sintético, usado quando o objeto é mais restrito. Já o parecer técnico de engenharia é focado em responder a questões específicas, muito comum em perícias e processos judiciais.",
    },
    {
      question: "Qualquer engenheiro pode fazer laudo técnico de engenharia civil?",
      answer: "Laudos técnicos de engenharia civil devem ser elaborados por engenheiro devidamente habilitado e com atribuições compatíveis junto ao CREA. Para laudos estruturais, vistorias e avaliações de imóveis, é essencial que o profissional tenha experiência na área específica e registre a respectiva ART.",
    },
    {
      question: "Os laudos atendem às exigências da Caixa e de outros bancos?",
      answer: "Sim. Elaboramos laudo de engenharia para Caixa e demais instituições financeiras, observando os requisitos técnicos de cada agente financeiro, para utilização em financiamentos, refinanciamentos e regularizações.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
              Perguntas Frequentes sobre Laudos Técnicos de Engenharia Civil
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-navy-light border border-silver/20 rounded-lg px-6 opacity-0 animate-fade-up animation-delay-${(index + 2) * 100}`}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-silver-light font-display text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-silver leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
