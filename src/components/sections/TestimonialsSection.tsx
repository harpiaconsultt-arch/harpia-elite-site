import { useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing Trustindex widgets from document body
    const existingWidgets = document.querySelectorAll('body > .trustindex-widget-container, body > [class*="trustindex"]');
    existingWidgets.forEach(widget => widget.remove());
    
    // Remove any Trustindex scripts from body
    const existingScripts = document.querySelectorAll('script[src*="trustindex"]');
    existingScripts.forEach(script => script.remove());

    // Load script only inside our container
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?c60e62361b0324244f566dcd319";
      script.async = true;
      widgetRef.current.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const widgets = document.querySelectorAll('[class*="trustindex"]');
      widgets.forEach(widget => {
        if (!widget.closest('#depoimentos')) {
          widget.remove();
        }
      });
    };
  }, []);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GS Laudos e Perícias",
    "description": "Laudos técnicos e perícias de engenharia em Barbacena e região",
    "url": "https://gslaudos.com.br",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section 
      className="py-16 lg:py-20 bg-navy-light/30"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 
            id="testimonials-heading"
            className="font-montserrat text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            Depoimentos
          </h2>
          <p className="font-montserrat text-silver max-w-xl mx-auto">
            O que nossos clientes dizem sobre nossos serviços.
          </p>
        </header>

        {/* Trustindex Google Reviews Widget Container */}
        <div 
          ref={widgetRef}
          className="flex justify-center trustindex-container"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
