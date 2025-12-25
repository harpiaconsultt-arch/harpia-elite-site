import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn", ariaLabel: "Visite nosso LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram", ariaLabel: "Visite nosso Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contato@harpiaconsultoria.eng.br", label: "Email", ariaLabel: "Envie um e-mail" },
  ];

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Tipos de Laudos", href: "#tipos-laudos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 lg:py-16 bg-navy border-t border-silver/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-sans text-2xl font-semibold text-silver-light tracking-wide">
              HARPIA
            </h3>
            <p className="text-silver/70 text-sm tracking-[0.2em] uppercase mt-1">
              Consultoria
            </p>
          </div>

          {/* Description */}
          <div className="max-w-xl mb-8">
            <p className="text-silver leading-relaxed">
              Laudos técnicos, periciais e vistorias de engenharia civil em Barbacena – MG.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8" aria-label="Links do rodapé">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-silver hover:text-silver-light transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.ariaLabel}
                className="w-10 h-10 rounded-full border border-silver/30 flex items-center justify-center text-silver hover:text-silver-light hover:border-silver-light transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-silver/20 mb-8" />

          {/* Copyright */}
          <p className="text-silver/60 text-sm">
            © 2025 Harpia Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-silver/40 text-xs mt-2">
            CREA-MG 144817DDMG | CNPJ: 46.328.659/0001-72
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;