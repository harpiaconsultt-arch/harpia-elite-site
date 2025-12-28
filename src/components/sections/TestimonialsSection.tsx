import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial = ({ name, role, content, rating }: TestimonialProps) => (
  <article 
    className="bg-navy-light/50 rounded-xl p-6 lg:p-8 border border-silver/10 hover:border-silver/20 transition-colors relative"
    itemScope
    itemType="https://schema.org/Review"
  >
    <Quote className="w-8 h-8 text-silver/20 absolute top-6 right-6" aria-hidden="true" />
    
    {/* Rating */}
    <div 
      className="flex gap-1 mb-4"
      itemProp="reviewRating"
      itemScope
      itemType="https://schema.org/Rating"
    >
      <meta itemProp="ratingValue" content={String(rating)} />
      <meta itemProp="bestRating" content="5" />
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-silver/30'}`}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{rating} de 5 estrelas</span>
    </div>

    {/* Content */}
    <blockquote 
      className="font-montserrat text-silver/90 text-sm lg:text-base leading-relaxed mb-6"
      itemProp="reviewBody"
    >
      "{content}"
    </blockquote>

    {/* Author */}
    <footer 
      className="flex items-center gap-3"
      itemProp="author"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="w-10 h-10 rounded-full bg-navy border border-silver/20 flex items-center justify-center">
        <span className="font-montserrat text-sm font-semibold text-foreground">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>
      <div>
        <p className="font-montserrat text-sm font-medium text-foreground" itemProp="name">
          {name}
        </p>
        <p className="font-montserrat text-xs text-silver/70">
          {role}
        </p>
      </div>
    </footer>
  </article>
);

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Carlos Mendes",
      role: "Proprietário de Imóvel",
      content: "Excelente trabalho na elaboração do laudo técnico. Profissionais competentes e atenciosos que entregaram o relatório dentro do prazo combinado.",
      rating: 5,
    },
    {
      name: "Maria Helena Silva",
      role: "Síndica de Condomínio",
      content: "Contratamos para uma vistoria estrutural completa do edifício. O laudo foi detalhado e nos ajudou a planejar as manutenções necessárias.",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      role: "Advogado",
      content: "Precisei de um laudo pericial para um processo judicial e o trabalho técnico foi impecável. Recomendo para quem precisa de perícias de engenharia.",
      rating: 5,
    },
  ];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GS Laudos e Perícias",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": String(testimonials.length),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(t.rating),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.content
    }))
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
