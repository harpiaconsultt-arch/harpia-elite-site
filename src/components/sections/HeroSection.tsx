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
        <div className="max-w-5xl mx-auto">
          {/* Tagline - subtle */}
          <p className="text-silver/60 text-xs tracking-[0.25em] uppercase mb-10 opacity-0 animate-fade-up">
            Barbacena – MG
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight mb-8 opacity-0 animate-fade-up animation-delay-100">
            Laudo Técnico de Engenharia Civil <br className="hidden md:block" />
            <span className="text-silver-light">com Diagnóstico Preciso</span>
          </h1>

          {/* Subtitle - single line */}
          <p className="text-silver text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-200">
            Laudos técnicos, perícias e vistorias de engenharia civil em Barbacena – MG.
          </p>

          {/* Supporting phrase */}
          <p className="text-silver/70 text-sm md:text-base max-w-xl mx-auto mb-14 italic opacity-0 animate-fade-up animation-delay-200">
            "Sem laudo bem fundamentado, toda decisão sobre imóveis é risco."
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-up animation-delay-300">
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
