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
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipToContent />
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
