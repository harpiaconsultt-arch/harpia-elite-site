import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contato@harpiaconsultoria.com.br", label: "Email" },
  ];

  return (
    <footer className="py-12 lg:py-16 bg-navy border-t border-silver/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-display text-2xl font-semibold text-silver-light tracking-wide">
              HARPIA
            </h3>
            <p className="text-silver/70 text-sm tracking-[0.2em] uppercase mt-1">
              Consultoria
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
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
            © {currentYear} Harpia Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-silver/40 text-xs mt-2">
            CREA-XX 00000 | CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
