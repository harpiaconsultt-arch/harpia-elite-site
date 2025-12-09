import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Serviços", href: "#servicos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-display text-xl lg:text-2xl font-semibold text-foreground tracking-wide">
              HARPIA
            </span>
            <span className="text-silver text-[10px] tracking-[0.25em] uppercase -mt-1">
              Consultoria
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-silver hover:text-foreground text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button variant="hero" size="sm" onClick={() => scrollToSection("#contato")}>
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 border-t border-silver/20 pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-silver hover:text-foreground text-left py-2 font-medium tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="hero" className="mt-4" onClick={() => scrollToSection("#contato")}>
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
