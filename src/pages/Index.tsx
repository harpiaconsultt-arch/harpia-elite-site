import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import TechnologySection from "@/components/sections/TechnologySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReportTypesSection from "@/components/sections/ReportTypesSection";
import MethodologySection from "@/components/sections/MethodologySection";
import FAQSection from "@/components/sections/FAQSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-silver focus:text-navy focus:rounded-md focus:font-semibold focus:shadow-lg transition-all"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <WhatsAppButton />
      
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        
        <AnimatedSection>
          <div id="tecnologia" className="scroll-mt-24">
            <TechnologySection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="servicos" className="scroll-mt-24">
            <ServicesSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="tipos-laudos" className="scroll-mt-24">
            <ReportTypesSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="metodologia" className="scroll-mt-24">
            <MethodologySection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="faq" className="scroll-mt-24">
            <FAQSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="equipe" className="scroll-mt-24">
            <TeamSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="depoimentos" className="scroll-mt-24">
            <TestimonialsSection />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="recursos" className="scroll-mt-24">
            <ResourcesSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="contato" className="scroll-mt-24">
            <LocationSection />
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
