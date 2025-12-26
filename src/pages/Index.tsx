import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import TechnologySection from "@/components/sections/TechnologySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReportTypesSection from "@/components/sections/ReportTypesSection";
import MethodologySection from "@/components/sections/MethodologySection";
import FAQSection from "@/components/sections/FAQSection";
import TeamSection from "@/components/sections/TeamSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      
      <main>
        <HeroSection />
        
        <AnimatedSection>
          <div id="tecnologia">
            <TechnologySection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="servicos">
            <ServicesSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="tipos-laudos">
            <ReportTypesSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="metodologia">
            <MethodologySection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="faq">
            <FAQSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="equipe">
            <TeamSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="contato">
            <LocationSection />
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
