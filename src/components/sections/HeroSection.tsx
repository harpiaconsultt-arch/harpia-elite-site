import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Laudo técnico de engenharia civil em Barbacena MG"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-silver-light text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up">
            Engenharia Civil – Laudos e Perícias em Barbacena – MG
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-8 opacity-0 animate-fade-up animation-delay-100">
            Laudo Técnico de Engenharia Civil
            <span className="block text-silver-light">com Diagnóstico Preciso e Fundamentado</span>
          </h1>

          {/* Subtitle */}
          <p className="text-silver text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Laudos técnicos, periciais e vistorias de engenharia civil em Barbacena – MG.
          </p>

          {/* Supporting phrase */}
          <p className="text-silver/80 text-base md:text-lg max-w-2xl mx-auto mb-12 italic opacity-0 animate-fade-up animation-delay-200">
            "Sem laudo bem fundamentado, toda decisão sobre imóveis é risco."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              SOLICITAR LAUDO TÉCNICO / PERICIAL
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <div className="w-6 h-10 border-2 border-silver/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-silver rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
