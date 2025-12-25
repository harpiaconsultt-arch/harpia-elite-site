import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LocationSection = () => {
  // Google Maps embed URL for Barbacena - MG
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.89599567812!2d-43.8097437!3d-21.2257539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa30e7d79c4bddf%3A0x5c7c0c6c66a0e72c!2sBarbacena%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr";

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Endereço",
      value: "Rua Exemplo, 123 – Centro\nBarbacena – MG\nCEP 36.200-000",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefone",
      value: "(32) 0000-0000\n(32) 90000-0000",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "E-mail",
      value: "contato@harpiaconsultoria.com.br",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h\nSábado: 9h às 13h",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
            Atendimento em Barbacena – MG e Região
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Atendemos Barbacena – MG e cidades da região, com foco em laudos técnicos de engenharia civil, vistorias, perícias e avaliações de imóveis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8 opacity-0 animate-fade-up animation-delay-200">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-silver/30 flex items-center justify-center text-silver-dark shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-silver-dark uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-card-foreground whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <div className="rounded-lg overflow-hidden shadow-card border border-border h-80 lg:h-full min-h-[320px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização em Barbacena MG - Laudos Técnicos de Engenharia Civil"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
