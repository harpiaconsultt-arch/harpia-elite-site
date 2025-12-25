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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        <div id="tecnologia">
          <TechnologySection />
        </div>
        
        <div id="servicos">
          <ServicesSection />
        </div>
        
        <div id="tipos-laudos">
          <ReportTypesSection />
        </div>
        
        <div id="metodologia">
          <MethodologySection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <div id="equipe">
          <TeamSection />
        </div>
        
        <div id="contato">
          <LocationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
