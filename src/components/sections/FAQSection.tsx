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
      answer: "O valor varia conforme o tipo de imóvel, complexidade e necessidade de ensaios. Fornecemos orçamento detalhado após avaliação inicial do escopo.",
    },
    {
      question: "Qual a diferença entre laudo técnico, relatório e parecer?",
      answer: "Laudo técnico é completo com análise e conclusão. Relatório técnico é mais sintético. Parecer técnico responde questões específicas, comum em perícias.",
    },
    {
      question: "Qualquer engenheiro pode fazer laudo técnico?",
      answer: "Não. Laudos devem ser elaborados por engenheiro habilitado com atribuições no CREA e experiência comprovada na área específica.",
    },
    {
      question: "Os laudos atendem Caixa e bancos?",
      answer: "Sim. Elaboramos laudos conforme requisitos técnicos de cada instituição financeira para financiamentos e regularizações.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
              Perguntas Frequentes sobre Laudos Técnicos
            </h2>
            <p className="text-silver text-lg opacity-0 animate-fade-up animation-delay-100">
              Tire suas dúvidas sobre laudos de engenharia civil.
            </p>
          </header>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-navy-light border border-silver/20 rounded-lg px-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-silver-light font-sans text-base lg:text-lg py-6">
                  <h3 className="font-semibold">{faq.question}</h3>
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