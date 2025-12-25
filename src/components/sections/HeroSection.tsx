import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  const phoneNumber = "5531982162913";
  
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de falar com um engenheiro civil sobre laudos técnicos.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCTAClick = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Laudo técnico de engenharia civil em Barbacena MG"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Tagline - subtle */}
          <p className="text-silver/60 text-xs tracking-[0.25em] uppercase mb-12 opacity-0 animate-fade-up">
            Engenharia Civil – Laudos e Perícias em Barbacena – MG
          </p>

          {/* Main Headline - H1 */}
          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight mb-10 opacity-0 animate-fade-up animation-delay-100">
            Laudo Técnico de Engenharia Civil <br className="hidden sm:block" />
            <span className="text-silver-light">com Diagnóstico Preciso e Fundamentado</span>
          </h1>

          {/* Subtitle - single line */}
          <p className="text-silver text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up animation-delay-200">
            Laudos técnicos, perícias e vistorias de engenharia civil em Barbacena – MG.
          </p>

          {/* Supporting phrase */}
          <p className="text-silver/70 text-sm md:text-base max-w-xl mx-auto mb-16 italic opacity-0 animate-fade-up animation-delay-200">
            "Sem laudo bem fundamentado, toda decisão sobre imóveis é risco."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-300">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-pulse-glow w-full sm:w-auto"
              onClick={handleCTAClick}
            >
              SOLICITAR LAUDO TÉCNICO / PERICIAL
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-silver/40 text-silver-light hover:bg-silver/10 hover:border-silver w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com engenheiro civil
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